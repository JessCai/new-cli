const path = require('path');
const glob = require('glob')
const merge = require('webpack-merge');
const fs = require('fs');
const configIndex = require('./config/index');
const weblog = require('webpack-log');
const colors = require('colors');
const log = weblog({ name: 'wds' });
const utils = require('./config/utils');
const resolve = (dir) => {
  return path.join(__dirname, dir);
}

let mode = process.env.NODE_ENV; //当前启动模式

const IS_PROD = ['production', 'prod'].includes(mode); //判断是否是生产模式
let moduleName = IS_PROD && JSON.parse(process.env.npm_config_argv).remain;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //启用包分析
const DllReferencePlugin = require('webpack').DllReferencePlugin; //dll插件
const dllEntry = Object.keys(require('./config/webpack.dll.config').entry); //获取配置的dll文件
const htmlWebpackIncludeAssets = require('html-webpack-include-assets-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
let skeletonPluginRoutes = require('./skeleton/skeletonConfig').skeletonRoutes;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const jsonData = glob.sync('mock/**.json');
const productionGzipExtensions = ['js', 'css'];
let getAssetsPlugin = () => {
  let result = [];
  dllEntry.forEach(dll => {

    result.push(`resource/ai/assets/vendor/${dll}.dll.js`)

  });
  return result;
}
// 获取项目entry入口
let getPateEntry = (globPath) => {
  let entries = {};
  glob.sync(globPath).forEach(function (entry) {
    var tmp = entry.split('/').splice(-3);
    let htmlPlugin = new HtmlWebpackPlugin({
      entry: `src/${tmp[1]}/${tmp[1]}.entry.js`,
      template: `src/${tmp[1]}/${tmp[1]}.ftl`,
      filename: `ai/${tmp[1]}.ftl`,
      title: `${tmp[1]}`,
      chunks: [`${tmp[1]}`],
      chunksSortMode: 'dependency'
    });
    entries[tmp[1]] = htmlPlugin.options;
  });
  return entries;
}
//制定模块
function getModuleName() {
  let entries = {};
  if (moduleName.length) {

    moduleName.forEach((module) => {
      if (fs.existsSync(resolve(`./src/${module}/${module}.entry.js`))) {
        let htmlPlugin = new HtmlWebpackPlugin({
          entry: `src/${module}/${module}.entry.js`,
          template: `src/${module}/${module}.ftl`,
          filename: `ai/${module}.ftl`,
          title: `${module}`,
          chunks: [`${module}`],
          chunksSortMode: 'dependency'
        });
        entries[module] = htmlPlugin.options;
      } else {
        log.info(colors.rainbow(`-------> ${module} 模块不存在，请确认路径以及文件名`));
      }

    })
  }
  return entries;
}
const entryPages = !IS_PROD || moduleName.length === 0 ? getPateEntry('src/**?/**.entry.js') : getModuleName();
module.exports = {
  // 入口文件，多页面配置
  pages: entryPages,
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 静态文件地址
  assetsDir: IS_PROD ? './resource/ai/static' : './',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // dll
  // 文件名hash
  filenameHashing: IS_PROD,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    // 开发环境上使用source-map，生产环境使用 cheap-module-eval-source-map
    config.devtool('#source-map')
    //全局引入polyfill
    // config.entry('polyfill').add('@babel/polyfill').end()
    //去除console.log
    if (IS_PROD) {
      config.plugin('compress').use(CompressionWebpackPlugin, [{
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }])
      config.plugin('uglify').use(UglifyJsPlugin, [{
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true, // console
            drop_console: true,
            pure_funcs: ['console.log'] // 移除console
          },
        },
        sourceMap: true,
        parallel: true,
      }]);
    }
    //配置eslint-loader 使用airbnb的eslint语法
    config.module
      .rule('eslint')
      .include.add([resolve('src')]).end().pre().use('eslint-loader')
      .tap(options => merge(options, { formatter: require("eslint-friendly-formatter") }));
    //压缩图片
    config.module
      .rule("images")
      .use('url-loader').tap(options => merge(options, {
        limit: 8192,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'resource/ai/static/img/[name].[ext]'
          }
        }
      }));
    // 配置ftl
    if (!IS_PROD) {
      config.module
        .rule('htmlVal')
        .test(/\.(ftl|html|htm)$/i)
        .use('html-loader')
        .loader('html-loader');
      config.module
        .rule('ftlVar')
        .test(/\.(ftl|html|htm)$/i)
        .use('ftl-loader')
        .loader('ffitm-ftl-loader')
        .options({
          mockDB: resolve(configIndex.mockConfigFile)
        });
    }
    //  静态资源的复制
    config.plugin('copy').tap(args => {
      args[0][0].from = resolve('./public');
      args[0][0].to = resolve('./dist/resource/ai/assets');
      IS_PROD && args[0][0].ignore.push('vendor/*');
      return args;
    })
    //vue骨架屏插件配置
    config
      .plugin('SkeletonWebpackPlugin')
      .use(SkeletonWebpackPlugin, [{
        webpackConfig: require('./config/skeleton.config'),
        quiet: true,
        minimize: true,
        router: {
          mode: 'hash',
          routes: skeletonPluginRoutes
        }
      }]);

    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static',
        }]);
    }
    //增加dllPlugin
    if (IS_PROD) {
      dllEntry.forEach(dll => {

        config.plugin(`dll-${dll}`).use(DllReferencePlugin, [{
          context: process.cwd(),
          manifest: resolve(`public/vendor/${dll}-manifest.json`)
        }]);

      })
      //自动html中加入dll.js
      config.plugin('html-assets').use(htmlWebpackIncludeAssets, [{
        assets: getAssetsPlugin(),
        // files: ['ai/main.ftl'],
        append: false,

      }])
    }
  },
  configureWebpack: (config) => {
    // plugins: [
    //   new webpack.DllReferencePlugin({
    //     context: process.cwd(),
    //     manifest: require("./public/vendor/vendor-manifest.json")
    //   })
    // ]
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('./src/'),
          '@c': resolve('./src/components/'),
          'vue$': 'vue/dist/vue.esm.js',
          '@p': !IS_PROD ? resolve('./public/') : '/resource/ai/assets/'
        },
      },
    });
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // data: `
        //   @import "@/assets/styles/common.scss";
        //   @import "@/assets/styles/reset.scss";
        // `,
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: !IS_PROD,
    openPage: `ai/main.ftl`,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //     // 设置代理
    //     // proxy all requests starting with /api to jsonplaceholder
    //     'http://localhost:8080/': {
    //         target: 'http://baidu.com:8080', //真实请求的目标地址
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^http://localhost:8080/': ''
    //         }
    //     }
    // },
    before: (app) => {
      jsonData.forEach(file => {
        const url = utils.getFilePath(file, 'mock');
        if (url) {
          app.get(RegExp(`.*/${url}.*`), (req, res) => {
            res.json({
              data: require(`./${file}`)
            })
          });
        }
      })
    },
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};