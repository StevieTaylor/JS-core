/*
 * @Author: Stevie
 * @Date: 2022-10-23 14:48:40
 * @LastEditors: Stevie
 * @LastEditTime: 2022-10-23 15:32:19
 * @Description: 手写getQueryString
 */
/**
 * @description: 通过split拆分获取路径参数
 * @param {*} url 路径
 * @param {*} key 关键字
 * @return {*}
 */
function getQueryString(url = '', key = '') {
  if (typeof url !== 'string') {
    throw new Error('Type error')
  }

  let index = url.indexOf('?')

  if (index === -1) {
    return undefined
  }

  let fields = url.substring(index + 1).split('&')

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i].split('=')
    if (key === field[0]) {
      return field[1]
    }
  }
}

let url = 'https://www.baidu.com/s?id=&name=why&phone=13876769797'
console.log(getQueryString(url, ''))
