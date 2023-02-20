// const http = require("http");
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello Shahin!')
})
// const server = http.createServer((request,response)=>{
//         if (request.url === '/') {
//                 response.write("Shahin Bashar");
//                 response.end();
//         }
// });
app.listen(3000,()=>{
        console.log("Listening on 3000 Port");
});