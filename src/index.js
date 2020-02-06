console.log('我是index.js')

// import $ from 'jquery'; // $不是全局变量
// console.log('$', $) // 有值
// console.log('window.$', window.$) // undefind

// $('body').css('backgroundColor', 'green');

// import { getUserInfo } from './api/http.js'

// getUserInfo().then(res => {
//   console.log(111)
// }).catch(err => console.log(err))


import axios from 'axios'

// axios.get('http://localhost:9999/api/getUserInfo')
// axios.get('/api/getUserInfo')
//   .then(res => {
//     console.log('res', res)
//   })
//   .catch(err => console.log(err))

import str from './hotmodule.js'
console.log('outer-str', str)

if (module.hot) {
  module.hot.accept('./hotmodule.js', function() {
    var str = require('./hotmodule.js')
    console.log('inner-str', str)
  })
}