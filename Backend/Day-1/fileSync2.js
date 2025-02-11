const{myFun, myWriteFun, myAppendFun, deleteFun, username} = require("./fileSync1");
myFun();
const data= "my fsd class";

myWriteFun(data);
myFun();
myAppendFun(data);
myFun();
deleteFun("dummy.txt");
console.log("Username : ",username);