/**
静态Web服务器：
解析客户端请求url，
读取对应的HTML文件，
发送给客户端
**/
var http = require('http');
var url = require('url');
var fs = require('fs');

//创建一个服务器对象
var server = http.createServer();

//当服务器接收到HTTP请求会触发的事件
server.on('request', function(request,response){
  console.log('Web服务器接收到一个客户端请求...');
  //1 解析出客户端请求的URL
  var urlInfo = url.parse( request.url );
  var fileName = urlInfo.pathname;
  fileName = './htdocs'+fileName;
  console.log('客户端要请求的文件：'+fileName);
  //2 读取客户端请求的文件的内容
  fs.readFile(fileName,function(err,data){
    //3 向客户端输出HTML响应内容
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    response.write(data); //输出响应主体
    response.end();
  })
  

});

//启动Web服务器
server.listen(8000,function(){
  console.log('Web服务器开始监听8000端口...');
});