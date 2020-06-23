## http请求概述
- DNS解析，建立TCP连接(三次握手)，发送HTTP请求
- server接受到HTTP请求，处理，返回
- 客户端接收到返回数据，处理数据
## 搭建开发环境
- nodemon监测文件变化，自动重启node
  - npm i --save-dev nodemon
- 使用 cross-env设置环境变量
  - npm i --save-dev cross-env
- 配置
  - npm init -y 初始化
  - npm i mysql
- package
```js
  "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
  "prd":"cross-env NODE_ENV=production nodemon ./bin/www.js"
```
## 淘宝
- --registry=https://registry.npm.taobao.org
## node 
- 基本语法
  - fs 文件操作
  - path 操作文件路径
  - fullfilename = path.resolve(__dirname,'files','a.json')---当前目录，文件夹，文件—---获取路径
  - fs.readFile(fullfilename)---读取文件

- JSON.parse()和JSON.stringify()
- parse用于从一个字符串中解析出json对象,如
  - var str = '{"name":"huangxiaojian","age":"23"}'
  - console.log(JSON.parse(str))//Object {name: "huangxiaojian", age: "23"}
  - 注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。
- stringify()用于从一个对象解析出字符串，如
  - var a = {a:1,b:2}
  - console.log(JSON.stringify(a))//{"a":1,"b":2}
## HTTP
- 不要混淆 session 和 session 实现。  
- 本来 session 是一个抽象概念，开发者为了实现中断和继续等操作，将 user agent 和 server 之间一对一的交互，抽象为“会话”，进而衍生出“会话状态”，也就是 session 的概念。  
- 而 cookie 是一个实际存在的东西，http 协议中定义在 header 中的字段。可以认为是 session 的一种后端无状态实现。  
- 而我们今天常说的 “session”，是为了绕开 cookie 的各种限制，通常借助 cookie 本身和后端存储实现的，一种更高级的会话状态实现。  
- 所以 cookie 和 session，你可以认为是同一层次的概念，也可以认为是不同层次的概念。具体到实现，session 因为 session id 的存在，通常要借助 cookie 实现，但这并非必要，只能说是通用性较好的一种实现方案。

