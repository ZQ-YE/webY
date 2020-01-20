const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname,'../dist');
const ENTRY_PATH = path.resolve(__dirname,'../src/index.js');
const SRC_PATH = path.resolve(__dirname,'../src')

const entryJsFiles={}
const jsFiles=glob.sync(SRC_PATH+'/**/*.js');
jsFiles.forEach(file=>{
    const   subkey=file.match(/src\/(\S*)\.js/)[1];
    entryJsFiles[subkey]=file;
});

const pluginAll=[];
const htmlpages=glob.sync(SRC_PATH+'/pages/**/*.html');
htmlpages.forEach(page=>{
    const pagestr=page.match(/src\/pages\/(\S*)\.html/);
    const name = pagestr[1]

    const plug = new htmlWebpackPlugin({  //打包输出HTML
        title:name+'测试',
        // minify: { // 压缩HTML文件
        //     removeComments: true, // 移除HTML中的注释
        //     collapseWhitespace: true, // 删除空白符与换行符
        //     minifyCSS: true// 压缩内联css
        // },
        template:SRC_PATH+'/pages/'+name+'.html', //需要打包的文件
        filename:DIST_PATH+'/'+name+'.html', //打包后生成的文件
        inject:true,
        hash: true,//是否在引入文件后面加入 hash 值
        chunks:[name],//页面需要引入的文件
    })
    pluginAll.push(plug);
});


module.exports = {
    // 入口文件
    // entry:ENTRY_PATH, //方式一
    // entry:[SRC_PATH+'/index.js',SRC_PATH+'/test.js'], //方式二
    // entry:{ //方式三
    //     index:SRC_PATH+'/index.js',
    //     test:SRC_PATH+'/test.js'
    // },
    // 方式四 
    //使用 glob 获取文件数组
    entry:entryJsFiles,
    // 出口文件
    output:{
        path:DIST_PATH,
        // filename:'index.js' //方式一
        // [hash] 每次打包 每个文件都会打包
        // [chunkhash] 每次打包的时候只打包文件有改动的文件 [chunkhash:6] 截取6位 hash 值
        filename:'[name].[chunkhash:6].js'
    },
    //模块解析
    module:{},
    //插件
    plugins:pluginAll,
    // plugins:[
    //     new htmlWebpackPlugin({  //打包输出HTML
    //         title:'home测试',
    //         minify: { // 压缩HTML文件
    //             removeComments: true, // 移除HTML中的注释
    //             collapseWhitespace: true, // 删除空白符与换行符
    //             minifyCSS: true// 压缩内联css
    //         },
    //         template:path.resolve(__dirname,'../src/pages/home.html'), //需要打包的文件
    //         filename:DIST_PATH+'/home.html', //打包后生成的文件
    //         inject:true,
    //         hash: true,//是否在引入文件后面加入 hash 值
    //         chunks:['name'],//页面需要引入的文件
    //     }),
    //     new htmlWebpackPlugin({  //打包输出HTML
    //         title:'test测试',
    //         minify: { // 压缩HTML文件
    //             removeComments: true, // 移除HTML中的注释
    //             collapseWhitespace: true, // 删除空白符与换行符
    //             minifyCSS: true// 压缩内联css
    //         },
    //         template:path.resolve(__dirname,'../src/pages/test.html'), //需要打包的文件
    //         filename:DIST_PATH+'/test.html', //打包后生成的文件
    //         inject:true,
    //         hash: true,//是否在引入文件后面加入 hash 值
    //         chunks:['index'],//页面需要引入的文件
    //     })
    // ],
    //开发服务器
    devServer:{
        hot:true, //热更新
        contentBase:DIST_PATH,//热启动指向的文件所处位置
        port:8686,//服务端口
        host:'0.0.0.0', //地址
        historyApiFallback:true,//404 与找不到页面 都可以转译成 html 页面
        open:true,
        useLocalIp:true, //是否再打开的时候用自己的ip
        //代理
        proxy:{
           '/api':'http://localhost:2000' 
        }
    }
}


