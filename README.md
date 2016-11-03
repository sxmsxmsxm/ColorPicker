#  ColorPicker

React有相关的拾色器组件，但要兼容IE8浏览的拾色器没有找到合适的，所以就将原有项目中的ColorPicke组件进行了封装。

keywords:**React**，**ColorPpicker**， **jQuery**

## 直接使用说明

1. 下载本项目的 zip 压缩文件；
2. 解压缩 ColorPicker-master.zip 文件；
3. 点击dist/index.html即可

## 目录说明

dist文件夹下的libs是放ColorPickerd的源文件，因为ColorPicker本身依赖jquery，所以libs同级目录下有jquery文件。
dist文件夹下的index.html是展示页面
dist文件夹下的bundle.js是打包后的文件
dist文件夹下的es5-shim.js是IE8的兼容文件

src文件加下的index.jsx是react入口文件
src文件加下的components/ColorPicker.jsx是封装ColorPicker的主要文件
src文件加下的asset/tpl.html是react的模板文件

package.js是该项目的以来说明
webpack.config.js是webpackx的配置文件

## 更改说明

前提：是基于react开发，所以本机要配置好开发环境，具体操作看ract官方文档或教程

1、 在终端文件所放的目录下执行 `npm install` 命令，在dist的同级目录下会新增文件夹node_modules文件夹
2、 继续执行  `npm start` 命令 ，在浏览器地址栏输入http://localhost:8080/即可c进行更改
3、 最后可执行 `npm run build` 命令 执行打包，打包后的文件即使dist目录下的index.html和bundle.js.