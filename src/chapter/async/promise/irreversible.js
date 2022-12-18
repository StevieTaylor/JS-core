/*
 * @Author: Stevie
 * @Date: 2022-12-18 17:32:40
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-18 17:39:28
 * @Description: Promise 不可逆性
 */

console.log('------------------------3.Promise 不可逆性------------------------')

// - 3.Promise 不可逆性: Promise状态的一旦变成fulfilled或rejected时，Promise的状态和值就固定下来了
// -   3.1 pending -> fulfilled
// -   3.2 pending -> rejected

function irreversible(first, second, status) {
  const data = `execute ${status}()`
  return new Promise((resolve, reject) => {
    if (first === true && second === false) {
      resolve(data)
      reject(data)
    } else if (first === false && second === true) {
      reject(data)
      resolve(data)
    } else if (first === true && second === true) {
      resolve(`execute first ${status}()`)
      resolve(`execute second ${status}()`)
    }
  })
}

// 先执行resolve,无法执行reject
irreversible(true, false, 'resolve').then((value) => {
  console.log('resolve(); reject() :>> ', value)
})

// 先执行reject,无法执行resolve
irreversible(false, true, 'reject').catch((value) => {
  console.log('reject(); resolve() :>> ', value)
})

// 2个resolve，只执行一个
irreversible(true, true, 'resolve')
  .then((value) => {
    console.log('resolve(); resolve() :>> ', value)
  })
  .then((value) => {
    console.log(value)
  })
