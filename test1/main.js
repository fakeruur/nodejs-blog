const http = require('http')
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    console.log(req.headers['content-type']);
    
    let postData = ""
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log(postData);
      res.end('hello,world')
    })
  }
})
server.listen(8000)
console.log('ok')

// const http=require('http')
// const querystring = require('querystring')

// const server=http.createServer((req,res)=>{
//   console.log(req.method);
//   const url=req.url
//   console.log(url);
//   req.query=querystring.parse(url.split('?')[1])
//   res.end(
//     JSON.stringify(req.query)
//   )
  
  
// })
// server.listen(8000)
// console.log('ok');
