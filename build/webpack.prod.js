/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:11:02
 * @LastEditTime: 2021-06-14 23:37:23
 * @LastEditors: Stevie
 * @Description: 
 */
const merge = require('webpack-merge');
const base = require('./webpack.base');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const prodConfig = {
  mode: 'production',
  plugins:[
    new ParallelUglifyPlugin({
      test,
      include,
      exclude,
      cacheDir,
      sourceMap,
      uglifyJS:{
        warning:false
      }
    })
  ]
}

module.exports = merge(base,prodConfig);