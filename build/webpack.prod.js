
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'production', // development production
  // cheap-module-source-map   eval-cheap-module-source-map
  plugins: [
    new webpack.DefinePlugin({
      'IS_DEV': 'false'
    })
  ],
  devtool: 'cheap-module-source-map'
})