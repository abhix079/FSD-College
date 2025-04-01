


function task(message,delay){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(message);
            resolve();

        },delay);
    });
}
task("First task completed",1000)
.then(()=>task("Second taskk is completed",2000))
.tjen(()=>task("Third task is cmpled",3000))
.then (()=>task("FOurth task done"));