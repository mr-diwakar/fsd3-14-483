import http from "http";
import {createReadstream} from "fs";
const server=http.createServer(async(req,res)=>{
    if(req.url=="/stream"){
        const stream=createReadstream("big.txt",{encoding : "utf-8"});
        stream.pipe(res);
    }
    else if(req.url=="/normal"){
        const text= await readFile("big.txt");
        res.end(text);
    }
});
server.listen(3000,()=>console.log("server is running at 3000..."));