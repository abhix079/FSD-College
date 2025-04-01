async function orderFood(name,time){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name +"Prepared");
        },time);
    });
}
async function restaurant() {
    console.log("Order Placed");
    const pizza = await orderFood("Pizza",1000);
    console.log(pizza);
    const burger = await orderFood("Burger",2000);
    console.log(burger);
    const pasta = await orderFood("Pasta",3000);
    console.log(pasta);
    console.log("All food is prepared");

    
}
restaurant();