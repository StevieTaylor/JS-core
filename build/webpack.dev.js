/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:10:50
 * @LastEditTime: 2021-12-16 17:27:40
 * @LastEditors: Stevie
 * @Description:
 */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 6140,
    host: 'localhost',
    compress: false,
    open: true,
  },
  devtool: 'eval-cheap-module-source-map',
  cache: {
    type: 'memory',
  },
  optimization: {
    minimize: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = merge(base, devConfig)
