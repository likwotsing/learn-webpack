console.log('我是index.js')

import $ from 'jquery'; // $不是全局变量
console.log('$', $) // 有值
console.log('window.$', window.$) // undefind

// $('body').css('backgroundColor', 'green');

import { getUserInfo } from './api/http.js'

getUserInfo().then(res => {
  console.log(111)
}).catch(err => console.log(err))