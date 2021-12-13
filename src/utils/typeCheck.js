/*
 * @Author: Stevie
 * @Date: 2021-12-13 10:39:45
 * @LastEditTime: 2021-12-13 13:34:33
 * @LastEditors: Stevie
 * @Description:
 */
class CheckType {
  getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
  }

  isNumber(obj) {
    return this.getType(obj) === 'Number'
  }

  isString(obj) {
    return this.getType(obj) === 'String'
  }

  isBoolean(obj) {
    return this.getType(obj) === 'Boolean'
  }

  isUndefined(obj) {
    return this.getType(obj) === 'Undefined'
  }

  isNull(obj) {
    return this.getType(obj) === 'Null'
  }

  isSymbol(obj) {
    return this.getType(obj) === 'Symbol'
  }

  isObject(obj) {
    return this.getType(obj) === 'Object'
  }

  isArray(obj) {
    return this.getType(obj) === 'Array'
  }

  isDate(obj) {
    return this.getType(obj) === 'Date'
  }

  isError(obj) {
    return this.getType(obj) === 'Error'
  }

  isMath(obj) {
    return this.getType(obj) === 'Math'
  }

  isRegExp(obj) {
    return this.getType(obj) === 'RegExp'
  }

  isFunction(obj) {
    return this.getType(obj) === 'Function'
  }
}

const checkType = new CheckType()

export { checkType as CheckType }
