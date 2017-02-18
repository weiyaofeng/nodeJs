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
var sql = "INSERT INTO users VALUES(NULL,'scott','000')";
conn.query(sql, function(err,data){
  console.log('执行完成....');
  //console.log(data);
  console.log('SQL语句影响的行数：'+data.affectedRows);
  console.log('INSERT产生的自增编号：'+data.insertId);
  conn.end();   //断开与MySQL服务器的连接
});