const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
    vue: ['vue', 'vuex', 'vue-router', 'axios'],
    ec: ['vue-echarts'],
    utils: ['moment'],
    ui: ['element-ui']
  },
  output: {
    path: path.join(__dirname, '..', 'public/vendor'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '..', 'public/vendor', '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd()
    }),
    new CopyWebpackPlugin([{
      from: resolve('./public/vendor'),
      to: resolve('./dist/resource/ai/assets/vendor'),
      toType: 'dir'
    }])
  ]
};
