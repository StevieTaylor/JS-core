/*
 * @Author: Stevie
 * @Date: 2022-12-01 21:30:17
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-02 11:11:54
 * @Description: apply
 */
let a = {
  score: 85,
}

function getScore(name, age) {
  console.log({ name, age, score: this.score })
}

console.log('原始 apply')
// * case1: 无参数
getScore.apply(a)
// * case2: 一个参数
getScore.apply(a, ['cxk'])
// * case3: 多个参数
getScore.apply(a, ['cxk', 24])

Function.prototype._apply = function (target, argsArray) {
  target = target || window
  let fn = Symbol()
  target[fn] = this
  let result = argsArray ? target[fn](...argsArray) : target[fn]()
  delete target[fn]
  return result
}

console.log('参数列表版 apply')
getScore._apply(a)
getScore._apply(a, ['cxk'])
getScore._apply(a, ['cxk', 24])

Function.prototype.myApply = function (ctx) {
  let context = ctx || window
  const fn = Symbol()
  context[fn] = this
  let result = arguments[1] ? context[fn](...arguments[1]) : context[fn]()
  delete context[fn]
  return result
}

console.log('执行上下文版 apply')
getScore.myApply(a)
getScore.myApply(a, ['cxk'])
getScore.myApply(a, ['cxk', 24])
