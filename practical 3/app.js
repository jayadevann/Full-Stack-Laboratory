var http=require("http");
const host="localhost";
const port=1000;
var fs=require("fs");
http.createServer((req,res)=>{
    fs.readFile("./index.html",(err,data)=>{
        res.write(data);
        res.end();
    });
}).listen(port,host,()=>{
    console.log("server busy...");
});
