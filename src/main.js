import a from './a.js'

// 引入css
import './css/index.css';
import './css/a.css';

// 引入less
import './less/index.less';
import './sass/index.scss';

// 引入字体文件
import 'bootstrap/dist/css/bootstrap.css';


console.log('222', a)
console.log('111', '哈哈啊')

window.onload = function() {
  document.querySelector('ul').style.listStyle = 'none'
  document.querySelector('li').style.backgroundColor = 'yellow'
}

setTimeout(function() {
  console.log('没用箭头函数，一秒后我执行了')
}, 1000)

setTimeout(() => {
  console.log('我是用了箭头函数的setTimeout')
}, 1000)

class Person {
  constructor (name) {
    this.name = name
  }
}
let p = new Person('小黑')
console.log('p', p)

// 高级语法
class Dog {
  // 创建Dog对象时默认的name为大黄
  name = '大黄'
  static color = 'yellow'
}

let d = new Dog()
console.dir(d)
console.dir(Dog)

// generator
function *fn() {
  yield 1;
  yield 2;
  return 3;
}

let newFn = fn()
console.log(newFn.next())
console.log(newFn.next())
console.log(newFn.next())
console.log(newFn.next())

// 对象原型方法
let arr = []
arr.includes()

let str = '123'
console.log(str.includes('2'))