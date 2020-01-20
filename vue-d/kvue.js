// kvuejs
/*
 【编译解析】
 1.获取及存储传入的 options
 2.通过传入的 el 值，确定容器
 3.获取容器内容，判断是否有子节点，（递归）
 
 1.编译解析 通过传入的数据编译解析初始化视图 compile
 2.数据劫持 监听数据与属性的变化 observer
 3.发布订阅 通知数据更新 watcher Dep
 4.实现双绑 
*/
class Kvue {
    constructor(options){
        //console.log(options)
        this.$options = options
        this._data=options.data
        //数据劫持
        this.observer(this._data);
        //视图编译
        this.compile(options.el);
    }
    compile(el){
        let element=document.querySelector(el)
        
        // 封装判断子节点内容
        this.compileNode(element);
    }
    compileNode(element){
        let childNodes=element.childNodes;

        //console.log(childNodes)
        //console.log(element);
        Array.from(childNodes).forEach(  node=>{
            //console.log(node)
            // 判断子节点内容是否为带标签
            if(node.nodeType==3){
                // 文本
                let nodeContent=node.textContent;
                // let reg=/\{\{(.*)\}\}/  // 匹配不去除空格
                let reg = /\{\{\s*(\S*)\s*\}\}/;
                if(reg.test(nodeContent)){
                    //console.log(RegExp.$1);
                    node.textContent = this._data[RegExp.$1];

                    // 实例化
                    new Watcher(this,RegExp.$1,newValue=>{
                        node.textContent = newValue;
                    });
                }

            }else if(node.nodeType==1){
                // 标签
                //console.log(node.nodeType);
                let attrs=node.attributes;
                //console.log(attrs);

                Array.from(attrs).forEach(attr=>{
                    //console.log(attr);
                    let attrName=attr.name;
                    let attrValue=attr.value;

                    if(attrName.indexOf('k-')==0){
                        attrName=attrName.substr(2);
                        //console.log(attrName);
                        if(attrName=='model'){
                            node.value=this._data[attrValue];
                        }
                        node.addEventListener('input',e=>{
                            console.log(e.target.value);
                            this._data[attrValue]=e.target.value;
                        })

                        //监听数据更新
                        new Watcher(this,attrValue,newValue=>{
                            node.value = newValue;
                        });
                    }

                })

            }
            // 判断是否还有子节点，递归
            if(node.childNodes.length>0){
                this.compileNode(node);
            }
        })
    }
    //数据劫持
    observer(data){
        Object.keys(data).forEach( key=>{
            let value=data[key];
            let dep=new Dep();
            Object.defineProperty(data,key,{
                configurable:true,
                enumerbale:true,
                get(){
                    if(Dep.target){
                        dep.addSub(Dep.target);
                    }
                    return value
                },
                set(newValue){
                    console.log('set:'+newValue);
                    if(newValue!==value)
                    value=newValue;
                    dep.notify(newValue);
                }
            })
        })
    }
}

//依赖收集，发布订阅
class Dep {
    constructor(){
        this.subs=[];
    }
    //添加
    addSub(sub){
        this.subs.push(sub)
    }
    //发通知
    notify(newValue){
        this.subs.forEach(v => {
            v.updata(newValue);
        });
    }
}

class Watcher{
    constructor(vm,exp,cb){
        Dep.target=this;
        vm._data[exp];
        this.cb=cb
        Dep.target=null;
    }
    updata(newValue){
        //改变视图
        console.log('更新了'+ newValue) 
        this.cb(newValue);
    }
}