// // fs
// const fs = require("fs");
// fs.mkdir("./dddd",(err)=>{
//     if(err) throw err
// });
// console.log("make dir success");
// fs.writeFileSync("fs_test.txt","Success write");
// console.log("Write file success");
// fs.cp("./fs_test.txt","./dddd",(err)=>{
//     if(err) throw err
// });

// // date
// console.log(mydate());

// // imported own modules
// var { mydate, add} = require('./export_module');
// var oper = require('./export_module');
// console.log(add(10,5));
// console.log(oper.sub1(10,5));

// // email validator
// var validator = require("validator");
// const result = validator.isEmail("neel@gmailgg");
// console.log(`email is ${result}`);

// //http and url
// const http = require('http');
// const url = require('url');
// const server = http.createServer((req,res) => {
//     if(req.url === "/"){
//         res.writeHead(200);
//         res.end("Welcome to the HOME page");
//     }else if(req.url === "/aboutus") {
//         res.writeHead(200);
//         res.end("Welcome to the ABOUT US page");
//     }else {
//         res.writeHead(404, {"Content-type":"text/html"});
//         res.end("404 Page not found :(");
//     }
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the localhost 8000 port");
// });

// // object to json/ json to object
// const fs = require("fs");
// const detail = {
//     name : "neel",
//     age : 23
// };
// const json = JSON.stringify(detail);
// console.log("Object to json completed");
// fs.writeFile("./obj_json.json",json, (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(" json file created");
// });
// console.log(json);
// fs.readFile("./obj_json.json","UTF-8",(err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Json file read successfully");
//     const obj = JSON.parse(data);
//     console.log("Json to object converted");
//     console.log(obj);
// });

// events
const EventEmitter = require("events");
const event = new EventEmitter();
// First listener
event.on("test_event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
event.on("test_event",(arg1, arg2) => {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
event.on("test_event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});
// console.log(myEmitter.listeners('test_event'));
event.emit("test_event", "Ram", 2, 3, 4, 5);