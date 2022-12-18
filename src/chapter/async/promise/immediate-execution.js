/*
 * @Author: Stevie
 * @Date: 2022-12-18 17:23:27
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-18 17:30:12
 * @Description: Promise 立即执行性
 */
// - 2.Promise 立即执行性: 当Promise对象被创建时,就立即执行被当作promise参数传入的函数
// -   2.1 Promise的构造函数是同步执行的
// -   2.2 Promise.then()是异步执行的
console.log('------------------------2.Promise 立即执行性------------------------')

// * 打印顺序：1 -> 3 -> 5 -> 2
const executor = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
  return 4
})

executor.then((a) => {
  // * 打印的是resolve内的data
  console.log(a)
})

console.log(5)
