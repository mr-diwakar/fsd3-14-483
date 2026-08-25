import http from "http"
const server= http.createServer((req,res)=>{
    console.log("welcome to node js");
});

server.listen(5000,()=>{
    console.log("server is running");
});