const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const url = "mongodb://localhost:27017/userappDB";
const url = process.env.MONGO_URL || ATLAS_URL;
console.log(url);
const connectDB = async()=>{
    try{
         await mongoose.connect(url);
        console.log("Database connected");
    }
    catch(err){
        console.log("DB Error: ",err.message);
    }

}
module.exports= connectDB;