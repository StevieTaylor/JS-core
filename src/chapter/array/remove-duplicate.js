/*
 * @Author: Stevie
 * @Date: 2021-12-16 10:33:05
 * @LastEditTime: 2021-12-16 16:50:33
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * @description: 使用Set数组 去重
 * @param {*} array
 * @return {*}
 */
function removeDuplicate1(array = []) {
  return [...new Set(array)]
}

/**
 * @description: filter + indexOf 去重
 * @param {*} array
 * @return {*}
 */
function removeDuplicate2(array = []) {
  return array.filter((item, index, arr) => {
    // - arr.indexOf(element)返回数组中第一个出现该元素的索引, 若没有, 则返回-1
    return arr.indexOf(item) === index
  })
}

/**
 * @description: sort + 冒泡 去重
 * @param {*} array
 * @return {*}
 */
function removeDuplicate3(array = []) {
  let temp
  const res = []
  // ! 局限性: 对于无法使用sort()正确排序的数组,是不能去重的
  const sortedArr = array.sort()
  for (let i = 0; i < sortedArr.length; i++) {
    // - 第一个元素 或者 相邻两元素不相同时
    if (!i || temp !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    temp = sortedArr[i]
  }
  return res
}

/**
 * @description: Object键值对 去重
 * @param {*} array
 * @return {*}
 */
function removeDuplicate4(array = []) {
  const obj = {}
  return array.filter((item) => {
    const key = typeof item + item
    if (obj.hasOwnProperty(key)) {
      // - 当数组中已经存在该值时, 剔除这个值
      return false
    } else {
      // - 当数组中不存在该值时, pick该值
      return (obj[key] = true)
    }
  })
}

export { removeDuplicate1, removeDuplicate2, removeDuplicate3, removeDuplicate4 }
