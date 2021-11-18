/*
 * @Author: Stevie
 * @Date: 2021-11-17 15:13:41
 * @LastEditTime: 2021-11-18 17:43:58
 * @LastEditors: Stevie
 * @Description: 位置匹配
 */
console.log('position match 位置匹配')

/**
 * - 1. 什么是位置?
 * -    相邻字符之间的位置(包括头、尾)
 */
// 位置是: ⬇️ p ⬇️ o ⬇️ s ⬇️ i ⬇️ t ⬇️ i ⬇️ o ⬇️ n ⬇️  数量为 string.length + 1
const str = 'position'

/**
 * - 位置: ^、$、\b、\B、?=p、(?!p)、(?<=p)、(?<!p)
 */
console.log('^ 匹配开头 :>> ', str.replace(/^/, '⬆'))

console.log('$ 匹配结尾 :>> ', str.replace(/$/, '⬆️'))

/**
 * - 单词边界:
 * -    1. \w和\W之间的位置
 * -    2. ^与\w之间的位置
 * -    3. \w与$之间的位置
 */
const boundary = 'word boundary'

//* 单词边界: \b
console.log(`\\b 匹配单词边界 :>> `, boundary.replace(/\b/g, '⬆️'))

//* 非单词边界: \B
console.log(`\\B 匹配非单词边界 :>> `, boundary.replace(/\B/g, '⬆'))

const subpattern = 'sub_pattern.js'

//* 符合p子模式 前面 的那个位置: (?=p)
console.log(`\\(?=p) :>> `, subpattern.replace(/(?=pattern)/g, '⬆️'))

//* 符合p子模式 后面 的那个位置: (?<=p)
console.log(`\\(?<=p) :>> `, subpattern.replace(/(?<=pattern)/g, '⬆️'))

//* (?!p): (?=p)取反
console.log(`\\(?!p) :>> `, subpattern.replace(/(?!pattern)/g, '⬆️'))

//* (?<!p): (?<=p)取反
console.log(`\\(?<!p) :>> `, subpattern.replace(/(?<!pattern)/g, '⬆️'))

/**
 * * example 1: 数字千分位分割
 * * 原始数据: 123456789
 * * 期望结果: 123,456,789
 */
// ~ \d{3} 每3位做一次匹配
// ~ ()+ 匹配多次
// ~ (?!^) 排除开头
const amount = '123456789'
const reg_amount = /(?!^)(?=(\d{3})+$)/g
console.log(`数字千分位分割 :>>`, amount.replace(reg_amount, ','))

const phoneNo = '13876529874'
const reg_phoneNo = /(?=(\d{4})+$)/g
console.log(`手机号3-4-4 :>>`, phoneNo.replace(reg_phoneNo, '-'))

// todo
const formatMobile = (phoneNo) => {
  const mobile = typeof phoneNo === 'string' ? phoneNo : String(phoneNo)
  const result = mobile
    .replace(/(?<=\d{3})/g, ($0) => $0 + '-')
    .replace(/()/g, ($0) => '-' + $0)
  console.log(`result :>>`, result)
  return result
}
formatMobile(123)
formatMobile(1234)
formatMobile(12345)
formatMobile(123456)
formatMobile(1234567)
formatMobile(12345678)
formatMobile(123456789)

// 验证密码
const reg_password = /^[a-zA-Z0-9]{6,12}$/g
const reg_two_char = /(?=(p1)*(p2))/g
const reg_number_and_lowercase_letter = /(?=(\d)*[a-z])/g
const reg_number_and_uppercase_letter = /(?=(\d)*[A-Z])/g
const reg_lowercase_letter_and_uppercase_letter = /(?=[a-z]*[A-Z])/g
// console.log(`pa`, reg_number_and_lowercase_letter.test(password))
