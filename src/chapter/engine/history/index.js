/*
 * @Author: Stevie
 * @Date: 2022-11-24 23:35:53
 * @LastEditors: Stevie
 * @LastEditTime: 2022-12-04 17:38:57
 * @Description: history router
 */
function onStateChange(funcName) {
  let originFn = history[funcName]
  return function () {
    let result = originFn.apply(this, arguments)
    let event = new Event(funcName)
    event.arguments = arguments
    window.dispatchEvent(event)
    return result
  }
}

history.pushState = onStateChange('pushState')
history.replaceState = onStateChange('replaceState')
