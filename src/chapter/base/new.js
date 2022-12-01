/*
 * @Author: Stevie
 * @Date: 2022-11-26 20:20:00
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-01 11:31:43
 * @Description: custom content
 */
function Person() {
  this.name = 'Lucy'
}
// - case1: 使用new关键字可以访问私有属性
const person1 = new Person()
console.log('person1.name :>> ', person1.name)

// - case2：不使用new关键字无法访问私有属性
const person2 = Person()
console.log('person2 :>> ', person2) // undefined
console.log('name :>> ', name)
try {
  console.log('person2.name :>> ', person2.name)
} catch (error) {
  console.log('error :>> ', error)
}

// - case3：当构造函数最后return出来的是一个和this无关的对象时，new命令会直接返回这个新对象，而不是通过new执行步骤生成的this对象
function People() {
  this.name = 'Jack'
  return {
    age: 25,
  }
}
const people = new People()
console.log('people :>> ', people) // { age:25 }
console.log('people.name :>> ', people.name) // undefined
console.log('people.age :>> ', people.age) // 25

// - case4：当构造函数中return的不是一个对象时，那么它还是会根据new关键词的执行逻辑，生成一个新的对象（绑定了最新this），最后返回出来
function Human() {
  this.name = 'Smith'
  return 'Miller'
}
const human = new Human()
console.log('human :>> ', human) // { name: 'Smith' }
console.log('human.name :>> ', human.name) // Smith

/**
 * - new 的执行步骤：
 * -   1.创建一个新对象
 * -   2.将构造函数的作用域赋给新对象，this指向新对象
 * -   3.执行构造函数中的代码，为新对象添加属性
 * -   4.返回这个新对象
 */
function Calculate(a, b) {
  this.a = a
  this.b = b
}

Calculate.prototype.add = function () {
  return this.a + this.b
}

const cal1 = new Calculate(11, 22)
console.log('cal1 :>> ', cal1)
console.log('cal1.add() :>> ', cal1.add())

/**
 * @description 模拟实现new，arguments是 (构造函数，...参数列表)
 * @return {*}
 */
function _new() {
  // - 1.创建新对象
  let obj = new Object()
  // - 2.从arguments第一个参数获取待执行的构造函数
  let constructor = [].shift.call(arguments)
  // - 3.将创建的对象原型绑定到构造函数上
  obj.__proto__ = constructor.prototype
  // - 4.执行构造函数里的代码，此时arguments只剩下参数列表
  let res = constructor.apply(obj, arguments)
  // - 5.判断执行结果是否为对象，来返回最终结果
  return Object.prototype.toString.call(res) === '[object Object]' ? res : obj
}

const cal2 = _new(Calculate, 11, 22)
console.log('cal2 :>> ', cal2)
console.log('cal2.add() :>> ', cal2.add())
