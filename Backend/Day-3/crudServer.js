const http = require('http');
const server = http.createServer((req,res)=>{
    const data= [{
        id:1,
        name:"Abhishek",
        email:"random@gmail.com"

    }]
    const url = req.url;
    if(url=='/users' && req.method=="GET"){
        res.writeHead(200,{
            'Content-Type':'text/html',
        });
       const ob= data.map((i)=>{
        return {id:i.id,name:i.name,email:i.email};

        });
        // console.log(ob.toString()) this will return only object not any data
        res.end(JSON.stringify(ob));

    }
    else{
        res.writeHead(404,{
            'Content-Type':'text/plain',
        });
        res.end("Page not found");

    }
})

server.listen(3000,(err)=>{
    try{
        if (err) throw err;
        console.log(`Server started on port 3000 `);
    }
    catch(err){
        console.log("Server err: ",err.message);
    }

})