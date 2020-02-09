const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production', // development production
  entry: {
    vue: [
      'vue/dist/vue.js', // 因为在index.js里引入的是该文件，不是vue
      'vue-router'
    ]
  },
  output: {
    filename: '[name]_dll.js',
    path: path.resolve(__dirname, '../dist'),
    library: '[name]_dll'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dist/manifest.json')
    })
  ]
}