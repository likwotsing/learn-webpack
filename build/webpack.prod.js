
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  mode: 'production', // development production
  // cheap-module-source-map   eval-cheap-module-source-map
  plugins: [
    new webpack.DefinePlugin({
      'IS_DEV': 'false'
    })
  ],
  // devtool: 'cheap-module-source-map'
  // devtool: 'none'
  devtool: 'eval-cheap-module-source-map'
})