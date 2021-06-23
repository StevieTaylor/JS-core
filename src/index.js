/*
 * @Author: Stevie
 * @Date: 2021-06-14 22:20:58
 * @LastEditTime: 2021-06-23 16:15:47
 * @LastEditors: Stevie
 * @Description: 主入口文件
 */
import './styles/index.css'
import { chapterMap, baseMap, arrayMap } from './utils/constant'
import './chapter/array/array-traversal'

const rootNode = document.getElementById('root')
const titleNode = document.createElement('h1')
titleNode.innerHTML = 'JS-core 核心原理'
titleNode.style.borderBottom = '1px solid #BBBFCA'
titleNode.style.paddingBottom = '10px'
rootNode.appendChild(titleNode)

/**
 * @description: 加载章节
 * @param {*} map
 * @return {*}
 */
function loadChapter(map = {}) {
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key) && map[key].display) {
      const container = document.createElement('div')
      container.className = key
      const subtitleNode = document.createElement('h2')
      subtitleNode.innerHTML = map[key].name
      container.appendChild(subtitleNode)
      const ulistNode = document.createElement('ul')
      ulistNode.id = key
      container.appendChild(ulistNode)
      rootNode.appendChild(container)
    }
  }
}

/**
 * @description: 加载模块
 * @param {*} map
 * @param {*} chapterId
 * @return {*}
 */
function loadModule(map = {}, chapterId = '') {
  const chapterNode = document.getElementById(`${chapterId}`)
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const liNode = document.createElement('li')
      const anchorNode = document.createElement('a')
      anchorNode.innerHTML = map[key]
      anchorNode.href = `#${key}`
      anchorNode.rel = 'noopener'
      anchorNode.className = 'module'
      anchorNode.addEventListener('click', () => {
        const moduleName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        import(`./chapter/${chapterId}/${moduleName}`)
          .then((res) => {
            res && console.log(`%cModule [${moduleName}] load successfully...`, 'color:#28DF99')
          })
          .catch((err) => {
            err && console.error(`%cModule [${moduleName}] load failed...`, 'color:#E8505B')
          })
      })
      liNode.appendChild(anchorNode)
      chapterNode.appendChild(liNode)
    }
  }
}
loadChapter(chapterMap)
loadModule(baseMap, 'base')
loadModule(arrayMap, 'array')
