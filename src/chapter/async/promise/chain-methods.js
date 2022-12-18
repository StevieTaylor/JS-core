/*
 * @Author: Stevie
 * @Date: 2022-12-18 17:40:53
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-18 18:02:12
 * @Description: Promise 链式调用
 */

console.log('------------------------4.Promise 链式调用------------------------')

// - 4.Promise 链式调用: 基于 then() 方法
// -   4.1 Promise 通过 then() 方法实现链式调用的原因是 then()返回一个新的 Promise 对象
// -   4.2 then(onfulfilled, onrejected)接收2个参数，onfulfilled为 Promise 执行成功时的回调，onrejected为失败时的回调，只执行一个回调
// -   4.3 then中回调函数的返回值可以为 同步的值、undefined、另一个Promise对象、抛出的异常
// -   4.4 链式调用的特点是 链中的 Promise 可以向下一个 Promise 传递值，也叫 返回值穿透

function executeOneCallback(flag, status = '') {
  return new Promise((resolve, reject) => {
    flag ? resolve(status) : reject(status)
  })
}

// 只执行成功时的回调
executeOneCallback(true, 'resolve callback').then(
  (value) => {
    console.log('onfulfilled :>> ', value)
  },
  (error) => {
    console.log('onrejected :>> ', error)
  }
)

// 只执行失败时的回调
executeOneCallback(false, 'reject callback').then(
  (value) => {
    console.log('onfulfilled :>> ', value)
  },
  (error) => {
    console.log('onrejected :>> ', error)
  }
)

const chain = new Promise((resolve) => {
  resolve(1)
})

chain
  .then((value) => {
    console.log('value :>> ', value)
    return value * 8
  })
  .then((value) => {
    console.log('value :>> ', value)
    // 没有 return 语句相当于 return undefined
  })
  .then((value) => {
    console.log('value :>> ', value)
    return Promise.resolve('execute success')
  })
  .then((value) => {
    console.log('result :>> ', value)
    return Promise.reject('execute failed')
  })
  .then(
    (value) => {
      console.log('result :>> ', value)
    },
    (error) => {
      console.log('error :>> ', error)
    }
  )
