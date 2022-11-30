/*
 * @Author: Stevie
 * @Date: 2022-11-28 10:01:59
 * @LastEditors: Stevie
 * @LastEditTime: 2022-11-30 18:24:16
 * @Description: prototype原型
 */
// - 1.原型prototype
function Func() {}

// - 1.1 函数的prototype属性指向原型对象 Func.prototype
console.log('Func.prototype :>> ', Func.prototype) // { constructor: f }

// - 1.2 Function.prototype.bind() 没有prototype属性
let noPrototype = Function.prototype.bind()
console.log('noPrototype :>> ', noPrototype)

let ctor = Func.prototype.constructor
// - 1.3 原型对象的constructor属性指向构造函数
console.log('Func.prototype.constructor :>> ', ctor)
console.log('Func.prototype.constructor === Func :>> ', Func === ctor)

Func.prototype = { a: 1 }
// - 1.4 constructor 是一个公有且不可枚举的属性。一旦我们改变了函数的 prototype ，那么新对象就没有这个属性了
console.log('Func.prototype :>> ', Func.prototype)

// - 2.隐式原型__proto__
function Demo() {
  this.a = 1
}
let instanceObj = new Demo()
// - 2.1 通过new关键字，实例对象拥有了隐式原型属性__proto__，也有显示原型属性[[prototype]]，但无法直接访问[[prototype]]
console.log('instanceObj :>> ', instanceObj)

let proto = instanceObj.__proto__
// - 2.2 实例对象__proto__的和构造函数的prototype都指向了该构造函数的原型对象
console.log('__proto__ :>> ', proto)
console.log('Func.prototype === instanceObj.__proto__ :>> ', Demo.prototype === proto)

let funcProto = Function.__proto__
let funcPrototype = Function.prototype
// - Function.prototype 是个特殊的对象，是一个函数
console.log('Function.prototype :>> ', funcPrototype)
console.log('Function.__proto__ === Function.prototype :>> ', funcProto === funcPrototype) // true

// - 3.prototype相关总结
// -   3.1 Object 是所有对象的祖先，所有对象都可以通过 __proto__ 找到它，尽头是null
console.log(
  'Func.prototype.__proto__=== Object.prototype  :>> ',
  Func.prototype.__proto__ === Object.prototype
)

// -   3.2 Function 是所有函数的祖先，所有函数都可以通过 __proto__ 找到它
// -       当用 function声明函数的时候已经调用了 new Function()
function funA() {}
console.log('funA.__proto__ === Function.prototype :>> ', funA.__proto__ === Function.prototype) // true

// -   3.3 Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
// -       Function.prototype 的 __proto__ 指向了 Object.prototype
// -       除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
console.log(
  'Function.prototype.__proto__ === Object.prototype :>> ',
  Function.prototype.__proto__ === Object.prototype
)
console.log('Object.prototype.__proto__ :>> ', Object.prototype.__proto__) // null

// -   3.4 函数的prototype属性和其生成的实例对象__proto__的属性共同指向了函数的原型对象
function demoFunc() {}
let demoInstance = new demoFunc()
console.log(
  'Func.prototype === instance.__proto__ :>> ',
  demoFunc.prototype === demoInstance.__proto__
)
