let mysql = require('mysql');

let config = {
    host    : 'localhost',
    user    : 'neel',
    password: 'home1234',
    database: 'school'
  };

let conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
    console.log('Inserting Data.');          
    const sql = `select * from student where Enroll = 177`;    
    conn.query(sql, function (err, results) {
            if (err) {
                return console.log('This is my error:' + err.message);
              }
              console.log(results);
        }
    );

    conn.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });
  });
  
