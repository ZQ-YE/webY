class KPromise { 

    // static PENDING='PENDING';
    // static FULFILLED='FULFILLED';
    // static REJECTED='REJECTED';
    
    constructor(handler){

        if( typeof handler !== 'function') throw new TypeError('Promise resolver undefined is not a function')
        
        KPromise.PENDING='PENDING';
        KPromise.FULFILLED='FULFILLED';
        KPromise.REJECTED='REJECTED';
        this.resolvedQueues=[]; //成功队列
        this.rejectedQueues=[]; //失败队列
        this.finallyQueue=[];
        this.value;
        this.status = KPromise.PENDING;
        
        //bind(this) 绑定回调（_resolve,_reject） 函数里的 this 方法指向 KPromise
        handler(this._resolve.bind(this), this._reject.bind(this));
        // handler();
    }

    _resolve(val){
        // 解决 宏任务 与 微任务 的先后执行顺序问题
        window.addEventListener('message', _=>{
            // console.log('_resolve')
            // 状态改变后不再改变
            if(this.status !== KPromise.PENDING) return;
            this.status = KPromise.FULFILLED
            this.value = val;
            
            // 处理 then 函数返回队列
            let handler;
            while(handler = this.resolvedQueues.shift()){
                handler(this.value);
            }
            this._finally(this.value);
        });
        window.postMessage('','*')
    }

    _reject(val){
        // 解决 宏任务 与 微任务 的先后执行顺序问题
        window.addEventListener('message', _=>{
            // console.log('_reject')
            // 状态改变后不再改变
            if(this.status !== KPromise.PENDING) return;
            this.status = KPromise.REJECTED
            this.value = val;

            // 处理 then 函数返回队列
            let handler;
            while(handler = this.rejectedQueues.shift()){
                handler(this.value);
            }
            this._finally(this.value);
        });
        window.postMessage('','*');
    }

    _finally(val){
        // 解决 宏任务 与 微任务 的先后执行顺序问题
        window.addEventListener('message', _=>{
            // 状态改变后不再改变
            this.value = val;

            // 处理 then 函数返回队列
            let handler;
            while(handler = this.finallyQueue.shift()){
                handler(this.value);
            }
        });
        window.postMessage('','*');
    }

    then(resoledHandler, rejectedHandler){
        //事件
        // this.resolvedQueues.push(resoledHandler);
        // this.rejectedQueues.push(rejectedHandler);
        
        //处理then的链式函数
        return new KPromise( (resolve, reject)=>{
            function newResovedHandler(val){

                if(typeof resoledHandler === 'function'){
                    let result = resoledHandler(val);

                    // 判断then执行函数是否返回新的 KPromise 函数
                    if(result instanceof KPromise){
                        result.then(resolve,reject)
                    }else{
                        resolve(result);
                    }
                }else{
                    resolve(val);
                }

            }
            function newRejectedHandler(val){

                if(typeof rejectedHandler === 'function'){
                    let result=rejectedHandler(val);
                    // 判断then执行函数是否返回新的 KPromise 函数
                    if(result instanceof KPromise){
                        result.then(resolve,reject)
                    }else{
                        reject(result);
                    }
                }else{
                    reject(val);
                }
            }
            this.resolvedQueues.push(newResovedHandler);
            this.rejectedQueues.push(newRejectedHandler);

        })
    }

    catch(rejectedHandler){
        return this.then(undefined,rejectedHandler)
    }

    finally(finallyHandler){
        this.finallyQueue.push(finallyHandler);
    }

    static all(iterator){
        let len=iterator.length;
        let i=0;
        let vals=[];

        return new KPromise( (resolve, reject)=>{
            iterator.forEach( it=>{
                it.then( val=>{
                    i++;
                    vals.push(val);
                    if(i===len){
                        resolve(vals);
                    }
                }).catch( e=>{
                    reject(e)
                })
            } )
        } )
    }
    
    static race(iterator){
        return new KPromise( (resolve, reject)=>{
            iterator.forEach( it=>{
                it.then( val=>{
                    resolve(val);
                }).catch( e=>{
                    reject(e)
                })
            } )
        } )
    }

    static resolve(val){
        return new KPromise(resolve=>{
            resolve(val)
        })
    }

    static reject(err){
        return new KPromise((resolve,reject)=>{
            reject(err)
        })
    }

}