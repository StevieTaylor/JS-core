/*
 * @Author: Stevie
 * @Date: 2021-11-19 14:34:58
 * @LastEditTime: 2021-11-19 15:27:23
 * @LastEditors: Stevie
 * @Description: 字符串匹配
 */
/**
 * - 1. 两种模糊匹配: 横向和纵向, 横向的维度是整个字符串, 纵向的维度是单个字符
 */

// - 1.1 横向匹配: 一个正则可匹配的字符串的长度不是固定的，可以是多种情况，通过量词+、*、?、{m,n}，可实现横向匹配
const str_horizontal = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
const reg_horizontal = /ab{2,5}c/g
console.log(`横向匹配 :>>`, str_horizontal.match(reg_horizontal))

// - 1.2 纵向匹配: 一个正则匹配的字符串，具体到某一位字符时，可以不是某个确定的字符串，可以有多种可能，实现方式是字符组( 其实多选分支|也可以实现 )
const str_vertical = 's0e s1e s2e s3e s4e s5e'
const reg_vertical = /s[1-3]e/g
console.log(`纵向匹配 :>>`, str_vertical.match(reg_vertical))

/**
 * - 2.字符组: 一个字符的可能性组合
 * - 1.1
 * - 1.1
 */
// - 2.1 范围表示
const str_range = 'ajdajide1312jaida31n41jia3252c'
const reg_range = /[1-3a-cA-C]/g
console.log(`object`, str_range.match(reg_range))

// - 2.2 排除字符组
const str_exclude = 'adji31jiia8913diawj3i1j'
const reg_exclude = /s/g
