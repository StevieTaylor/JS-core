/*
 * @Author: Stevie
 * @Date: 2021-12-13 10:39:54
 * @LastEditTime: 2022-10-09 17:28:24
 * @LastEditors: Stevie
 * @Description:
 */
import { CheckType } from './typeCheck'

// 以下是14种待检测数据：
const number = 1 // [object Number]
const string = '123' // [object String]
const boolean = true // [object Boolean]
const undefine = undefined // [object Undefined]
const nul = null // [object Null]
const symbol = Symbol('symbol') // [object Symbol]
const bigInt = BigInt(10n) // [Object BigInt]
const object = { a: 1 } // [object Object]
const array = [1, 2, 3] // [object Array]
const date = new Date() // [object Date]
const error = new Error() // [object Error]
const reg = /a/g // [object RegExp]
const math = Math // [object Math]
const func = function a() {} // [object Function]

const testArray = [
  number,
  string,
  boolean,
  undefine,
  nul,
  symbol,
  bigInt,
  object,
  array,
  date,
  error,
  reg,
  math,
  func,
]

const expectedTypes = [
  'Number',
  'String',
  'Boolean',
  'Undefined',
  'Null',
  'Symbol',
  'BigInt',
  'Object',
  'Array',
  'Date',
  'Error',
  'RegExp',
  'Math',
  'Function',
]

test('check data type', () => {
  for (let i = 0; i < testArray.length; i++) {
    expect(CheckType.getType(testArray[i])).toBe(expectedTypes[i])
  }
})

const primitiveTypes = [number, string, boolean, undefine, nul, symbol, bigInt]

test('check data is primitive type or not', () => {
  for (let i = 0; i < primitiveTypes.length; i++) {
    expect(CheckType.isPrimitive(primitiveTypes[i])).toEqual(true)
  }
})

const referenceTypes = [object, array, date, error, reg, math, func]

test('check data is reference type or not', () => {
  for (let i = 0; i < referenceTypes.length; i++) {
    expect(CheckType.isReference(referenceTypes[i])).toEqual(true)
  }
})
