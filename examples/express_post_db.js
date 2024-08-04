const express = require("express");
let mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.write("Hello from <h1>Neel</h1>"); 
  res.send();
});

app.post("/", (req, res) => { 
  const sn = req.body.SName;
  const fb = req.body.Fav_book;
  const bg = req.body.BloodGroup;

  let config = {
    host: "localhost",
    user: "neel",
    password: "home1234",
    database: "school",
  };

  let conn = mysql.createConnection(config);

  conn.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
    const sql = `insert into student(SName, Fav_book, BloodGroup) values("${sn}","${fb}","${bg}")`;

    conn.query(sql, function (err, results) {
      if (err) {
        res.send("my error : " + err);
      } else {
        res.send("data inserted successfully!");
      }
    });

    conn.end(function (err) {
      if (err) {
        return console.log("error:" + err.message);
      }
      console.log("Close the database connection.");
    });
  });
});

app.post("/update/", (req, res) => { 
    const er = parseInt(req.body.Enroll);    
    const sn = req.body.SName;
    const fb = req.body.Fav_book;
    const bg = req.body.BloodGroup;
  
    let config = {
      host: "localhost",
      user: "neel",
      password: "home1234",
      database: "school",
    };
  
    let conn = mysql.createConnection(config);
  
    conn.connect(function (err) {
      if (err) {
        return console.error("error: " + err.message);
      }
  
      console.log("Connected to the MySQL server.");
      const sql = `update student set SName = "${sn}", Fav_book = "${fb}", BloodGroup = "${bg}" where Enroll = ${er}`;
  
      conn.query(sql, function (err, results) {
        if (err) {
          res.send("my error : " + err);
        } else {
          res.send(`Stundent ID : ${er} data updated successfully!`);
        }
      });
  
      conn.end(function (err) {
        if (err) {
          return console.log("error:" + err.message);
        }
        console.log("Close the database connection.");
      });
    });
  });

app.get("*", (req, res) => {
  res.status(404).send("Kindly go to http://127.0.0.1:3000/");
});

app.listen(port, () => {
  console.log(`Listeninig on port ${port}`);
});