import { createReadStream } from "fs";
import http from "http";
const server = http.createServer((req,res)=>{
    const stream=createReadStream('./airtag.html',{encoding:'utf-8'});
    stream.pipe(res);
 
})
server.listen(3000,()=>console.log("prg9 is running at 3000..."));