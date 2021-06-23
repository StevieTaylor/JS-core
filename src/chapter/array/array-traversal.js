/*
 * @Author: Stevie
 * @Date: 2021-06-23 15:55:44
 * @LastEditTime: 2021-06-23 18:19:54
 * @LastEditors: Stevie
 * @Description: 数组遍历
 */
const list = [100, '200', false, , Symbol(5)]
/*
 * 一、数组的基本遍历for、for...of、forEach
 */
for (let i = 0; i < list.length; i++) {
  if (!list[i]) {
    // break
  }
  console.log('for :>> ', list[i])
}

for (const element of list) {
  if (!element) {
    // break
  }
  console.log('for...of :>> ', element)
}

list.forEach((item, index, array) => {
  // - forEach 无法跳出循环
  if (!item) {
    return
  }
  console.log('forEach :>> ', item)
})

const list2 = [
  { name: '首页', display: true },
  { name: '详情页', display: true },
  { name: '表单页', display: false },
]
/*
 * 二、some: 若某一元素满足条件，返回true，循环中断
 *    every: 若有一元素不满足条件，返回false，循环中断
 */
const someDisplay = list2.some((item) => item.display)
console.log('some :>> ', someDisplay) // true

const everyDisplay = list2.every((item) => !item.display)
console.log('every :>> ', everyDisplay) // false

const filter = list2.filter((item) => item.display)
console.log('filter :>> ', filter)

console.log('===================遍历性能对比=================')

function traversePerformance(length = 0, data = 1) {
  const array = new Array(length).fill(data)
  console.time('for')
  for (let index = 0; index < array.length; index++) {}
  console.timeEnd('for')

  console.time('forof')
  for (const element of array) {
  }
  console.timeEnd('forof')

  console.time('forin')
  for (const index in array) {
  }
  console.timeEnd('forin')

  console.time('forEach')
  array.forEach(() => {})
  console.timeEnd('forEach')

  console.time('map')
  array.map(() => {})
  console.timeEnd('map')
  console.log('====================================')
}
const LEN = 1000000
const simpleData = 8
const complexData = {
  num: 1,
  str: 'string',
  boo: false,
  sym: Symbol('symbol'),
  und: undefined,
  nul: null,
  big: BigInt(20),
  obj: { name: 'stevie' },
}
traversePerformance(LEN, simpleData)
traversePerformance(LEN, complexData)
