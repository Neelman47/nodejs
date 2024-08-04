const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

const contact = [
    {id: 1, name: "name1" },
    {id: 2, name: "name2" },
    {id: 3, name: "name3" }
];

const pathhtml = path.join(__dirname,"/html");
app.use(express.static(pathhtml)); //built in middleware express.static

app.get('/',(req,res) => {
    // res.write("<h1>Neel</h1>");
    // res.write('hello from neel');
    res.redirect('https://www.google.com/');
});

app.get('/about',(req,res) => {
    res.send([1,2,3,4,5,6]);
});
app.get('/contact',(req,res) => {
    res.send(contact);
});
app.get('/contact/:customerid',(req,res) => {
   const idn = contact.find(c => c.id === parseInt(req.params.customerid));
   if (!idn) res.status(404).send("no contact id found");
   res.send(idn);
});
app.get('/date/:year/:month/:date',(req,res) => {
    res.send(req.params);
});
app.get('/queryString/:id',(req,res) => {
    res.send(req.query);
});
app.get('*',(req,res) => {
    res.status(404).send('wrong turn');
});


app.listen(port, () => {
    console.log(`Listeninig on port ${port}`);
});