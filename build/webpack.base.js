var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认为async，表示只会对异步加载的模块进行代码分隔
      minSize: 30000, // 模块最少大于30KB才拆分
      maxSize: 0,// 模块大小无上限，只要大于30KB都拆分。如果超过这个值，不是不拆分，是会再次拆分
      minChunks: 1, // 模块最少引用一次才会被拆分
      maxAsyncRequests: 6, // 异步加载同时发送的请求数量最大不能超过6，超过6的部分不拆分
      maxInitialRequests: 4, // 页面初始化时同时发送的请求数量最大不超过4，超过4的部分不拆分
      automaticNameDelimiter: '~', // 默认的连接符
      name: true, // 拆分的chunk名，设为true表示根据模块名和CacheGroup的key来自动生成
      cacheGroups: { // 缓存组配置，上面配置读取完成后进行拆分，如果需要把多个模块拆分到一个文件，就需要缓存，所以命名为缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 检查node_modules目录，只要模块在该目录下就使用上面配置拆分到这个组
          priority: -10, // 权重-10，决定了哪个组优先匹配，例如node_modules下有个模块要拆分，同时满足venders和default组，此时就会分到vendors组，因为-10 > -20
          // filename: 'vendors.js'
        },
        default: {
          minChunks: 2, // 最少引用2次才会被拆分
          priority: -20, // 权重-20
          reuseExistingChunk: true // 如果主入口中引入了两个模块，其中一个正好也引用了后一个，就会直接复用，无需引用两次
        }
      }
    }
  },
  entry: {
    index: './src/index.js'
  },
  // entry: {
  //   index: './src/index.js',
  //   other: './src/other.js'
  // },
  output: {
    path: path.resolve(__dirname, '../', './dist'),
    // path: path.join(__dirname, './dist'),
    // path: path.resolve('./dist'),
    filename: '[name].[contenthash:6]bundle.js',
    // filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'other.html',
    //   template: './src/other.html',
    //   chunks: ['other']
    // }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: path.resolve(__dirname, '../', 'assets'), to: 'assets'}
    ]),
    // new webpack.BannerPlugin({
    //   banner: 'hello world'
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../dist/manifest.json')
    // }),
    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, '../dist/vue_dll.js')
    // }),
    // new BundleAnalyzerPlugin()
  ],
  module: {
    noParse: /jquery|bootstrap|moment/,
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /\.less$/,
        // use: [ 'style-loader', 'css-loader', 'less-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }, {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        // use: ['style-loader', 'css-loader', 'sass-loader']
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
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src')
      }, {
        // test: /\.(htm|html)$/i,
        // loader: 'html-withimg-loader'
        test: /\.html$/,
        loader: 'html-loader'
      }, 
      // {
      //   test: require.resolve('jquery'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: '$'
      //   }]
      // }
    ]
  }
}