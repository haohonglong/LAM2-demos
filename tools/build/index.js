import { createServer } from 'node:http';
import fs from 'node:fs';
import querystring from 'node:querystring';



function writeFile(path, content, res) {
  fs.writeFile(path, content, err => {
    if (err) {
      console.error('写入文件时发生错误:', err);
      res.statusCode = 500;
      res.end('内部服务器错误');
    } else {
      res.statusCode = 200;
      const jsonResponse = {
        msg: '数据已被写入文件',
        status: 0
      };
     
      
      res.end(JSON.stringify(jsonResponse));
    }
  });

}

let visitorCount = 0;

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By","3.2.1");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if (req.method === 'POST') {
    let body = [];
      req
        .on('data', chunk => {
          body.push(chunk);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
          if (req.headers['content-type'].startsWith('application/json')) {
            try {
              const params = JSON.parse(body);
              // 处理POST参数
              console.log('application/json');
              console.log(params);
            } catch (e) {
              console.error(e);
            }
          } else if (req.headers['content-type'].startsWith('application/x-www-form-urlencoded')) {
            const params = querystring.parse(body);
            const path = params['path'];
            const suffix = params['suffix'];
            const content = params['content'];
            // 处理POST参数
            console.log(visitorCount++);
            writeFile(path+suffix, content, res);
          } else {
            // 其他内容类型的处理...
          }

        });
  } else {
    res.statusCode = 405;
    res.end('请使用POST方法');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}/`);
});
