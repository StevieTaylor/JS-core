/*
 * @Author: Stevie
 * @Date: 2021-12-17 10:22:48
 * @LastEditTime: 2021-12-17 17:33:03
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * @description: 测试Number匹配
 * @param {*}
 * @return {*}
 */
describe('Number', () => {
  test('number equal', () => {
    const res = 3 + 5
    expect(res).toBe(8) // * 等于
    expect(res).toEqual(8)
  })

  test('float close', () => {
    const value = 0.1 + 0.2
    const precision = 15
    expect(value).toBeCloseTo(0.3, precision) // ~ 在精度 1~15 范围内, 0.1+0.2=0.3
    // expect(value).toBe(0.3)
  })

  test('> >= < <=', () => {
    const score = 61
    expect(score).toBeGreaterThan(60) // * 大于
    expect(score).toBeGreaterThanOrEqual(60) // * 大于等于
    expect(score).toBeLessThan(80) // * 小于
    expect(score).toBeLessThanOrEqual(80) // * 小于等于
  })
})

/**
 * @description: 测试String匹配
 * @param {*}
 * @return {*}
 */
test('match String', () => {
  const str = 'apples and bananas'
  expect(str).toMatch('apple')
  expect(str).toMatch(/banana/)
})

/**
 * @description: 测试Boolean匹配
 * @param {*}
 * @return {*}
 */
test('match Boolean ', () => {
  expect([1, 2, 3].some((a) => a > 1)).toBeTruthy()
  expect([1, 2, 3].every((a) => a > 1)).toBeFalsy()
})

/**
 * @description: 测试Null、 Undefined匹配
 * @param {*}
 * @return {*}
 */
describe('null and undefined', () => {
  test('null', () => {
    const a = null
    expect(a).toBeNull()
  })

  test('undefined', () => {
    const b = undefined
    expect(b).toBeUndefined()
    // * 等同于
    expect(b).not.toBeDefined()
  })

  test('defined', () => {
    const c = 1
    expect(c).toBeDefined()
    // * 等同于
    expect(c).not.toBeUndefined()
  })
})

/**
 * @description: 测试数组 Array 和可迭代对象 Iterators 是否包含某元素
 * @param {*}
 * @return {*}
 */
describe('Array and Iterators', () => {
  const arr = ['array', 'is', 'iterator', 'is', 'iterator']
  const expectedElement = 'iterator'

  test('Array', () => {
    expect(arr).toContain(expectedElement)
    expect(arr).toContainEqual(expectedElement)
  })

  test('String', () => {
    const str = 'string is iterator'
    expect(str).toContain(expectedElement)
    expect(str).toContain('ite') // - 对于String而言, toContain()只要包含子字符串即可
    expect(str).toContainEqual('t') // - 但是toContainEqual()必须是单个字符
  })

  test('Set', () => {
    const set = new Set(arr)
    expect(set).toContain(expectedElement)
  })

  // todo: how to test Map ?
  test.todo('map')
})

/**
 * @description: 测试Error匹配
 * @param {*}
 * @return {*}
 */
describe('Exceptions', () => {
  function getError(data) {
    if (typeof data !== 'number') {
      throw new TypeError('type error')
    } else {
      throw new SyntaxError('syntax error')
    }
  }

  test('Error ', () => {
    expect(() => getError('str')).toThrow()
    expect(() => getError('str')).toThrowError(Error)
    expect(() => getError('str')).toThrowError(TypeError)
    expect(() => getError('str')).toThrowError('type error')

    expect(() => getError(10)).toThrow()
    expect(() => getError(10)).toThrowError(Error)
    expect(() => getError(10)).toThrowError(SyntaxError)
    expect(() => getError(10)).toThrowError('syntax error')
  })
})
