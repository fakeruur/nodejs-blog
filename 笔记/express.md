## 使用 express 框架
### 安装
- npm install express-generator -g  (脚手架)
- express 名字 （生成模板）
- npm install  （安装）
- npm start  （运行）
### 安装 mysql xss 
- npm i mysql redis xss --save
### 直接安装
- npm i express
### 中间件
- 注册一些函数，在访问完成前执行（例如登录验证、中间件其是一个函数，在响应发送之前对请求进行一些操
- 一个请求发送到服务器后，它的生命周期是 先收到request（请求），然后服务端处理，处理完了以后发送response（响应）回去而这个服务端处理的过程就有文章可做了，想象一下当业务逻辑复杂的时候，为了明确和便于维护，需要把处理的事情分一下，分配成几个部分来做，而每个部分就是一个中间件
- app.use 加载用于处理http请求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。中间件执行的顺序是你定义的顺序

## 登录插件
- express-session 和 connect-redis
- req.session保存登录信息，登录校验做成中间件

## 日志
- access log记录，使用脚手架推荐的Morgan
  - https://github.com/expressjs/morgan
  - Predefined Formats 日志输出格式
- 自定义日志使用console.log console.error

## 中间件的原理
- lib/express/like-express