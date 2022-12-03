/*
 * @Author: Stevie
 * @Date: 2022-12-03 17:55:55
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-03 18:24:28
 * @Description: instanceof的应用与实现
 */
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const person = new Person()
const arr = [1, 2, 3, 4, 5]

console.log('------------------------原生 instanceof------------------------')
console.log('person instanceof Person :>> ', person instanceof Person)
console.log('arr instanceof Array :>> ', arr instanceof Array)
console.log('arr instanceof Object :>> ', arr instanceof Object)

/**
 * @description: 模拟实现instanceof
 * @param {*} instance 实例
 * @param {*} constructor 构造函数
 * @return {Boolean}
 */
function instanceOf(instance, constructor) {
  let _proto_ = instance.__proto__
  let prototype = constructor.prototype

  while (true) {
    if (_proto_ === null) {
      return false
    }

    if (_proto_ === prototype) {
      return true
    }

    // 顺着原型一直向上找
    _proto_ = _proto_.__proto__
  }
}

console.log('------------------------模拟实现 instanceof------------------------')
console.log('instanceOf(person, Person) :>> ', instanceOf(person, Person))
console.log('instanceOf(arr, Array) :>> ', instanceOf(arr, Array))
console.log('instanceOf(arr, Object) :>> ', instanceOf(arr, Object))
