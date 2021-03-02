var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passsqlmy",
  database: "wacustica"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "CREATE TABLE product (id INT, name VARCHAR(55), description VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});