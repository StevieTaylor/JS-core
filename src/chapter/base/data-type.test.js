/*
 * @Author: Stevie
 * @Date: 2021-12-19 17:16:41
 * @LastEditTime: 2021-12-22 16:24:21
 * @LastEditors: Stevie
 * @Description:
 */
import { compareWithFalse, compareWithNaN, compareWithTrue, mockAdd } from './data-type'

describe('unboxing ', () => {
  describe('with [Symbol.toPrimitive]', () => {
    const obj = {
      name: 'jack',
      age: 27,
      [Symbol.toPrimitive]: (hint) => {
        return hint
      },
      valueOf: () => {
        return ''
      },
      toString: () => {
        return ''
      },
    }

    const Hint = {
      default: 'default',
      number: 'number',
      string: 'string',
    }

    test('hint should to be default', () => {
      expect(obj + 123).toMatch(Hint.default)
    })

    test('hint should to be default ', () => {
      expect(obj + '').toMatch(Hint.default)
    })

    test('hint should to be number ', () => {
      // - 调用Number(), 传入hint为number, 得到'number', 转为number时变为NaN
      expect(Number(obj)).toBe(NaN)
    })

    test('hint should to be string ', () => {
      expect(String(obj)).toMatch(Hint.string)
    })
  })

  describe('without [Symbol.toPrimitive]', () => {
    const obj = {
      name: 'jack',
      age: 27,
      valueOf: () => {
        return 59
      },
      toString: () => {
        return 'toString'
      },
    }

    test('should call toString()', () => {
      expect(String(obj)).toBe('toString')
    })

    test('should call valueOf()', () => {
      expect(obj + 41).toBe(100)
    })
  })
})

describe('operation', () => {
  describe('add', () => {
    test('string + any ', () => {
      expect(mockAdd(123, 'abc')).toBe('123abc')
      expect(mockAdd(null, 'abc')).toBe(null + 'abc')
      expect(mockAdd(undefined, 'abc')).toBe('undefinedabc')
      expect(mockAdd({}, 'abc')).toBe('[object Object]abc')
    })

    test('number + primitive', () => {
      expect(mockAdd(123, null)).toBe(123)
      expect(mockAdd(123, undefined)).toBe(NaN)
      expect(mockAdd(123, true)).toBe(124)
      expect(mockAdd(123, false)).toBe(123)
    })

    test('number + reference', () => {
      expect(mockAdd(123, {})).toBe('123[object Object]')
    })
  })
})

describe('== ', () => {
  const types = [123, 'abc', true, false, null, undefined, Symbol('=='), { a: 1, b: '2' }]

  test('should be false', () => {
    types.forEach((type) => {
      expect(compareWithNaN(type)).toBeFalsy()
    })
  })

  test('should be true', () => {
    const EqualOnes = [1, '1', [1], ['1']]
    EqualOnes.forEach((value) => {
      expect(compareWithTrue(value)).toBeTruthy()
    })

    const equalZeros = [0, '0', [0], ['0']]
    equalZeros.forEach((value) => {
      expect(compareWithFalse(value)).toBeTruthy()
    })
  })

  test('should be false', () => {
    const equalTwos = [2, '2', [2], ['2']]
    equalTwos.forEach((value) => {
      expect(compareWithTrue(value)).toBeFalsy()
    })
  })
})
