// 发布订阅
// 依赖收集器
class Dep {
    constructor(){
        this.subs=[];

    }
    //添加
    addSub(sub){
        this.subs.push(sub)
    }
    //发通知
    notify(){
        this.subs.forEach(v => {
            v.updata();
        });
    }
}

class Watcher{
    constructor(){

    }
    updata(){
        console.log('更新了')
    }
}

let dep=new Dep();
let watcher1=new Watcher();
let watcher2=new Watcher();
let watcher3=new Watcher();

dep.addSub(watcher1);
dep.addSub(watcher2);
dep.addSub(watcher3);

dep.notify();
