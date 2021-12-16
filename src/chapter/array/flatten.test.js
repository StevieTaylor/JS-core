/*
 * @Author: Stevie
 * @Date: 2021-12-16 16:58:38
 * @LastEditTime: 2021-12-16 18:16:45
 * @LastEditors: Stevie
 * @Description:
 */
import { flattenArray1, flattenArray2, flattenArray3 } from './flatten'

const testArr = [1, 2, 3, ['a', 'b', 'c', [true, false]]]
const expectedArr = [1, 2, 3, 'a', 'b', 'c', true, false]

test('Array flat', () => {
  expect(testArr.flat(Infinity)).toEqual(expectedArr)
})

test('ES5 flatten', () => {
  expect(flattenArray1(testArr)).toEqual(expectedArr)
})

test('ES6 flatten', () => {
  expect(flattenArray2(testArr)).toEqual(expectedArr)
})

test('stack + ES6 flatten', () => {
  expect(flattenArray3(testArr)).toEqual(expectedArr)
})
