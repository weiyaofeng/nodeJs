//使用一个NodeJS提供的模块对象
var url = require('url'); 
//console.log( url );//该模块中提供了五个函数对象

//解析一个URL字符串中的各个部分
var str = "http://www.tmooc.cn:80/news/1.html?uname=tom&upwd=123#chapter2";
/*
var result = url.parse( str );
//console.log(result);
console.log(result.query);
*/

//true：把query字符串解析为对象形式
var result = url.parse( str, true );
//console.log(result);
console.log(result.query.uname);
console.log(result.query.upwd);