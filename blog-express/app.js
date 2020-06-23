var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fs = require('fs')
var cookieParser = require('cookie-parser'); //解析 cookie
var logger = require('morgan'); //用来生成日志，需要配置
const session = require('express-session')
const redisStore = require('connect-redis')(session) //用来连接redis session

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

var app = express(); //实例化

// view engine setup 静态文件，前端网页
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 写日志
const ENV = process.env.NODE_ENV //判断运行环境
if (ENV !== 'production') {
  // 开发环境 、测试环境
  app.use(logger('dev',));
} else {
  //线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(logger('combined', {
    stream: writeStream // 默认标准输出（默认添加的）
  }));
}

app.use(express.json()); // 处理post data，直接付给body---解析json格式
app.use(express.urlencoded({ extended: false })); //同上，设置body数据格式，解析urlencoded格式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//把 session 设置到 Redis 中
const redisClient = require('./db/redis')
const sessionStore = new redisStore({
  client: redisClient
})
//用来解析session
app.use(session({
  secret: 'LiHui#$%54321.',//密钥，设置sessionID
  cookie: {
    // path: '/',//默认配置
    // httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}))

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter)
app.use('/api/user', userRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
