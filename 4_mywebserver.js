/**使用HTTP模块创建WEB服务器**/
var http = require('http');
//console.log(http);

//使用HTTP模块创建web服务器
var server = http.createServer();

//为服务器的“被客户端请求”事件绑定处理方法
server.on('request',
function(request,response){
  console.log('Web服务器接收到一个请求：');
  console.log(request.method);
  console.log(request.url);
  console.log(request.httpVersion);
  console.log(request.headers);
  //给客户端响应消息
});

//启动Web服务器——让她监听一个特定的端口
server.listen(8000, function(err){
  if(err){
    console.log('Web服务器启动失败：');
    console.log(err);
  }else {
    console.log('Web服务器启动成功！');
    console.log('正在监听8000端口...');
  }
});