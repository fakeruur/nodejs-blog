const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser') //body
const logger = require('koa-logger') //日志开发环境下，控制台打印更好看

const session = require('koa-generic-session')
const redisStore = require('koa-redis')

//日志
const path = require('path')
const fs = require('fs')
const morgan = require('koa-morgan')

const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')
const user = require('./routes/user')

const { REDIS_CONF } = require('./conf/db')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  // post data
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public')) //页面有关

app.use(views(__dirname + '/views', { //页面有关
  extension: 'pug'
}))

// logger 当前服务请求的耗时
app.use(async (ctx, next) => {
  const start = new Date() //请求来的时间
  await next() // 去执行其他
  const ms = new Date() - start // 执行完时间-到来时间
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


const ENV = process.env.NODE_ENV //判断运行环境

if (ENV !== 'production') {
  // 开发环境 、测试环境
  app.use(morgan('dev',)); //写在控制台
} else {
  //线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(morgan('combined', {
    stream: writeStream // 默认标准输出（默认添加的）
  }))
}

// session 配置
app.keys = ['LiHui#$%123']
app.use(session({
  //配置 cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  //配置 redis
  store: redisStore({
    // all: '127.0.0.1:6379'  测试时，写死的
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
