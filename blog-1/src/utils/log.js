const fs = require('fs')
const path = require('path')

//写日志
function writeLog(writeStream, log) {
  writeStream.write(log + '\n')
}

//生成 write Stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a'
  })
  return writeStream
}
// 输入流
// 写访问日志
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  //还可判断 开发还是线上环境 决定是否写入
  writeLog(accessWriteStream,log)
}

module.exports = {
  access
}