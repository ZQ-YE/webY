# Docker

### Docker 是什么
+ build，ship and Run Any App,Anywhere -- 一次封装，到处执行。
+ 基于 Linux 的高效、便捷、轻量级的容器（轻量虚拟）方案。
> 虚拟技术
> + 安全虚拟化 VMware Workstation,VirtualBox
> + 硬件辅助虚拟化 InterVT AMD-V
> + 超虚拟化 Xen
> + 操作系统级 Docker LXC 容器

`部署一个典型的前后端分离系统`
+ 前端工程化 - Taro
+ 后端 - NodeJS
+ 数据库 - MongoDB
+ Nginx
    + 静态服务
    + 反向代理

### 特点
+ 高效的利用系统资源
+ 快速的启动时间
+ 一致的运行环境
+ 持续交付和部署
+ 更轻松的迁移

### 安装
```
申请阿里云主机 ecs   Ubuntu 18.04 64位
```

##### 设置仓库
```js
# apt升级
$ sudo apt-get update

# 添加相关软件包
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# 添加 Docker 的官方 GPG 密钥：
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 使用以下指令设置稳定版仓库
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"

```
##### 安装 Docker EC(Engine-Community)
```js
# 更新 apt 包索引
$ sudo apt-get update

# 安装最新版本的 Docker EC
$ sudo apt-get install docker-ce

# 启动 Docker CE 
$ sudo systemctl enable docker 
$ sudo systemctl start docker

# 建立 docker 用户组(附加) 
$ sudo groupadd docker 
$ sudo usermod -aG docker $USER

# Helloworld测试 
$ docker run hello-world
```
###### 镜像加速
+ [Azure 中国镜像 https://dockerhub.azk8s.cn](https://dockerhub.azk8s.cn)
+ [阿里云加速器（需登录账号获取）](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
+ [七牛加速器 https://reg-mirror.qiniu.com](https://reg-mirror.qiniu.com)
```js
// vi /etc/docker/daemon.json  添加 daemon.json 文件并进入编译
// i 插入
// esc :wq 退出

# /etc/docker/daemon.json
{
    "registry-mirrors":[
       "https://dockerhub.azk8s.cn",
       "https://reg-mirror.qiniu.com"  
    ]
}
$ sudo systemctl daemon-reload 
$ sudo systemctl restart docke

# 实验镜像 安装 nginx
$ docker pull nginx

```

# Nginx  
```js
# 拉取官方镜像 - 面向docker的只读模板
$ docker pull nginx 

# 查看
$ docker images nginx

# 启动镜像 
$ mkdir www  // 创建一个www文件夹
$ echo 'hello docker!!' >> www/index.html  // 创建一个index.html，并写入文本 hello docker!!

    # 查看是否成功
    $ cat www/index.html  // > hello docker!!

# 启动
# www目录里面放一个index.html
$ docker run -p 8000:80 -v $PWD/www:/usr/share/nginx/html nginx
 
# 后台启动
$ docker run -p 80:80 -v $PWD/www:/usr/share/nginx/html -d nginx
 
// 到此启动成功，已经可以访问页面，在浏览器打开  服务器IP地址:8000
// 服务器需要设置 ip 开发80/8000端口  安全组 > 添加安全组规则

# 停止 
$ docker stop ff6
 
# 查看进程 
$ docker ps 
$ docker ps -a // 查看全部
 
# 伪终端 ff6容器的uuid 
$ docker exec -it ff6 /bin/bash
 
# 删除镜像 
$ docker rm ff6

```

# docker 运行过程
+ 镜像（Images）
  面向docker的只读模板
+ 容器（Containers）
  镜像的运行实例
+ 仓库（Registry）
  存储镜像的服务器
```js
$ docker pull nginx // 在 仓库（Registry）把 nginx 拉取到镜像（Images）只读模板

$ docker run  // 把镜像（Images）里的 nginx 镜像实例化放到容器（Containers）并运行。
```
# 定制镜像
## dockerfile 定制
>镜像的定制实际上就是定制每一层所添加的配置、文件。如果我们可以把每一层修改、安装、构建、操作的 命令都写入一个脚本，用这个脚本来构建、定制镜像，那么之前提及的无法重复的问题、镜像构建透明性的 问题、体积的问题就都会解决。这个脚本就是 Dockerﬁle。 

+ 定制自己的web服务器
```js
$ cd source/docker
$ mkdir nginx // 创建nginx文件夹
$ vi Dockerfile // 创建并写入定制镜像描述文件
// Dockerfile 描述文件内容
FROM nginx:latest 
RUN echo '<h1>Hello world!</h1>' > /usr/share/nginx/html/index.html

# 定制镜像 
$ docker build -t nginx:yeee .  // . 的意思 Dockerfile 在当前目录下
 
# 运行 
$ docker run -p 80:80  nginx:yeee
```

## NodeJS 定制
安装 nodejs npm [参考 Ubuntu 上 Nodejs 安装和卸载](https://www.cnblogs.com/taony/p/10176981.html)
```js
$ npm init -y  // 初始化 npm 项目
$ npm i koa -s  // 添加一个 koa 包

$ vi app.js //新建 app.js 文件

$ vi Dockerfile //新建 dockerfile 文件

$ docker build -t mynode .  // 定制镜像
$ docker run -p 3000:3000 -d mynode // 运行

// package.json
{ 
    "name": "myappp", 
    "version": "1.0.0", 
    "main": "app.js", 
    "scripts": {   
        "test": "echo \"Error: no test specified\" && exit 1"  
    }, 
    "keywords": [], 
    "author": "", 
    "license": "ISC", 
    "description": "myappp", 
    "dependencies": {   
        "koa": "^2.7.0"  // 添加的 koa 包
    } 
}

// app.js 
const Koa = require('koa') 
const app = new Koa() 
app.use(ctx => {    
    ctx.body = 'Hello NodeJS!!' 
}) 
app.listen(3000, () => {    
    console.log('app started at 3000') 
})

// Dockerfile
// 制定node镜像的版本 
FROM node:10-alpine 
// 移动当前目录下面的文件到app目录下 
ADD . /app/ 
// 进入到app目录下面，类似cd 
WORKDIR /app 
// 安装依赖 
RUN npm install 
// 对外暴露的端口 
EXPOSE 3000 
// 程序启动脚本 
CMD ["node", "app.js"]
```

## PM2 定制镜像
+ (利用多核资源) node 进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单
```js
// 拷贝 之前 node文件，命名 pm2
$ cp -R node pm2
// 创建 process.yml 文件
$ vi process.yml
// 编辑 Dockerfile
$ vi Dockerfile
// 定制镜像 
$ docker build -t mypm2 .
// 运行 
$ docker run -p 3000:3000  -d mypm2

// .dockerignore 
node_modules

// process.yml 
apps: 
    - script : app.js
        instances: 2
        watch  : true
        env    :
            NODE_ENV: production

// Dockerfile 
FROM keymetrics/pm2:latest-alpine 
WORKDIR /usr/src/app 
ADD . /usr/src/app 
RUN npm config set registry https://registry.npm.taobao.org/ && \ 
    npm i 
EXPOSE 3000 
#pm2在docker中使用命令为pm2-docker 
CMD ["pm2-runtime", "start", "process.yml"]

```

## Compose
+ Compose项目是Docker官方的开源项目，负责实现对Docker容器集群的快速编排。
```yml
# 创建文件
$ vi docker-compose.yml
# 启动
$ docker-compose up 
# 访问 服务器ip:8000

#docker-compose.yml 
version: '3.1' 
services:
    mongo:
        image: mongo    
        restart: always    
        ports: 
            - 27017:27017  
    mongo-express:    
        image: mongo-express    
        restart: always    
        ports:      
            - 8000:8081
```
