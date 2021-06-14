/*
 * @Author: Stevie
 * @Date: 2021-06-14 17:45:01
 * @LastEditTime: 2021-06-14 23:59:02
 * @LastEditors: Stevie
 * @Description:
 */
const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcPath = path.resolve(__dirname, './../src');

module.exports = {
  // - 入口
  entry: './src/index.js',
  // - 出口
  output: {
    filename: '[main].[hash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  // - 模块: 根据功能划分为不同的功能块(loaders)
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options:{
          presets:[
            '@babel/preset-env'
          ]
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.json'],
    alias: {
      src: srcPath
    }
  },
  // - 插件
  plugins: [
    new HappyPack({
      id: 'babel',
      threads: 4,
      loaders: ['babel-loader'],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist'],
    }),
    new HtmlWebpackPlugin({
      template: `${srcPath}/template/index.html`,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin()
  ],
};
