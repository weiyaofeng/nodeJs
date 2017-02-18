/**动态Web服务器**/
var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

var server = http.createServer(); //创建Web服务器
server.on('request', doRequest);  //监听客户端请求事件
server.listen(8000);  //启动Web服务器

//处理客户端的HTTP请求
function doRequest(request, response){
  console.log('Web服务器接收到一个客户端请求...');
  var urlInfo = url.parse(request.url,true);
  
  //请求的URL的文件名后缀，如.html、.do等
  var urlSuffix = urlInfo.pathname.substring( urlInfo.pathname.lastIndexOf('.') );
  
  if(urlSuffix==='.do'){  //以.do结尾的动态请求
    doDynamicRequest();
  }else { //非.do结尾的静态请求
    doStaticRequest();
  }

  function doStaticRequest(){ //处理静态请求，如.html、.css、.js等，直接读取指定的文件内容，发送给客户端即可
    var fileName = './htdocs'+urlInfo.pathname;
    fs.readFile(fileName, function(err,data){
      response.write(data);
      response.end();
    })
  }
  function doDynamicRequest(){ //处理动态请求，如.do
      if(urlInfo.pathname==='/register.do'){//注册新用户
      //读取客户端提交的数据
      var uname = urlInfo.query.uname;  
      var upwd = urlInfo.query.upwd; 
      //连接数据库
      var conn = mysql.createConnection({
        host    :   '127.0.0.1',
        user    :   'root',
        password:   '',
        database:   'jd'  
      });
      //提交SQL语句
      var sql=`INSERT INTO users VALUES(NULL,'${uname}','${upwd}')`;  //ES6新特性
      conn.query(sql,function(err,data){
        if(data.affectedRows===1){ //执行成功
          response.write('<h3>REGISTER SUCC!</h3>');
        }else {
          response.write('<h3>REGISTER FAIL!</h3>');
        }
        response.end();
        conn.end();
      });
    }else if(urlInfo.pathname==='/login.do'){
    
    }
  }
}





