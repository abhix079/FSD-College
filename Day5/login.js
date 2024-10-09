let uname = document.getElementById("login").value;
let password = document.getElementById("pass").value;
let text = document.getElementById("para");
function validate(){
   if(login=="admin" && password=="admin"){
    text.innerText ="Login Success";


   }
   else{
    text.innerText ="Login failed";

   }
   return false;
}