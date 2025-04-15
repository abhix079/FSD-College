const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
const connectDB= require("./config/db");
const Port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/",userRoute);
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
