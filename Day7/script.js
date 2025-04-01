// let num = [1,2,3,4,5,6,7,8,9,10];

// //MAP METHOD
// let newnum = num.map(x=>x*2);
// console.log(newnum);

// //Filter method
// let arrfilter = num.filter(x => (x%2)==0);
// console.log(arrfilter);

// // reduce method
//     //SYntax :     arrName.reduce((accumulator,currentValue) => accumulator+currentValue ,initialValue)

// let res =num.reduce((x,y)=>x+y,0);
// console.log(res);

// //product

// let pro = num.reduce ((x,y)=>x*y,1);
// console.log(pro);

// //Creating objects

// const students= [
//     {name:"Alice" ,score:50},
//     {name:"Bob" ,score:65},
//     {name:"Charlie" ,score:80},
//     {name:"David" ,score:45},
//     {name:"Rahul" ,score:50},

// ];
// let scores= students.map(x=>x.score);
// console.log(scores);

// let result = scores.reduce((x,y)=>x+y,0);
// console.log(result);

// let mulScore  = students.map(x => x.score*2);
// console.log(mulScore);

// let mulRes = mulScore.reduce((x,y)=>x+y,0);
// console.log(mulRes);

// let fil = scores.filter(x =>x>60);
// let sum  = fil.reduce((x,y)=>x+y,0);
// console.log(sum);

// let num = [1,2,3,4,5,6,7,8,9];

// let arr  = num.forEach(x =>console.log(x));

//ASYCHRonous functin

// sayHello = () =>{
//     console.log("I am in  Helo function");
// };

// console.log("Start");
// setTimeout(sayHello,3000);
// console.log("End");

console.log("Start");
setTimeout(() => {
  console.log("first task completd");
  setTimeout(() => {
    console.log("Second task completd");
    setTimeout(() => {
      console.log("third task completed");
    }, 3000);
  }, 2000);
}, 1000);
console.log("End");
