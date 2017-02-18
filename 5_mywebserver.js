/**可以给客户端提供响应内容的Web服务器**/
var http = require('http');

//创建一个服务器对象
var server = http.createServer();

//当服务器接收到HTTP请求会触发的事件
server.on('request', function(request,response){
  console.log('Web服务器接收到一个客户端请求...');
  //设置响应状态码
  response.statusCode = 200;
  //设置响应消息投币
  response.setHeader('Content-Type','text/html;charset=UTF-8');
  //向客户端输出响应主体，等同于PHP中的echo函数
  response.write('<html>');
  response.write('  <body>');
  response.write('    <h1>欢迎访问我的页面</h1>');
  response.write('  </body>');
  response.write('</html>');
  response.end();  //输出完毕
});

//启动Web服务器
server.listen(8000,function(){
  console.log('Web服务器开始监听8000端口...');
});