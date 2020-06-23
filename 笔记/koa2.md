## koa2
### async/await
- async 函数返回的也是一个promise对象
- try-catch 截获 promise 中 reject 的值
### koa2
- 安装流程
  - npm install koa-generator -g
  - koa2 koa2-test
  - npm install
  - npm run dev
- 其他
  - mysql Redis xss
### 实现登录
- koa-generic-session
- koa-redis
### 路由
- 复用之前点代码，mysql，登录中间件，controller，model
- 初始化路由，开发接口
### 日志
- access log 记录， 使用 morgan
  - npm i koa-morgan --save
- 自定义日志使用 console.log 和 console.error
### 中间件
- koa官网 实例
- 洋葱圈模型