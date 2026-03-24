const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const mimeTypes = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon','.json':'application/json','.woff2':'font/woff2'};
http.createServer((req,res)=>{
  let p = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(dir, p);
  fs.readFile(fp,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    let ext = path.extname(fp).toLowerCase();
    res.writeHead(200,{'Content-Type':mimeTypes[ext]||'application/octet-stream'});
    res.end(data);
  });
}).listen(3456, ()=>console.log('Server running on port 3456'));
