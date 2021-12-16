/*
 * @Author: Stevie
 * @Date: 2021-12-16 16:52:46
 * @LastEditTime: 2021-12-16 18:25:42
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * @description: 递归 flatten
 * @param {*} array
 * @return {*}
 */
function flattenArray1(array = []) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      res = res.concat(flattenArray1(array[i]))
    } else {
      res.push(array[i])
    }
  }
  return res
}

/**
 * @description: ES6... flatten
 * @param {*} array
 * @return {*}
 */
function flattenArray2(array = []) {
  while (array.some((item) => Array.isArray(item))) {
    array = [].concat(...array)
    debugger
  }
  return array
}

/**
 * @description: stack + ES... flatten
 * @param {*} array
 * @return {*}
 */
function flattenArray3(array = []) {
  let res = []
  let stack = [].concat(array)
  while (stack.length !== 0) {
    let top = stack.pop() // - 取出栈顶元素
    if (Array.isArray(top)) {
      stack.push(...top) // - 如果栈顶元素是数组, 那么展开后放回原数组
    } else {
      res.unshift(top) // - 否则, 以队列的方式放进目标数组
    }
  }
  return res
}

export { flattenArray1, flattenArray2, flattenArray3 }
