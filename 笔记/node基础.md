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

- stringify 
  - JSON 的常规用途是同 web 服务器进行数据交换。在向 web 服务器发送数据时，数据必须是字符串。通过 JSON.stringify() 把JavaScript 对象转换为字符串。
  - 从 Javascript 对象创建 JSON 字符串 
  - var obj = { name: "Bill", age: 62, city: "Seatle" };
  - {"name":"Bill","age":62,"city":"Seatle"}
- parse
  - 功能相反