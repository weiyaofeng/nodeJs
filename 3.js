/**使用fs模块操作文件**/
var fs = require('fs');
//console.log(fs);  //提供了几十个函数和对象

//读取一个指定文件中的所有内容
fs.readFile('./htdocs/1.html', 
  function(err,data){
    if(err){
      console.log('文件读取过程发生错误：');
      console.log(err);
    }else {
      console.log('文件读取完成：');
      //console.log(data);//Buffer 数据缓冲区
      console.log(data.toString()); //把缓冲区中的内容转换为字符串
    }
});
