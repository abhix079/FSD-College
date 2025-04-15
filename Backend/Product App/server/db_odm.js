const mongoose = require("mongoose");
const mongo_url = "mongodb://localhost:27017";
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MONGODB Connected Successfully");
})
.catch((err)=>{
    console.log("DB Error:",err);
})
const userSchema = new mongoose.Schema({
    email:{type: String,required:true,unique:true},
    age: {type: Number,required:true}
})
const User=mongoose.model("userdata",userSchema);
const createUser=async()=>{
    try{
        const newUser=new User({name: "Abhi",email:"oyebugbite@gmail.com",age:21});
        const user = await newUser.save();
        console.log("User Created Successfully",user);
    }
    catch(err){
        console.log("User Creation Error",err);
    }
}
createUser();