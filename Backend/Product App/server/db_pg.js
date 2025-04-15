const {Client} = require("pg");
const client = new Client({
    host:'localhost',
    port:5432,
    database:'FSD-IT-B',
     password:'abes@1026'
});
client.connect()
.then(()=>{
    console.log("POSTGRESQL Connectd");
})
.catch(err=>{
    console.log("DB error",err.message);
})

const createUser=async()=>{
    try{
        const res= await client
        .query("insert into users(name,email,age) values ('Abhishek','abhi@gmail.com,21)")
        console.log("User created successfully",res.rowCount);
    }
    catch(err){
        console.log("Insert query error",err.message);
    }

}
createUser();