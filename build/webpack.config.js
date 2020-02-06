var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development', // development production
  entry: {
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    // path: path.resolve(__dirname, './dist'),
    // path: path.join(__dirname, './dist'),
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    // contentBase: path.join(__dirname, 'src'),
    // contentBase: './src',
    // open: true,
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index', 'other']
    }),
    new HtmlWebpackPlugin({
      filename: 'other.html',
      template: './src/other.html',
      chunks: ['other']
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: path.resolve(__dirname, 'assets'), to: 'assets'}
    ]),
    new webpack.BannerPlugin({
      banner: 'hello world'
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式显式
            // limit: 5 * 1024,
            limit: 5,
            outputPath: 'images',
            name: '[name]-[hash:4].[ext]' // 默认是[hash].[ext]
          }
        }]
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader' // 如果只有一个，可以不用数组，写成字符串
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }, {
        // test: /\.(htm|html)$/i,
        // loader: 'html-withimg-loader'
        test: /\.html$/,
        loader: 'html-loader'
      }, 
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  // cheap-module-source-map   eval-cheap-module-source-map
  devtool: 'eval-cheap-module-source-map'
}