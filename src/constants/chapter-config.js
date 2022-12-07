/*
 * @Author: Stevie
 * @Date: 2021-11-19 15:28:15
 * @LastEditTime: 2022-12-06 15:41:25
 * @LastEditors: Stevie
 * @Description:
 */
export const chapterConfigs = [
  {
    chapterId: 'base',
    chapterName: '一、基石篇',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'dataType',
        sectionName: '数据类型',
        display: true,
      },
      {
        sectionOrder: 2,
        sectionId: 'deepCopy',
        sectionName: '深浅拷贝',
        display: true,
      },
      {
        sectionOrder: 3,
        sectionId: 'prototype',
        sectionName: '原型',
        display: true,
      },
      {
        sectionOrder: 4,
        sectionId: 'inherit',
        sectionName: '继承',
        display: true,
      },
      {
        sectionOrder: 5,
        sectionId: 'new',
        sectionName: 'new',
        display: true,
      },
      {
        sectionOrder: 6,
        sectionId: 'call',
        sectionName: 'call',
        display: true,
      },
      {
        sectionOrder: 7,
        sectionId: 'apply',
        sectionName: 'apply',
        display: true,
      },
      {
        sectionOrder: 8,
        sectionId: 'bind',
        sectionName: 'bind',
        display: true,
      },
    ],
  },
  {
    chapterId: 'array',
    chapterName: '二、深入数组篇',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'traversal',
        sectionName: '数组遍历',
        display: true,
      },
      {
        sectionOrder: 2,
        sectionId: 'removeDuplicate',
        sectionName: '数组去重',
        display: true,
      },
      {
        sectionOrder: 3,
        sectionId: 'flatten',
        sectionName: '数组扁平化',
        display: true,
      },
    ],
  },
  {
    chapterId: 'function',
    chapterName: '三、深入函数篇',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'curry',
        sectionName: '柯里化',
        display: true,
      },
    ],
  },
  {
    chapterId: 'async',
    chapterName: '四、异步编程篇',
    display: true,
    children: [],
  },
  {
    chapterId: 'engine',
    chapterName: '五、JS引擎篇',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'hashRouter',
        sectionName: 'Hash路由',
        href: '/src/chapter/engine/hash/index.html',
        display: true,
      },
    ],
  },
  {
    chapterId: 'regExp',
    chapterName: '六、正则表达式',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'positionMatching',
        sectionName: '位置匹配',
        display: true,
      },
      {
        sectionOrder: 2,
        sectionId: 'stringMatching',
        sectionName: '字符串匹配',
        display: true,
      },
    ],
  },
  {
    chapterId: 'handwriting',
    chapterName: '七、进阶手写',
    display: true,
    children: [
      {
        sectionOrder: 1,
        sectionId: 'getQueryString',
        sectionName: '手写getQueryString',
        display: true,
      },
    ],
  },
]
