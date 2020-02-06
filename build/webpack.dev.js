const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development', // development production
  devServer: {
    proxy: {
      // '/api': 'http://localhost:9999'
      '/api': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    hot: true, // 开启热更新
    // contentBase: path.join(__dirname, 'src'),
    // contentBase: './src',
    open: true,
    port: 5000
  },
  plugins: [
    new webpack.DefinePlugin({
      'IS_DEV': 'true'
    })
  ],
  devtool: 'eval-cheap-module-source-map'
})