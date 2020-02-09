// console.log('我是index.js')

// 静态导入
// import $ from 'jquery'; // $不是全局变量
// console.log('$', $) // 有值
// console.log('window.$', window.$) // undefind
// $('body').css('backgroundColor', 'green');


// import { getUserInfo } from './api/http.js'

// getUserInfo().then(res => {
//   console.log(111)
// }).catch(err => console.log(err))


// import axios from 'axios'

// axios.get('http://localhost:9999/api/getUserInfo')
// axios.get('/api/getUserInfo')
//   .then(res => {
//     console.log('res', res)
//   })
//   .catch(err => console.log(err))

// import str from './hotmodule.js'
// console.log('outer-str', str)

// if (module.hot) {
//   module.hot.accept('./hotmodule.js', function() {
//     var str = require('./hotmodule.js')
//     console.log('inner-str', str)
//   })
// }

// var math = require('./math.js')
// console.log(math.add(1, 2))

// import { add } from './math.js'
// console.log(add(1, 2))

// import { aaa, bbb, ccc } from './constant.js'
// console.log(aaa + bbb + ccc)
// console.log(aaa, bbb, ccc)

// 引入css
// import './css/index.css'
// import './css/a.css'

// 引入less
// import './less/index.less'
// 引入sass
// import './sass/index.scss'

// 引入bootstrap的css文件
// import 'bootstrap/dist/css/bootstrap.css'


// js，多入口
// import $ from 'jquery'
// $(function() {
//   $('<div></div>').html('index.js...').appendTo('body')
// })


// 动态导入
// function getComponent() {
//   return import('jquery').then(({ default: $}) => {
//     return $('<div></div>').html('index.js...')
//   })
// }

// window.onload = function() {
//   document.getElementById('btn').onclick = function() {
//     getComponent().then((item) => {
//       item.appendTo('body')
//     })
//   }
// }


// import obj from './a.js'
// console.log(obj.name)

// import $ from 'jquery'
// import bootstrap from 'bootstrap'

// import moment from 'moment'
// import 'moment/locale/zh-cn.js'
// moment.locale('zh-cn')
// console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))


// // 第三方库
// import Vue from 'vue/dist/vue.js'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const homeComponent = {
//   template: '<h2>我是home</h2>'
// }
// const newsComponent = {
//   template: '<h2>我是news</h2>'
// }

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/home',
//       component: homeComponent
//     },
//     {
//       path: '/news',
//       component: newsComponent
//     }
//   ]
// })

// new Vue({
//   el: '#app',
//   data: {
//     msg: 'hello world'
//   },
//   router
// })


// // prefetching
// window.onload = function() {
//   this.document.getElementById('btn').onclick = function () {
//     // 当用户点击按钮时才会执行
//     getComponent().then(item => {
//       item.appendTo('body')
//     })
//   }
// }

// // 动态导入
// function getComponent() {
//   return import('jquery').then(({ default: $}) => {
//     return $('<div></div>').html('我是index.js...')
//   }) 
// }

console.log(111)
function getComponent() {
  
  return import(/* webpackPrefetch: true */'jquery').then(({ default: $}) => {
    return $('<div></div>').html('index.js...')
  })
}
window.onload = function() {
  document.getElementById('btn').onclick = function() {
    getComponent().then((item) => {
      item.appendTo('body')
    })
  }
}
