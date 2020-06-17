## nginx
- C:\server\nginx-1.0.2>start nginx 
- nginx.exe -s stop 
  - nginx.exe -s quit
  - stop是快速停止nginx，可能并不保存相关信息；quit是完整有序的停止nginx，并保存相关信息。 
- nginx.exe -s reload
  - 当配置信息修改，需要重新载入这些配置时使用此命令。 
- nginx.exe -s reopen  重新打开日志文件
- 测试配置文件:nginx.exe -t -c conf/default.conf
- 载入指定配置文件:start nginx.exe -c conf/default.conf
```js
	location / {
    // html
		proxy_pass: http://localhost:8001;
    }
    // nodejs
		location /api/ {
		proxy_pass: http://localhost:8000;
		proxy_set_header Host $host
		}
```

## http-serve Port:8001

- http-serve -p 8001
```
  http://192.168.137.1:8001
  http://192.168.0.35:8001
  http://127.0.0.1:8001
```