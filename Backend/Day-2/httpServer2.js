

const http = require('http');

const server= http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json");
   const data = await fetch("https://dummyjson.com/recipes");
  const dataJson= await data.json();
  const newData = dataJson.recipes;
  const names=newData.map((i)=>{
    return i.name;
  });
  res.end(names);

});

server.listen(3001,(err)=>{
    try{
        if(err) throw err;
    console.log("Server started on port 3001");
    }
    catch(err){
        console.log("Server err" ,err.message);
    }

});

