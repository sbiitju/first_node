const fs = require("fs");
const getStudents =()=>{
        return new Promise((resolve,reject)=>{
                fs.readFile("./db.json","utf-8",(err,data)=>{
                        const students = JSON.parse(data);
                        resolve(students);
                });
        })
} 

const postStudent= (student)=>{
        return new Promise((resolve,reject)=>{
                 getStudents().then(students=>{
                students.students.push(student);
                        fs.writeFile("./db.json",JSON.stringify(students),(err)=>{
                                resolve(student);
                        });
                        
                 });

        });
}
module.exports.getStudents = getStudents
module.exports.postStudent = postStudent