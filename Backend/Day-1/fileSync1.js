const fs = require('node:fs');

function myFun(){ // we have created this function to read the file
try{
const data=fs.readFileSync("dummy.txt","utf-8"); // or we can directly convert here using utf-8 or any other method
console.log("File Data:",data);
// since the data is returned back in hexadecimal we have to convert it into string , therefore we use
  //   console.log("File Data:",data.toString());
}
catch(er){
    console.log(er.message);
}
}

// now we are creating a function for writing in a file

const myWriteFun=(data) =>{
    try{

        fs.writeFileSync("dummy.txt",data);
        console.log("Successfully written");

    }
    catch(er){
        console.log(er.message);

    }
}

const myAppendFun =(data)=>{
try{
  fs.appendFileSync("dummy.txt",data);
  console.log("Successfully appended");
}
catch(er){
    console.log("File Appending error:" ,er.message);
}

}

const deleteFun=(filename)=>{
    try{
        fs.unlinkSync(filename);
        console.log("Data deleted");

    }
    catch (er){
        console.log("Data Delete error:",er.message);
    }
}
module.exports ={
    myFun:myFun,
    myWriteFun:myWriteFun,
    myAppendFun:myAppendFun,
    deleteFun:deleteFun,
    username:"abhishek",
}