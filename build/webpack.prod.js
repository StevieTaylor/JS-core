/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:11:02
 * @LastEditTime: 2021-12-16 17:28:08
 * @LastEditors: Stevie
 * @Description:
 */
const merge = require('webpack-merge')
const base = require('./webpack.base')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  plugins: [
    new ParallelUglifyPlugin({
      test,
      include,
      exclude,
      cacheDir,
      sourceMap,
      uglifyJS: {
        warning: false,
      },
    }),
  ],
}

module.exports = merge(base, prodConfig)
