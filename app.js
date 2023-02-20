const http = require("http");
const server = http.createServer((request,response)=>{
        if (request.url === '/') {
                response.write("Shahin Bashar");
                response.end();
        }
});
server.listen(3000);