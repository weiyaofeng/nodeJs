/**查询MySQL数据库中的数据**/
var mysql = require('mysql');
//console.log(mysql);

//连接到MySQL服务器
var conn = mysql.createConnection({
  host      :   '127.0.0.1',
  user      :   'root',
  password  :   "",
  database  :   'jd'
});

//提交SQL语句给MySQL服务器执行
var sql = "SELECT * FROM users";
conn.query(sql, function(err,rows){
  console.log('查询完成....');
  //console.log(rows);
  for(var i=0; i<rows.length; i++){
    var user = rows[i];  //取出第i行
    console.log(user.uid +'  '+ user.uname+'  '+user.upwd);
  }
  conn.end();   //断开与MySQL服务器的连接
});