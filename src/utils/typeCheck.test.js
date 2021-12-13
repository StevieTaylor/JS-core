/*
 * @Author: Stevie
 * @Date: 2021-12-13 10:39:54
 * @LastEditTime: 2021-12-13 13:36:12
 * @LastEditors: Stevie
 * @Description:
 */

import { CheckType } from './typeCheck'

// 以下是13种待检测数据：
const number = 1 // [object Number]
const string = '123' // [object String]
const boolean = true // [object Boolean]
const undefine = undefined // [object Undefined]
const nul = null // [object Null]
const symbol = Symbol('symbol') // [object Symbol]
const object = { a: 1 } // [object Object]
const array = [1, 2, 3] // [object Array]
const date = new Date() // [object Date]
const error = new Error() // [object Error]
const reg = /a/g // [object RegExp]
const math = Math // [object Math]
const func = function a() {} // [object Function]

const checkArray = [
  number,
  string,
  boolean,
  undefine,
  nul,
  symbol,
  object,
  array,
  date,
  error,
  reg,
  math,
  func,
]

const types = [
  'Number',
  'String',
  'Boolean',
  'Undefined',
  'Null',
  'Symbol',
  'Object',
  'Array',
  'Date',
  'Error',
  'RegExp',
  'Math',
  'Function',
]

checkArray.forEach((item) => {
  types.forEach((type) => {
    return CheckType[`is${type}`](item) ? console.log(`${type}类型:`, item) : null
  })
})
