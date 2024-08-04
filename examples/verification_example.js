let mysql = require("mysql");
let config = {
    host    : 'localhost',
    user    : 'neel',
    password: 'home1234',
    database: 'school'
};

let title = "node ".trim();
let authorID =  500;
let bol = true;

function varchar(a){
    if(((typeof(a) === "string" && a.length > 0 ) || (typeof(a) === "number" && !isNaN(a))) && !null ) {
        return true;
    }else{
       return false;
    }
};
function numb(a){
    if((typeof(a) === "number" && !isNaN(a)) && !null ) {
        return true;
    }else{
       return false;
    }
};

function bool(a){
    if(typeof(a) === "boolean" && !null ) {
        return true;
    }else{
       return false;
    }
};

if(varchar(title) === true && numb(authorID) === true && bool(bol) === true){

    let conn = mysql.createConnection(config);
    conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
    console.log('Inserting Data.');          
    
    conn.query(
        `INSERT INTO books(Title, AuthorID) values(?,?) ON DUPLICATE KEY UPDATE 
        Title = "${title}", AuthorID = ${authorID}`, [ title, authorID ],
        function (err) {
            if (err) {
                return console.log('error:' + err.message);
              }
              console.log('Insertion successful');
        }
    );

    conn.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });
    });
} else {
    console.log("type of input is wrong");
}