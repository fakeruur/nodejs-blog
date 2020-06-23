var express = require('express');
var router = express.Router();
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      //设置session
      req.session.username = data.username
      req.session.realname = data.realname

      res.json(new SuccessModel('登录成功')) 
      return
    }
    res.json(new ErrorModel('登录失败')) 
  })
});

// router.get('/login-test',(req,res,ext)=>{
//   if (req.session.username) {
//     res.json({
//       errno:0,
//       msg: 'success'
//     })
//      return
//   }
//  res.json({
//    errno:-1,
//    msg:'faile'
//  })
// })
module.exports = router;