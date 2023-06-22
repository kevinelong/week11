var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S!mpl312",
  database: 'blog'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    sql=`
        SELECT * FROM author;
    `;
    
    con.query(sql, function (err, result) {
      if (err) throw err;
    //   console.log("Result: " + result[0].first);
      result.forEach(item => console.log(item.id, item.last, item.first))
    });

  }); 