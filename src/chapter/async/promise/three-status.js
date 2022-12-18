/*
 * @Author: Stevie
 * @Date: 2022-12-18 17:19:53
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-18 17:20:24
 * @Description: Promise 的3种状态
 */
/**
 * - 1.Promise 的3种状态：pending,fulfilled,rejected
 * -   1.1 pending: 待定，初始状态，
 * -   1.2 fulfilled: 操作成功
 * -   1.3 rejected: 操作失败
 */
console.log('------------------------1.Promise 3种状态------------------------')

function threeStatus(status = '', flag) {
  return new Promise((resolve, reject) => {
    let res = `${status} status`
    if (typeof flag === 'boolean') {
      flag ? resolve(res) : reject(res)
    }
  })
}

console.log('pending status :>> ', threeStatus('pending'))
console.log('fulfilled status :>> ', threeStatus('fulfilled', true))
console.log('rejected status :>> ', threeStatus('rejected', false))
