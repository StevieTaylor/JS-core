/*
 * @Author: Stevie
 * @Date: 2022-11-24 20:50:53
 * @LastEditors: Stevie
 * @LastEditTime: 2022-11-24 23:28:35
 * @Description: hash router
 */
class HashRouter {
  constructor(routes = []) {
    this.routes = routes
    this.currentHash = ''
    this.refresh = this.refresh.bind(this)
    window.addEventListener('load', this.refresh, false)
    window.addEventListener('hashchange', this.refresh, false)
  }

  /**
   * @description: 获取路径
   * @param {*} url
   * @return {*}
   */
  getPath(url = '') {
    return url.includes('#') ? url.slice(url.indexOf('#') + 1) : '/'
  }

  /**
   * @description: 刷新hash
   * @param {*} event
   * @return {*}
   */
  refresh(event) {
    let _currentHash = ''
    let oldHash = null
    if (event.newURL) {
      oldHash = this.getPath(event.oldURL)
      _currentHash = this.getPath(event.newURL)
    } else {
      // 首次加载页面的时候只有load事件
      _currentHash = this.getPath(window.location.hash)
    }
    this.currentHash = _currentHash
    this.matchContent()
  }

  /**
   * @description: 匹配内容
   * @return {*}
   */
  matchContent() {
    let matchedRoute = this.routes.find((route) => route.path === this.currentHash)
    if (matchedRoute === undefined) {
      matchedRoute = this.routes.find((route) => route.path === '/')
    }
    const { component } = matchedRoute || {}
    document.querySelector('#content').innerHTML = component
  }
}

const hashRouter = new HashRouter([
  {
    path: '/',
    name: 'home',
    component: '<div>主页内容</div>',
  },
  {
    path: '/classify',
    name: 'classify',
    component: '<div>分类内容</div>',
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: '<div>购物车内容</div>',
  },
  {
    path: '/mine',
    name: 'mine',
    component: '<div>我的内容</div>',
  },
])
