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
# vi /etc/docker/daemon.json  添加 daemon.json 文件并进入编译
# i 插入
# esc :wq 退出

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

