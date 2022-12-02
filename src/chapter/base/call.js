/*
 * @Author: Stevie
 * @Date: 2022-12-01 15:24:58
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-01 21:20:20
 * @Description: custom content
 */
const person1 = {
  welcome: 'hello',
  sayHello: function (name, age) {
    console.log(`${this.welcome}, my name is ${name}, I am ${age} years old`)
  },
}
person1.sayHello('jack', 16)

const person2 = {
  welcome: 'hi',
}
person1.sayHello.call(person2, 'lucy', 18)

function test() {
  console.log('this :>> ', this)
  console.log('arguments :>> ', arguments)
}

const obj = {
  a: 'str',
  b: 12,
}

console.log('原始 call')
test.call(obj)
test.call(obj, 'arg1', 'arg2')

Function.prototype._call = function (target, ...args) {
  target = target || window
  const fn = Symbol()
  target[fn] = this
  const res = target[fn](...args)
  delete target[fn]
  return res
}

console.log('解构参数列表版 call')
test._call(obj)
test._call(obj, 'arg1', 'arg2')

Function.prototype.myCall = function (context) {
  var context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  var args = [...arguments].slice(1)
  var result = context[fn](...args)
  delete context[fn]
  return result
}

console.log('执行上下文版 call')
test.myCall(obj)
test.myCall(obj, 'arg1', 'arg2')
