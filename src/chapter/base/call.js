/*
 * @Author: Stevie
 * @Date: 2022-12-01 15:24:58
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-02 20:08:36
 * @Description: call的应用与实现
 */
/**
 * @call的特点
 * - 功能：函数调用改变this指向
 * - 参数：多个参数
 * - 返回结果：直接执行
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
  return this
}

const obj = {
  a: 'str',
  b: 12,
}

console.log('------------------------原生 call------------------------')
console.log('test.call() :>> ', test.call())
console.log('test.call(obj) :>> ', test.call(obj))
console.log("test.call(obj, 'arg1', 'arg2') :>> ", test.call(obj, 'arg1', 'arg2'))

/**
 * @description: 用剩余参数解构来模拟实现call
 * @param {*} target 待执行目标
 * @param {Array} args 自第二个参数起的所有参数列表
 * @return {*}
 */
Function.prototype._call = function (target, ...args) {
  // - 获取待执行目标，若没有参数，则调用者为window
  target = target || window
  // - 使用Symbol作为目标对象的key
  const fn = Symbol()
  // - 为目标对象赋予待执行函数，this指向调用的函数
  target[fn] = this
  // - 执行该函数
  const result = target[fn](...args)
  // - 删除已执行完的函数属性
  delete target[fn]
  return result
}

console.log('------------------------解构参数列表版 call------------------------')
console.log('test._call() :>> ', test._call())
console.log('test._call(obj) :>> ', test._call(obj))
console.log("test._call(obj, 'arg1', 'arg2') :>> ", test._call(obj, 'arg1', 'arg2'))

Function.prototype.myCall = function (target) {
  target = target || window
  const fn = Symbol()
  target[fn] = this
  // - 从arguments中提取参数，(obj, 'arg1', 'arg2')-> ['arg1','arg2']
  let args = [...arguments].slice(1)
  let result = target[fn](...args)
  delete target[fn]
  return result
}

console.log('------------------------arguments获取参数版 call------------------------')
console.log('test.myCall() :>> ', test.myCall())
console.log('test.myCall(obj) :>> ', test.myCall(obj))
console.log("test.myCall(obj, 'arg1', 'arg2') :>> ", test.myCall(obj, 'arg1', 'arg2'))
