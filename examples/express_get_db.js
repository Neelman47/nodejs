const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let mysql = require("mysql");

app.get("/", (req, res) => {
  res.write("<h1>Neel</h1>");
  res.write("hello from neel");
  res.send();
});

app.get("/show/:customerid", (req, res) => {
  const id = req.params.customerid;
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
    console.log("Finding records...");
    const sql = `select * from student where Enroll = ${id}`;
    conn.query(sql, function (err, results) {
      if (err) {
        res.send("my error : " + err);
      } else if (results.length > 0) {
        res.send(results);
      } else {
        res.send("<h1>No record found</h1>");
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

app.get("/showAll", (req, res) => {
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
    console.log("Finding records...");
    const sql = `select * from student`;
    conn.query(sql, function (err, results) {
      if (err) {
        res.send("my error : " + err);
      } else if (results.length > 0) {
        res.send(results);
      } else {
        res.send("<h1>Table is empty</h1>");
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
  res.status(404).send("Kindly go to http://127.0.0.1:3000/contact/id");
});

app.listen(port, () => {
  console.log(`Listeninig on port ${port}`);
});
