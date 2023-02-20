// const http = require("http");
const express = require('express')
const app = express()
const fs = require("fs");
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello Shahin!')
});
app.get('/students', (req, res) => {
 fs.readFile("./db.json","utf-8",(err,data)=>{
                res.send(data);
        });
      });

app.post('/students',(req,res)=>{
        const student = req.body;
        fs.readFile("./db.json","utf-8",(err,data)=>{
                const students = JSON.parse(data);
                console.log(students.students);
                students.students.push(student);
                fs.writeFile("./db.json",JSON.stringify(students),(err)=>{
                        res.send(student);
                });
        });
       
});
// const server = http.createServer((request,response)=>{
//         if (request.url === '/') {
//                 response.write("Shahin Bashar");
//                 response.end();
//         }
// });
app.listen(3000,()=>{
        console.log("Listening on 3000 Port");
});