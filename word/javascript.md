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
| getFullYear() | 从 Date 对象以四位数字返回年份 |
| getMonth() | 从 Date 对象返回月份 (0 ~ 11) |
| getDate() | 从 Date 对象返回一个月中的某一天 (1 ~ 31) |
| getDay() | 从 Date 对象返回一周中的某一天 (0 ~ 6) |
| getHours() | 返回 Date 对象的小时 (0 ~ 23) |
| getMinutes() | 返回 Date 对象的分钟 (0 ~ 59) |
| getSeconds() | 返回 Date 对象的秒数 (0 ~ 59) |
| Number() | 字符串转数字 |
| parseFloat() | 解析一个字符串，并返回一个浮点数 |
| parseInt() | 解析一个字符串，并返回一个整数 |
```
获取时间：new Date()
```












