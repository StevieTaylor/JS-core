/*
 * @Author: Stevie
 * @Date: 2021-12-16 10:42:29
 * @LastEditTime: 2021-12-16 16:48:51
 * @LastEditors: Stevie
 * @Description:
 */
import {
  removeDuplicate1,
  removeDuplicate2,
  removeDuplicate3,
  removeDuplicate4,
} from './remove-duplicate'

const numArr = [1, 2, 2, 3, 3, 3]
const disorderlyNumArr = [2, 2, 1, 3, 3, 3]
const expectedNumArr = [1, 2, 3]
test('test pure number array', () => {
  expect(removeDuplicate1(numArr)).toEqual(expectedNumArr)
  expect(removeDuplicate2(numArr)).toEqual(expectedNumArr)
  expect(removeDuplicate3(disorderlyNumArr)).toEqual(expectedNumArr)
  expect(removeDuplicate4(numArr)).toEqual(expectedNumArr)
})

const strArr = ['1', '2', '2', '2', '3', '3', '3', '3']
const disorderlyStrArr = ['3', '2', '2', '1', '3', '3', '3', '2']
const expectedStrArr = ['1', '2', '3']
test('test pure string array ', () => {
  expect(removeDuplicate1(strArr)).toEqual(expectedStrArr)
  expect(removeDuplicate2(strArr)).toEqual(expectedStrArr)
  expect(removeDuplicate3(disorderlyStrArr)).toEqual(expectedStrArr)
  expect(removeDuplicate4(strArr)).toEqual(expectedStrArr)
})

const nsArr = [1, 2, '2', 2, 3, '3', '3', 3]
const expectedNSArr = [1, 2, '2', 3, '3']
test('test number and string array ', () => {
  expect(removeDuplicate1(nsArr)).toEqual(expectedNSArr)
  expect(removeDuplicate2(nsArr)).toEqual(expectedNSArr)
  // expect(removeDuplicate3(nsArr)).toEqual(expectedNSArr)
  expect(removeDuplicate4(nsArr)).toEqual(expectedNSArr)
})
