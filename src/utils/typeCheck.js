/*
 * @Author: Stevie
 * @Date: 2021-12-13 10:39:45
 * @LastEditTime: 2022-10-09 17:26:54
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

  isBigInt(obj) {
    return this.getType(obj) === 'BigInt'
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

  isPrimitive(obj) {
    return ['Number', 'String', 'Boolean', 'Undefined', 'Null', 'Symbol', 'BigInt'].includes(
      this.getType(obj)
    )
  }

  isReference(obj) {
    return ['Object', 'Array', 'Date', 'Error', 'Math', 'RegExp', 'Function'].includes(
      this.getType(obj)
    )
  }
}

const checkType = new CheckType()

export { checkType as CheckType }
