/*
 * @Author: Stevie
 * @Date: 2021-11-19 15:28:15
 * @LastEditTime: 2021-12-16 14:05:49
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
        sectionId: 'inherit',
        sectionName: '继承',
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
    ],
  },
  {
    chapterId: 'async',
    chapterName: '三、异步编程篇',
    display: true,
    children: [],
  },
  {
    chapterId: 'engine',
    chapterName: '四、JS引擎篇',
    display: true,
    children: [],
  },
  {
    chapterId: 'regExp',
    chapterName: '五、正则表达式',
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
]
