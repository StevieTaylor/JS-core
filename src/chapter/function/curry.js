/*
 * @Author: Stevie
 * @Date: 2022-12-06 15:42:13
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-07 18:59:18
 * @Description: 函数柯里化
 */
/**
 * @函数柯里化
 * - 定义：柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术
 * - 通俗解释：只传递给函数一部分参数来调用它，让它返回一个新函数去处理剩下的参数
 */

function add(a, b) {
  return a + b
}

console.log('add(3, 5) :>> ', add(3, 5))

/**
 * @description: 函数柯里化v1，利用参数拆分的方式实现
 * @param {*} fn
 * @return {*}
 */
function curry1(fn) {
  let args = [].slice.call(arguments, 1)
  return function () {
    let restArgs = [].slice.call(arguments)
    return fn.apply(this, args.concat(restArgs))
  }
}

const curry_add1 = curry1(add, 3, 5)
console.log('curry1_add1() :>> ', curry_add1())

const curry_add2 = curry1(add, 3)
console.log('curry1_add2(5) :>> ', curry_add2(5))

const curry_add3 = curry1(add)
console.log('curry1_add3(3, 5) :>> ', curry_add3(3, 5))

/**
 * @description: 函数柯里化
 * @param {*} fn
 * @param {*} length
 * @return {*}
 */
function curry(fn, length) {
  // - 第一次调用获取函数fn形参的长度，后续调用获取fn剩余参数的长度
  length = length || fn.length
  // - 返回一个接收参数为的函数
  return function (...args) {
    // - 如果 新函数参数长度 大于或等于 fn剩余参数长度
    if (args.length >= length) {
      // - 满足条件，直接执行fn函数
      return fn.apply(this, args)
    } else {
      // - 不满足条件，递归curry函数，新的fn绑定新参数的函数，新的length为fn剩余参数长度
      return curry(fn.bind(this, ...args), length - args.length)
    }
  }
}

function test(a, b, c) {
  console.log([a, b, c])
}

const curryFn = curry(test)

curryFn('a', 'b', 'c')
curryFn('a', 'b')('c')
curryFn('a')('b')('c')
curryFn('a')('b', 'c')
