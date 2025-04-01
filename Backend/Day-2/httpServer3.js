
const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    res.end("Hello from Server");
})

server.listen(port,(err)=>{
    try{
        if (err) throw err;
        console.log(`Server is running on ${port}`);
    }
    catch(err){
        console.log("Server error: ",err.message);
        
    }

})