/*
 * @Author: Stevie
 * @Date: 2021-06-14 22:20:58
 * @LastEditTime: 2021-06-15 17:40:33
 * @LastEditors: Stevie
 * @Description: 主入口文件
 */
import { chapterMap, baseMap } from './utils/constant';

const rootNode = document.getElementById('root');
const titleNode = document.createElement('h1');
titleNode.innerHTML = 'JS-core 核心原理';
titleNode.style.borderBottom = '1px solid #BBBFCA';
titleNode.style.paddingBottom = '10px';
rootNode.appendChild(titleNode);

/**
 * @description: 加载章节
 * @param {*} map
 * @return {*}
 */
const loadChapter = (map = {}) => {
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key) && map[key].display) {
      const container = document.createElement('div');
      container.className = key;
      const subtitleNode = document.createElement('h2');
      subtitleNode.innerHTML = map[key].name;
      container.appendChild(subtitleNode);
      const ulistNode = document.createElement('ul');
      ulistNode.id = key;
      container.appendChild(ulistNode);
      rootNode.appendChild(container);
    }
  }
};

/**
 * @description: 加载模块
 * @param {*} map
 * @param {*} chapterId
 * @return {*}
 */
const loadModule = (map = {}, chapterId = '') => {
  const chapterNode = document.getElementById(`${chapterId}`);
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const liNode = document.createElement('li');
      const linkNode = document.createElement('a');
      linkNode.innerHTML = map[key];
      linkNode.href = `#${key}`;
      linkNode.addEventListener('click', () => {
        import(`./chapter/${chapterId}/${key}`)
          .then((res) => {
            console.log(`%cModule [${key}] load successfully...`, 'color:#28DF99');
          })
          .catch((err) => {
            // console.error(err);
            if (err) {
              console.error(`%cModule [${key}] load failed...`, 'color:#E8505B');
              return;
            }
          });
      });
      liNode.appendChild(linkNode);
      chapterNode.appendChild(liNode);
    }
  }
};
loadChapter(chapterMap);
loadModule(baseMap, 'base');
