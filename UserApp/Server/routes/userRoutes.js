const express= require("express");
const userController = require("../controller/userController");
const router= express.Router();
router.get("/user",userController.getAllUsers);
router.get("/user/:email",userController.getUserByEmail);
router.post("/addUser",userController.addUser);
router.put("/updateUser",userController.updateUser);
router.delete("/deleteUser",userController.deleteUser);

module.exports= router;