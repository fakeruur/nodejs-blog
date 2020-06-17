const fs = require("fs") //文件操作的库
const path = require("path") //路径库

const fileName = path.resolve(__dirname, 'data.txt') //当前目录下，处理路径

//读取文件内容
fs.readFile(fileName,(err,data)=>{
  if (err) {
    console.log(err);
    return
  }
  //data 是二进制类型，需转换为字符串
  console.log(data.toString());
  
})

//写入文件
const content = '新写入的内容\n'
const opt ={
  flag:'a' //追加写入，w为覆盖写入
}

fs.writeFile(fileName,content,opt,(err)=>{
  if (err) {
    console.log(err);
    return
  }
})

//判断文件是否存在
fs.exists(fileName,(exist)=>{
  console.log(exist);
  
})