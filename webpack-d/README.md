# web webpack 学习笔记 

> [webpack](https://www.webpackjs.com/configuration/)

#### webpack的作用：
> (1)打包：把多个文件打包成一个js文件，以减少服务器压力和贷款。
> (2)转化：使用loader转化lees、sass、ts等。
> (3)优化：SPA项目越来越盛行，前端项目复杂度高，webpack可以对项目进行优化。

#### webpack构成：
> (1)入口：entry
> (2)出口：output
> (3)loader：转化器
> (4)plugins：插件
> (5)devServer：开发服务器
> (6)mode

#### webpack的两种环境
> (1)开发环境(development)：就是你平常写代码的环境。
> (2)生产环境(production)：项目开发完毕，部署上线。

#### 安装/打包
``` 
    npm install webpack -g // 全局安装
    npm install webpack --save-dev // 项目内安装

    webpack4版需要去额外安装webpack-cli
    npm install webpack@4 --save-dev
    npm install webpack@4 webpack-cli --save-dev
``` 

```
压缩    webpack --config build/webpack.config.js

    "scripts": {
        "build": "webpack --config build/webpack.config.js --mode production"
    },

开发服
安装 webpack-dev-derver 
    npm add webpack-dev-server --save-dev
    "scripts": {
        "dev": "webpack-dev-server --open --inline"
    },

安装 glob
    npm add glob --save-dev

安装 html-webpack-plugin
    npm add html-webpack-plugin --save-dev

启动
    npm run build
    npm run dev
```