/*
 * @Author: Stevie
 * @Date: 2021-06-14 22:20:58
 * @LastEditTime: 2021-12-16 16:51:09
 * @LastEditors: Stevie
 * @Description: 主入口文件
 */
import './styles/index.css'
import { chapterConfigs } from './constants/index'

const rootNode = document.getElementById('root')
const titleNode = document.createElement('h1')
titleNode.innerHTML = 'JS-core 核心原理'
titleNode.style.borderBottom = '1px solid #BBBFCA'
titleNode.style.paddingBottom = '10px'
rootNode.appendChild(titleNode)

/**
 * @description: 加载章节
 * @param {*} chapters
 * @return {*}
 */
function loadChapter(chapters = []) {
  const length = chapters.length

  if (length <= 0) {
    return
  }

  for (let i = 0; i < length; i++) {
    const { chapterId, chapterName, display, children } = chapters[i]

    if (display) {
      const section = document.createElement('div')
      section.className = `${chapterId}-container`

      const subtitle = document.createElement('h2')
      subtitle.innerHTML = chapterName

      const moduleList = document.createElement('ul')
      moduleList.id = `${chapterId}-modules`

      section.append(subtitle, moduleList)
      rootNode.appendChild(section)

      loadModule(chapterId, children)
    }
  }
}

/**
 * @description: 加载模块
 * @param {*} chapterId
 * @param {*} modules
 * @return {*}
 */
function loadModule(chapterId = '', modules = []) {
  const moduleList = document.getElementById(`${chapterId}-modules`)
  const sections = modules.sort((a, b) => a.sectionOrder - b.sectionOrder)
  const length = sections.length

  if (length <= 0) {
    const todo = document.createElement('p')
    todo.innerHTML = '正在建设中...'
    moduleList.appendChild(todo)
    return
  }

  for (let i = 0; i < length; i++) {
    const { sectionId, sectionName, display } = sections[i]

    if (display) {
      const module = document.createElement('li')

      const moduleLink = document.createElement('a')
      moduleLink.innerHTML = sectionName
      moduleLink.href = `#${sectionId}`
      moduleLink.rel = 'noopener'
      moduleLink.className = 'module'
      moduleLink.addEventListener('click', () => {
        const moduleName = sectionId.replace(/([A-Z])/g, '-$1').toLowerCase()
        import(`./chapter/${chapterId}/${moduleName}`)
          .then((res) => {
            res &&
              console.log(
                `%cModule [${moduleName}] load successfully...`,
                'color:#28DF99'
              )
          })
          .catch((err) => {
            err &&
              console.error(`%cModule [${moduleName}] load failed...`, 'color:#E8505B')
          })
      })

      module.appendChild(moduleLink)
      moduleList.appendChild(module)
    }
  }
}

loadChapter(chapterConfigs)
