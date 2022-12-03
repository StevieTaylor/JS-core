/*
 * @Author: Stevie
 * @Date: 2022-12-02 11:14:41
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-03 17:12:32
 * @Description: bind的应用与实现
 */
/**
 * @bind的特点
 * - 功能：函数调用改变this指向
 * - 参数：多个参数
 * - 返回结果：返回待执行函数
 */
function buyCar(user, carName) {
  this.year = 2022
  console.log(`${user}买了一辆${carName}`)
  console.log('this: >> ', this, 'arguments: >> ', arguments)
}

buyCar.prototype.paymentPlace = '4S店'
buyCar.prototype.paymentMethod = function (channel) {
  return ['支付宝', '微信', '现金'][channel]
}

console.log('------------------------原生 bind------------------------')

// - 1.bind()改变this指向
const buy1 = buyCar.bind({ price: '22w', unit: 'rmb' })
buy1()

// - 2.bind()可以分离参数，bind()接收一部分参数，返回的新函数也接收一部分参数
const buy2 = buyCar.bind({ price: '25w', unit: 'rmb' }, 'Jack')
buy2('比亚迪')

// - 3.bind()传参和call一样, 可以传多个参数
const buy3 = buyCar.bind({ price: '18w', unit: 'rmb' }, 'Lucy', '日产天籁')
buy3()

// - 4.bind()接收参数从第二个开始应用于目标函数，多的放在arguments中
const buy4 = buyCar.bind({ price: '24w', unit: 'rmb' }, 'James', '本田雅阁', '豪华版')
buy4()

// - 5.通过new实例化bind后的新函数，其this指向原bind调用函数的实例，该实例继承了原函数的原型属性
const buy5 = buyCar.bind({ price: '20w', unit: 'rmb' }, 'Smith')
const newBuy5 = new buy5('丰田凯美瑞')
console.log('new buyCar() :>> ', newBuy5)

/**
 * @description: 模拟实现bind
 * @param {*} context
 * @return {*}
 */
Function.prototype._bind = function (context) {
  // 判定bind调用者的类型
  if (typeof this !== 'function') {
    throw new TypeError('this must be a function')
  }
  // 获取调用者
  let originFn = this
  // 获取bind中的参数
  let args = [].slice.call(arguments, 1)

  let Fn = function () {
    // 获取待返回函数的参数
    let newArgs = [].slice.call(arguments)
    // 如果new实例化bind后的新函数，则this为原函数的实例，将this应用在原函数
    if (this instanceof Fn) {
      return originFn.apply(this, args.concat(newArgs))
    }
    // 否则改变this指向，将新对象应用于原函数
    return originFn.apply(context, args.concat(newArgs))
  }

  // 继承原函数的原型上的属性
  if (this.prototype) {
    Fn.prototype = Object.create(this.prototype)
  }

  return Fn
}

console.log('------------------------模拟实现 bind------------------------')
const bought1 = buyCar._bind({ price: '22w', unit: 'rmb' })
bought1()

const bought2 = buyCar._bind({ price: '25w', unit: 'rmb' }, 'Jack')
bought2('比亚迪')

const bought3 = buyCar._bind({ price: '18w', unit: 'rmb' }, 'Lucy', '日产天籁')
bought3()

const bought4 = buyCar._bind({ price: '24w', unit: 'rmb' }, 'James', '本田雅阁', '豪华版')
bought4()

const bought5 = buyCar._bind({ price: '20w', unit: 'rmb' }, 'Smith')
const newBought5 = new bought5('丰田凯美瑞')
console.log('new buyCar() :>> ', newBought5)
