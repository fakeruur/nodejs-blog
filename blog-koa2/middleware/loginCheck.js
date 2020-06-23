const { ErrorModel } = require("../model/resModel")

//登录验证的 中间件
module.exports = async (ctx, next) => {
  if (ctx.session.username) {
    await next()
    return
  }
  ctx.body = new ErrorModel('未登录')
}