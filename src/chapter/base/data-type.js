/*
 * @Author: Stevie
 * @Date: 2021-12-19 17:03:07
 * @LastEditTime: 2021-12-22 17:04:38
 * @LastEditors: Stevie
 * @Description: 数据类型和变量
 */
/**
 * * 1.数据类型
 * *   1.1 原始类型
 * *   1.2 引用类型
 */

// * 1.1 原始类型
var nul = null
var udf = undefined
var bol = false
var num = 123
var str = 'abc'
var sym = Symbol('sym')
var bgi = BigInt(20n)
// * 1.2 引用类型
var obj = { prop1: 1, prop2: 'abc' }

/**
 * * 2.原始类型和引用类型的区别
 */

// * 2.1 不可变性
function immutable() {
  let immutableStr = 'immutable'
  immutableStr.substring(0, 9)
  immutableStr.split(' ')
  immutableStr.slice(1)
  immutableStr.toUpperCase()
  console.log(immutableStr)
}
immutable()

function changeStr() {
  let str = 'immutable'
  str += ' string' // - 对 str 进行操作, 实际上开辟了新的内存空间来存储新的字符串, 再将 str 指向它
  console.log(str)
}
changeStr()

// * 2.2 引用类型
function changeName(obj = {}) {
  obj.name = 'rose'
  console.log(obj)
}
changeName({
  name: 'jack',
  age: 27,
})

// * 2.3 复制
function copyPrimitive() {
  let food = 'chocolate'
  let drink = food // - 对于原始类型, 复制的时候, 开辟了新的内存空间
  drink = 'coffee'
  console.log('food :>> ', food)
  console.log('drink :>> ', drink)
}
copyPrimitive()

function copyReference() {
  const obj = { name: 'jack', age: 27 }
  const obj2 = obj // - 对于引用类型, 复制的是栈中存储的地址, 二者指向堆里的同一个对象
  obj2.name = 'rose'
  console.log('obj :>> ', obj)
}
copyReference()

// * 2.4 比较
function comparePrimitive() {
  const str = 'compare'
  const str2 = 'compare'
  console.log('str === str2 :>> ', str === str2) // - 原始类型直接比较值
}
comparePrimitive()

function compareReference() {
  const obj = { name: 'jack' }
  const obj2 = { name: 'jack' }
  console.log('obj === obj2 :>> ', obj === obj2) // - 引用类型比较的是引用地址(栈里的地址)
}
compareReference()

// * 2.5 传递方式
function transferValue(value) {
  value = 'transfer'
}
const value = 'transfer value'
transferValue(value) // - 对于原始类型, 函数参数传递的是变量的值, 即值传递
console.log('value :>> ', value)

// ! 在ECMAScript中, 所有函数的参数都是值传递
function transferValue2(person) {
  // - 将参数复制了一个副本到局部变量
  person.name = 'rose'
}
const person1 = { name: 'jack' }
transferValue2(person1) // - 对于引用类型, 函数传递的是引用地址, 依然是值传递
console.log('person1 :>> ', person1)

function transferValue3(person) {
  person.name = 'jack'
  person = { name: 'lucy' } // - 给对象重新赋值相当于重新开辟栈地址指向新的堆里的对象
  console.log('person :>> ', person)
}
const person2 = {}
transferValue3(person2)
console.log('person2 :>> ', person2)

/**
 * * 3.null 和 undefined
 */

// * 3.1 null: 表示被赋值过的对象，刻意把一个对象赋值为null
console.log('typeof null :>> ', typeof nul)

// * 3.2 undefined: 表示“缺少值”，即此处应有一个值，但还未定义
let someObj = { name: undefined }
delete someObj.name

/**
 * * 4.Symbol
 */
// * 4.1 独一无二
const sym1 = Symbol('unique')
const sym2 = Symbol('unique')
console.log('sym1 === sym2 :>> ', sym1 === sym2)

const sym3 = Symbol({ name: 'jack' })
console.log('sym3 :>> ', sym3)

function useSymbolFor() {
  const sym1 = Symbol.for('key')
  const sym2 = Symbol.for('key')
  console.log('sym1 === sym2 :>> ', sym1 === sym2)
}
useSymbolFor()

// * 4.2 不可枚举
const symbolObj = {
  name: 'jack',
  [Symbol('id')]: '3210101994112313131',
  age: 27,
  [Symbol('gender')]: 'male',
}
// * 调用这些方法不能获取Symbol类型的属性
function getStringKeys(obj) {
  console.log(Object.getOwnPropertyNames(obj))
  console.log(Object.keys(obj))
  for (let key in obj) {
    console.log(key)
  }
}
getStringKeys(symbolObj)

// * 可以调用Symbol专属方法 Object.getOwnPropertySymbols()
function getSymbolKeys(obj) {
  console.log(Object.getOwnPropertySymbols(obj))
}
getSymbolKeys(symbolObj)

// * 4.3 Symbol应用场景
// * 4.3.1 防止XSS
var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7

// * 4.3.2 私有属性
const privateId = Symbol()

class Person {
  constructor() {
    this[privateId] = 'init'
  }

  getId() {
    return this[privateId]
  }

  setId(id) {
    this[privateId] = id
  }
}

// * 4.3.3 防止属性污染, 保证对象的属性永远都不相同

/**
 * * 5. number精度丢失
 * *   1.1
 * *   1.1
 */
console.log('0.1 + 0.2 === 0.3 :>> ', 0.1 + 0.2 === 0.3)

/**
 * * 6. 特殊引用类型
 * -    在ECMAScript中，引用类型是一种数据结构，用于将数据和功能组织在一起
 */

// * 6.1 由Object派生的功能性的对象
const arr = new Array()
const date = new Date()
const reg = new RegExp()
const func = function () {}

// * 6.2 包装类型: 对于基本类型string, number, boolean的包装
const packedNum = new Number(123)
console.log('new Number(123) == 123 :>> ', packedNum == 123)
console.log('new Number(123) === 123 :>> ', packedNum === 123)

const packedStr = new String('packed str')
console.log("new String('packed str') ==  :>> ", packedStr == 'packed str')
console.log("new String('packed str') ===  :>> ", packedStr === 'packed str')

const failed = new Boolean(false)
console.log('new Boolean(false) == false :>> ', failed == false)
console.log('new Boolean(false) === false :>> ', failed === false)

// - 基本类型的变量存在于代码的执行瞬间, 然后立即被销毁, 无法添加属性和方法(undefined)
let normal = 'normal'
// normal.name = 'jack'

// - 包装类型的变量使用new操作符创建了对象实例, 在执行流离开当前作用域之前, 会一直保存在内存中, 可以为其添加属性和方法
let packed = new String('packed')
packed.name = 'jack'
console.log('packed :>> ', packed)

// * 6.3 装箱和拆箱
// * 6.3.1 装箱: 把原始类型 ---> 引用类型
// * 6.3.2 拆箱: 把引用类型 ---> 原始类型
let fullName = 'Steven Curry'
let firstName = fullName.substring(0, 6)
console.log('firstName :>> ', firstName)

// 等同于
// - step 1 创建String的包装类型实例(装箱)
let fullName2 = new String('Steven Curry')
// - step 2 调用实例上的方法
let firstName2 = fullName2.substring(0, 6)
// - step 3 将引用类型转为原始类型(拆箱)
// - step 4 销毁实例
fullName2 = null
console.log('firstName2 :>> ', firstName2)

const rewriteObj = {
  valueOf: () => {
    console.log('calling valueof()')
    return {}
  },
  toString: () => {
    console.log('calling toString()')
    return {}
  },
}

try {
  String(rewriteObj) // - 包装为String时, 先调用toString(), 再调用valueOf()
} catch (error) {}

try {
  Number(rewriteObj) // - 包装为Number时, 先调用valueOf(), 再调用toString()
} catch (error) {}

try {
  rewriteObj + ''
} catch (error) {}

const logHint = {
  name: 'jack',
  age: 27,
  [Symbol.toPrimitive]: (hint) => {
    console.log('hint :>> ', hint)
  },
}
logHint + 1 // default
const hintNumber = +logHint // number
String(logHint) // string

/**
 * @description: 模拟拆箱过程
 * @param {*} obj
 * @param {*} hint 由具体的计算类型判断, 默认为default, 可以为number和string
 * @return {*}
 */
function transferObjectToPrimitive(obj, hint) {
  if (obj.hasOwnProperty(Symbol.toPrimitive)) {
    obj[Symbol.toPrimitive](hint)
  } else {
    if (hint === 'string') {
      obj.toString().valueOf()
    } else if (hint === 'number' || hint === 'default') {
      obj.valueOf().toString()
    } else {
      throw new TypeError('type error')
    }
  }
}

const rewriteToPrimitiveObj = {
  // - 必须返回基本类型
  // [Symbol.toPrimitive]: () => {
  //   console.log('calling toPrimitive')
  //   return ''
  // },
  // - 必须返回基本类型
  toString: () => {
    console.log('calling toString()')
    return ''
  },
  // - 可以返回任意类型
  valueOf: () => {
    console.log('calling valueOf()')
    return {}
  },
}
console.log(rewriteToPrimitiveObj + 'abc')
console.log(Number(rewriteToPrimitiveObj))

/**
 * * 7. 类型转换
 * *   1.1
 * *   1.1
 */
// * 7.1 if语句中
const transferToFalseValues = [0, '', false, null, undefined, NaN]
transferToFalseValues.forEach((value) => {
  !value && console.log(`${value} -> false`)
})

// * 7.2 数学运算
// * 7.2.1  减、乘、除
console.log('123 - true :>> ', 123 - true)
console.log('123 - null :>> ', 123 - null)
console.log('123 * undefined :>> ', 123 * undefined)
console.log('123 * [2] :>> ', 123 * [2])
console.log("123 * ['2'] :>> ", 123 * ['2'])

// * 7.2.2  加
export function mockAdd(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`
  } else if (typeof a === 'number') {
    return typeof b === 'object' && b !== null ? `${a}${b}` : Number(a) + Number(b)
  }
}

// * 7.3 == 隐式类型转换
// * 7.3.1 NaN: 永远为false
export function compareWithNaN(anyType) {
  return NaN == anyType
}

// * 7.3.2 Boolean: 先转为Number
export function compareWithTrue(anyType) {
  return true == anyType
}

export function compareWithFalse(anyType) {
  return false == anyType
}

// - Boolean 与 null、undefined比较永远为false
const specialCompares = [null, undefined].map((value) => {
  return {
    data: value,
    withTrue: compareWithTrue(value),
    withFalse: compareWithFalse(value),
  }
})
console.log(specialCompares)

// * 7.3.3 String 和 Number: String转Number
console.log("123 === '123' :>> ", 123 === '123')
console.log("'' == 0 :>> ", '' == 0)

// * 7.3.4 null 和 undefined, 除 null == undefined 为 true外, 其他都为false
console.log('null == undefined :>> ', null == undefined)

// * 7.3.5 Primitive 和 Reference: 引用类型转原始类型
console.log("{} == '[object Object]' :>> ", {} == '[object Object]')
console.log("[1, 2, 3] == '1,2,3':>> ", [1, 2, 3] == '1,2,3')

// - step1: ![] -> false, 变为 [] == false
// - step2: false -> 0, 变为 [] == 0
// - step3: [] -> '', 变为 '' == 0
// - step4: '' -> 0, 变为 0 == 0
// - step5: 结果为true
console.log('[] == ![] :>> ', [] == ![])
