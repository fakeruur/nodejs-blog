const crypto = require('crypto') //crypto模块的目的是为了提供通用的加密和哈希算法。

//密钥
const SECRET_KEY = 'lihui-114415#$%'
// md5 加密
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}
//加密函数
function genPassword(password) {
  const str = `${password}--&&--${SECRET_KEY}`
  return md5(str)
}
module.exports = {
  genPassword
}
