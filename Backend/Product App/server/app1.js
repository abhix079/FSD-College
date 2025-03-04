const express=require("express");
const app=express();
const port=3000;
let user=[];
app.get("user",(req,res)=>{
    res.status(200).json(users);
})
app.get("/user/:id",(req,res)=>{
    
    const uid=req.params.id;
    const index=user.findindex(ind=>ind.id==uid)
    if (index==-1){
        res.status(404).json({"message":"User not found"});
        }
        else{
            res.status(200).json({status:"success",message:"user not found",data:user[index]
            });
        }
    }
)
app.get("/user",(req,res)=>{})
app.get("/user/:id",(req,res)=>{})
app.get("/createuser",(req,res)=>{})
app.get("/edituser/:id",(req,res)=>{})
app.get("/deleteuser/:id",(req,res)=>{})




app.patch("edituser/:id",(Req,res)=>{
    const uid = req.params.id;
    const {name:newName,email:newEmail}= req.body;
    if(!newName || !newEmail){
        res.status(400).json({
            status:"fail"
        })

    }
    else if(index!=-1){
        const index= users.findIndex(ind=>ind.id==uid);
        if(index!=-1){

        }

    }
    else{
        user[index].name= newName;
        user[index].email = newEmail;
    }
})

app.delete("deleteUser/:id",(req,res)=>{
    const uid= req.params.id;
    const index= users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status:"error"})
    }
    else{
        const delDat= user.splice(index,1);
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})