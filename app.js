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


app.get("/students/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        db.getStudents().then(students => {
                const student = students.students.find( s => s.id ===id);
                if(!student) res.status(404).send("No Data Found");
                else{
                        res.send(student);
                }
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