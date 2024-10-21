function fetchdata(){
    return new Promise((Resolve,reject)=>{
        setTimeout(()=>{
            const students=[
                {name:"Alice",score:50},
                {name:"Bob" ,score:65},
 {name:"Charlie" ,score:80},
 {name:"David" ,score:45},
 {name:"Rahul" ,score:50},

            ];
            Resolve(students);
        },4000);
    });
}
fetchdata()
.then((data)=>{
    let sum=0;
    data.forEach((element)=>{
        sum+=element.score;
    });
    console.log(sum);
} )
.catch((error)=>{
    console.log(error);
});