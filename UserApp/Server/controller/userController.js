const User= require("../model/usermodel");
const getAllUsers= async(req,res)=>{
        try{
            const users= await User.find();
            res.status(200).json(users);

        }
        catch(err){
            res.status(500).json({
                message:err.message
            })


        }
}
const getUserByEmail= async(req,res)=>{
    try{
       const email = req.params.email;
       const userEmail = await User.findOne({email});
        res.status(200).json(userEmail);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })


    }
}
const addUser= async(req,res)=>{
    try{
       const {name,email,password,role}= req.body;
       const newUser= new User({name,email,password,role});
      const user= await newUser.save();
      console.log(user,newUser)
        res.status(200).json(user);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })


    }
}
const updateUser= async(req,res)=>{
    try{
      const email = req.params.email;
      const {name,password,role}= req.body;
      const updateUser= await User.findOneAndUpdate({email},{name,password,role},{new:true});
        res.status(200).json(updateUser);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })


    }
}
const deleteUser= async(req,res)=>{
    try{
      const email = req.params.email;
      const deleteUser= await User.deleteOne({email});
        res.status(200).json(deleteUser);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })


    }
}
module.exports = {getAllUsers,getUserByEmail,addUser,updateUser,deleteUser};