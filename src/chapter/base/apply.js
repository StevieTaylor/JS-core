/*
 * @Author: Stevie
 * @Date: 2022-12-01 21:30:17
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-02 20:17:35
 * @Description: apply的应用与实现
 */
/**
 * @apply的特点
 * - 功能：函数调用改变this指向
 * - 参数：单个数组
 * - 返回结果：直接执行
 */
let a = {
  score: 85,
}

function getScore(name, age) {
  console.log({ name, age, score: this.score })
}

console.log('------------------------原生 apply------------------------')
// * case1: 无参数
getScore.apply(a)
// * case2: 一个参数
getScore.apply(a, ['cxk'])
// * case3: 多个参数
getScore.apply(a, ['cxk', 24])

/**
 * @description:
 * @param {*} target 待执行目标对象
 * @param {*} argsArray 由参数组成的数组，可能为空undefined
 * @return {*}
 */
Function.prototype._apply = function (target, argsArray) {
  target = target || window
  let fn = Symbol()
  target[fn] = this
  // - 判断是否存在参数列表，若存在，解构带参数执行；若不存在，直接执行
  let result = argsArray ? target[fn](...argsArray) : target[fn]()
  delete target[fn]
  return result
}

console.log('------------------------参数列表版 apply------------------------')
getScore._apply(a)
getScore._apply(a, ['cxk'])
getScore._apply(a, ['cxk', 24])

Function.prototype.myApply = function (target) {
  target = target || window
  const fn = Symbol()
  target[fn] = this
  let result = arguments[1] ? target[fn](...arguments[1]) : target[fn]()
  delete target[fn]
  return result
}

console.log('------------------------arguments获取参数版 apply------------------------')
getScore.myApply(a)
getScore.myApply(a, ['cxk'])
getScore.myApply(a, ['cxk', 24])
