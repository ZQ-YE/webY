# javascript
`轻量级的编程语言`

### 输出
`alert,write,innerHTML,log`
```js
window.alert() //弹出警告  alert()
document.write() //内容写到 HTML 文档中
innerHTML // document.getElementById("demo").innerHTML = "段落已修改。"
console.log() //输出到览器的控制台
```

### 语法
+ 字面量（数字、字符串、表达式、数组、对象、函数）
```js
3.14 //数字
"abc" //字符串
5+6 //表达式
[1,2,3]//数组
{a:1,b:2}//对象
function myFun(a,b){return a+b}//函数
```
+ 变量（var 定义变量）
```js
var x, len
a=2
len=3
```
+ 操作符
    + 赋值，算术和位运算符 （= + - * / % ++ -- += -= *= /= %= ）
    + 条件，比较及逻辑运算符 （ == != < > === !== >= <= && || ! ）
+ 关键字（保留了一些关键字为自己所用）

### 语句
`发给浏览器的命令`
###### 语句标识符
| 语句 | 描述 |
| -------- | ----- |
| break | 用于跳出循环。 | 
| catch | 语句块，在 try 语句块执行出错时执行 catch 语句块。 |
| continue | 跳过循环中的一个迭代。 |
| do ... while | 执行一个语句块，在条件语句为 true 时继续执行该语句块。 |
| for | 在条件语句为 true 时，可以将代码块执行指定的次数。 |
| for ... in | 用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。 |
| function | 定义一个函数 |
| if ...  else | 用于基于不同的条件来执行不同的动作。 |
| return | 退出函数 |
| switch | 用于基于不同的条件来执行不同的动作。 |
| throw | 抛出（生成）错误 。 |
| try | 实现错误处理，与 catch 一同使用。 |
| var | 声明一个变量。 |
| while | 当条件语句为 true 时，执行语句块。 |

### 数据类型
+ 值类型（基本类型）：字符串(String)、数字(Number)、布尔(Boolean)、对空(Null)、未定义(Undefined)、Symbol
+ 引用数据类型：对象(Object)、数组(Array)、函数(Function)
```
typeof 返回数据类型 
```

### 作用域
```js
//全局变量
var brr="123"
 function myFun(){
     //局部变量，函数外部不可调用
     var foo="123"
     //全局变量
     gee="123"
 }
```

### 事件
#### 常用的HTML事件
| 事件 | 描述 |
| ---- | ---- |
| onchange | HTML 元素改变 |
| onclicke | 用户点击 HTML 元素 |
| onmouseover | 用户在一个HTML元素上移动鼠标 |
| onmouseout | 用户从一个HTML元素上移开鼠标 |
| onkeydown | 用户按下键盘按键 |
| onblur | 失去焦点 |
| onfocus | 获取焦点 |
| onload | 浏览器已完成页面的加载 |
| onscroll | 当文档被滚动时发生的事件 |
| onselect | 用户选取文本时触发 ( input 和 textarea) |
| onsubmit | 表单提交时触发 |
| oncopy | 该事件在用户拷贝元素内容时触发 |
| ondrag | 该事件在元素正在拖动时触发 |
###### 属性
| 属性 | 描述 |
| ---- | ---- |
| target | 返回触发此事件的元素（事件的目标节点） |
| type | 返回当前 Event 对象表示的事件的名称 |
###### 方法
| 方法 | 描述 |
| ---- | ---- |
| initEvent() | 初始化新创建的 Event 对象的属性 |
| preventDefault() | 通知浏览器不要执行与事件关联的默认动作 |
| stopPropagation() | 不再派发事件 |
#### 目标事件对象
###### 方法
| 方法 | 描述 |
| ---- | ---- |
| addEventListener() | 允许在目标事件中注册监听事件(IE8 = attachEvent()) |
| dispatchEvent() | 允许发送事件到监听器上 (IE8 = fireEvent()) |
| removeEventListener | 运行一次注册在事件目标上的监听事件(IE8 = detachEvent()) |
#### 事件监听对象
###### 方法
| 方法 | 描述 |
| ---- | ---- |
| handleEvent() | 把任意对象注册为事件处理程序 |
#### 鼠标/键盘事件对象
###### 属性
| 属性 | 描述 |
| ---- | ---- |
| altKey | 返回当事件被触发时，"ALT" 是否被按下 |
| ctrlKey | 返回当事件被触发时，"CTRL" 是否被按下 |
| shiftKey | 返回当事件被触发时，"SHIFT" 是否被按下 |
| button | 返回当事件被触发时，哪个鼠标按钮被点击 |
| clientX | 返回当事件被触发时，鼠标指针的水平坐标 |
| clientY | 返回当事件被触发时，鼠标指针的垂直坐标 |
| Location | 返回按键在设备上的位置 |
| charCode | 返回onkeypress事件触发键值的字母代码 |
| key | 在按下按键时返回按键的标识符 |
| screenX | 返回当某个事件被触发时，鼠标指针的水平坐标 |
| screenY | 返回当某个事件被触发时，鼠标指针的垂直坐标 |
###### 方法
| 方法 | 描述 |
| ---- | ---- |
| initMouseEvent() | 初始化鼠标事件对象的值 |
| initKeyboardEvent() | 初始化键盘事件对象的值 |

### 字符串
`字符串长度，用内置属性 length 来计算`
#### 特殊字符
| 代码 | 输出 |
| ---- | ---- |
| \n | 换行 |
| \r | 回车 |
| \" | 双引号 |
#### 字符串方法
| 方法 | 描述 |
| ---- | ---- |
| charAt() | 返回指定索引位置的字符 |
| concat() | 连接两个或多个字符串，返回连接后的字符串 |
| indexOf() | 返回字符串中检索指定字符第一次出现的位置 |
| match() | 找到一个或多个正则表达式的匹配 |
| replace() | 替换与正则表达式匹配的子串 |
| search() | 检索与正则表达式相匹配的值 |
| slice() | 提取字符串的片断，并在新的字符串中返回被提取的部分 |
| split() | 把字符串分割为子字符串数组 |
| substr() | 从起始索引号提取字符串中指定数目的字符 |
| substring() | 提取字符串中两个指定的索引号之间的字符 |
| toLowerCase() | 字符串转换为小写 |
| toUpperCase() | 字符串转换为大写 |
| toString() | 返回字符串对象值 |
| trim() | 移除字符串首尾空白 |
| valueOf() | 返回某个字符串对象的原始值 |

### 类型转换
| 方法 | 描述 |
| ---- | ---- |
| String() | 转换为字符串并返回 |
| toString() | 转换为字符串并返回 |
| toFixed() | 把数字转换为字符串，结果的小数点后有指定位数的数字 |
| Number() | 字符串转数字 |
| parseFloat() | 解析一个字符串，并返回一个浮点数 |
| parseInt() | 解析一个字符串，并返回一个整数 |

### 日期
| 方法 | 描述 |
| ---- | ---- |
| getFullYear() | 从 Date 对象以四位数字返回年份 |
| getMonth() | 从 Date 对象返回月份 (0 ~ 11) |
| getDate() | 从 Date 对象返回一个月中的某一天 (1 ~ 31) |
| getDay() | 从 Date 对象返回一周中的某一天 (0 ~ 6) |
| getHours() | 返回 Date 对象的小时 (0 ~ 23) |
| getMinutes() | 返回 Date 对象的分钟 (0 ~ 59) |
| getSeconds() | 返回 Date 对象的秒数 (0 ~ 59) |
```
获取时间：new Date()
设置日期：myDate.setDate(myDate.getDate()+5);  get > set
```

## 正则
```
/正则表达式主体/修饰符(可选)
```
### 修饰符
| 修饰符 | 描述 |
| ---- | ---- |
| i | 执行对大小写不敏感的匹配 |
| g | 执行全局匹配 |
| m | 执行多行匹配 |
### 模式
| 表达式 | 描述 |
| ---- | ---- |
| [abc] | 查找方括号之间的任何字符 |
| [0-9] | 查找任何从 0 至 9 的数字 |
| (x|y) | 查找任何以 | 分隔的选项 |

| 元字符 | 描述 |
| ---- | ---- |
| \d | 查找数字 |
| \s | 查找空白字符 |
| \b | 匹配单词边界 |

| 量词 | 描述 |
| ---- | ---- |
| n+ | 匹配任何包含至少一个 n 的字符串 |
| n* | 匹配任何包含零个或多个 n 的字符串 |
| n? | 匹配任何包含零个或一个 n 的字符串 |
`使用：reg.test() => true|false   ||  reg.exec() => 输出匹配字符`

## JSON
| 函数 | 描述 |
| ---- | ---- |
| JSON.parse() | 用于将一个 JSON 字符串转换为 JavaScript 对象 |
| JSON.stringify()  | 用于将 JavaScript 值转换为 JSON 字符串 |

## 函数
### 参数
```js
// arguments 为传入的参数数组
function findMax() {
    var argu = arguments;
}
```
### 构造函数
```js
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
// 创建一个新对象
var x = new myFunction("John","Doe");
x.firstName;  // 返回 "John"
```
### 闭包
```js
// 内嵌函数
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}

// 闭包 （自运行）
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
//计数器受匿名函数的作用域保护，只能通过 add 方法修改
```

## JS HTML
### DOM
+ getElementById、getElementsByTagName、getElemensByClassName 
+ 写入内容（innerHTML）：document.getElementById(id).innerHTML=新的 HTML
+ 属性(src...)：document.getElementById(id).attribute=新属性值
+ 样式(style.color)：document.getElementById(id).style.property=新样式
### EventListener
``` 
语法 
addEventListener: element.addEventListener(event, function, useCapture);
removeEventListener: element.removeEventListener("mousemove", myFunction);
```
```js
// click、mouseover、mouseout
document.getElementById("myBtn").addEventListener("click", displayDate);

// resize
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = sometext;
});

// 兼容
var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // 所有主流浏览器，除了 IE 8 及更早版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
    //element.detachEvent(event, function); 移除
}
```
### DOM 元素（节点）
```js
// createElement、createTextNode、appendChild(添加在尾部)、insertBefore(添加在头部)、removeChild(移除)、parentNode(父节点)、replaceChild(替换)
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
 
var element = document.getElementById("div1");
element.appendChild(para);
```
### NodeList
```js
// 所有浏览器的 childNodes 属性返回的是 NodeList 对象。
// 大部分浏览器的 querySelectorAll() 返回 NodeList 对象。
var myNodeList = document.querySelectorAll("p");
```

## 对象构造器(constructor)
```js
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}

var myFather=new person("John","Doe",50,"blue");
var myMother=new person("Sally","Rally",48,"green");
```

## prototype(原型对象) 
### 继承、添加属性和方法
```js
// 所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法
// Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承

// 继承属性  
// 给对象的构造函数添加新的属性
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";

// 继承方法
// 给对象的构造函数添加新的方法
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

## 数组
| 方法 | 描述 |
| ---- | ---- |
| concat() | 合并数组 *新 |
| join() | 用数组的元素组成字符串 *新 |
| pop() | 删除数组的最后一个元素 *改 |
| push() | 在数组的末尾添加新的元素 *改 |
| reverse() | 数组中的元素顺序反转排序 *改 |
| shift() | 删除数组的第一个元素 *改 |
| unshift() | 在数组的开头添加新元素（IE8） *改 |
| slice() | 截取数组的元素 *新 |
| sort() | 截取数组的元素 *改 |
| splice() | 在数组的指定位置添加元素 *改 |
| toString() | 数组转字符串 *新 |

```js
// 字母排序
var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.sort();

// 数字排序
var points = [40,100,1,5,25,10];
	points.sort(function(a,b){return a-b}); // 升序
    // points.sort(function(a,b){return b-a}); //降序

// ES6
// 去重
[...new Set([2,1,2,2,2,167,4,3,32,2,1])]
``` 

## 算数
+ random() 返回 0 - 1 之间的随机数
+ max() 返回给定数中的较大数
+ min() 返回给定数中的较小数

# 浏览器 BOM

~~~






