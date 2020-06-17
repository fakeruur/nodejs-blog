const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { set } = require('../db/redis')


const handleUserRouter = (req, res) => {
  const method = req.method//GET POST


  //登录
  if (method === 'POST' && req.path === '/api/user/login') {
    // const { username, password } = req.query
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {

        //设置session
        req.session.username = data.username
        req.session.realname = data.realname
        //同步到redis中
        set(req.sessionId, req.session)

        return new SuccessModel('登录成功')
      }
      return new ErrorModel('登录失败')
    })
  }


}

module.exports = handleUserRouter