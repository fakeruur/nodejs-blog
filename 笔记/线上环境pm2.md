## 线上环境
- 要求
  - 服务器稳定性
  - 充分利用服务器硬件资源
  - 线上日志记录
## PM2
- 功能
  - 进程守护，系统崩溃自动重启
  - 启动多进程，充分利用cpu和内存
  - 自带日志记录功能
- 基本知识
   - 下载
    - npm i pm2 -g
  - 使用
    - "prd": "cross-env NODE_ENV=production pm2 start app.js"
  - pm2 常用命令
    - pm2 start, pm2 list
    - pm2 restart <AppNmae>/<id>
    - pm2 stop <AppNmae>/<id>, pm2 delete <AppNmae>/<id>
    - pm2 info <AppNmae>/<id>
    - pm2 log <AppNmae>/<id>
    - pm2 monit <AppNmae>/<id>
- 进程守护
  - pm2 遇到进程崩溃会自动重启
- 配置
  - pm2.conf.json
- 多进程
  - 操作系统会限制一个进程的最大可用内存
  - 无法利用多核CPU的优势
  - 多进程之间，内存无法共享
  - 多进程访问一个 Redis ，实现数据共享
