// const http = require("http");
const express = require('express')
const app = express()
const fs = require("fs");
app.use(express.json());
const db = require("./db");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello Shahin!')
});
app.get('/students', (req, res) => {
        db.getStudents().then(students=>{
                res.send(students);
        });
      });

app.post('/students',(req,res)=>{
        const student = req.body;
        db.postStudent(student).then(s=>{
                res.send(s);
        })       
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