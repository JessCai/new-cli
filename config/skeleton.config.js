const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const glob = require('glob');
const baseWebpackConfig = require('@vue/cli-service/webpack.config');

// const mode = process.env.NODE_ENV; // 当前启动模式
// const isProduction = ['production', 'prod'].includes(mode); // 判断是否是生产模式

function resolve(dir) {
  return path.join(__dirname, dir);
}
const entries = (() => {
  const result = {};
  glob.sync('./src/**?/**.entry.js').forEach((entry) => {
    const tmp = entry.split('/').splice(-3);
    const entryPath = resolve(`../skeleton/${tmp[1]}/entry-skeleton.js`);
    if (fs.existsSync(entryPath)) {
      result[tmp[1]] = entryPath;
    }
  });
  return result;
})();

// const sourceMapEnabled = isProduction ?
//   baseWebpackConfig.productionSourceMap :
//   baseWebpackConfig.cssSourceMap;
const skeletonWebpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  module: {},
  entry: entries,
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2'
  }),
  plugins: []
});
skeletonWebpackConfig.entry = entries;
// skeletonWebpackConfig.module.rules[1].options.loaders = utils.cssLoaders({
//   sourceMap: sourceMapEnabled,
//   extract: true
// });
module.exports = skeletonWebpackConfig;
