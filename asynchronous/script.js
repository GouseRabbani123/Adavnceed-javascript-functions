// //synchronous
// console.log("hello")
// console.log("gouse")
// console.log("how")
// console.log("are")
// console.log("you")

// as the javascript follows the line by line coding this function will
// gives an output as
// "hello"
// "gouse"
// "how"
// "are"
// "you"

// regualar function
// function abcd(hello){

// }

// arrow functions

// let abcd = (hello)=>{

// }

// Asynchronoue function
// setTimeout it is a built-in function of javacsript that allows to run function after  a perticular time.

// setTimeout(()=>{
//  console.log("how")
// },3000)

// console.log("are")
// console.log("you")

// output:
// are
// you
// how

// the above code is an example for asynchronous  function.

// */Call Back
// calling a function inside another function is known as call back

// // without call back
// function one(){
// console.log("step 1");
// }
// function two(){
// console.log("step 2");
// }

// two()
// one()

// output=>
// step2
// step1
// beacuese the javascript follows the line by line paremr

// // with call back
// // icecreame bussiness following steps step by step
// order from the customer
// fetch ingredients
// start production
// serve

// let us assume in the icecream business we have two functions
// 1.order function
// 2.production function
// NOTE:IF WE DONT GET THE ORDER WE CANNOT  FORM THE PRODUCTION "THATS HOW WE ARE FORMING CONNECTION BETWEEN ORDER AND PRODUCTION."

// Function
// let order = (call_production)=>{
//     console.log("order placed please call production");
//     call_production()
// };
// let production = ()=>{
//     console.log("order reieved ,startin production")
// };
// order(production);

//by this we can be able to frm a relation ship between the functions using tthe call back.

// frontend=>kitchen
// backend=>store

// let stokes = {
//     Fruits:["strawberry","grapes","banana","apple"]
// }
// //note:in order to work wit the objects we need to use the "."
// let s = stokes.Fruits[2];
// console.log(s);//output = banana

// let stokes = {
//     Fruits:["strawberry","grapes","banana","apple"],
//     liquids:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts"],
// };
// let order = (Fruit_name,call_production)=>{
//     setTimeout(()=>{
//         console.log(`${stokes.Fruits[Fruit_name]} was selected`)
//     },2000)
//     call_production();
// };

// let production = ()=>{};
// order(0,production);
//this code will gets the output as strawberry after 2 seconds.


// IF WE WANT TO USE VARIOUS CALL BACK FUNCIONS ONE AFTER ANOTHER THEN WE USE THIS "CALL BACK HELL" PROCESS.

// EXAMPLE FOR CALL BACK HELL

// let stokes = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquids: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   topping: ["chocolate", "peanuts"],
// };
// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stokes.Fruits[Fruit_name]} was selected.`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stokes.liquids[0]} and ${stokes.liquids[1]} was Added`);
//         setTimeout(() => {
//           console.log("the machine was started.");
//           setTimeout(() => {
//             console.log(`The icecreame was placed on ${stokes.holder[0]} .`);
//             setTimeout(() => {
//               console.log(`${stokes.topping[0]} was Added as toppings.`);
//               setTimeout(() => {
//                 console.log(`serve Icecreame.`);
//               }, 3000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };
// order(0, production);
// "call backs makes the relationship between the parent,cildren,grandchildren,grandgrandchilldren,like that.
// that makes the code looking more badly,soo we use the promises inspiite of call bac to make the code looks neat and clean."


// LETS START PROMISES

// PROMIISE CYCLE:
// 1.PENDING=>IT CONTAINS TWO PARAMETERS
// A.)RESOLVE B.)REJECT
// INSIDE RESOLVE WE HAVE TWO STATEMENTS
// a).then,b).then "atlast moves to finally"
// INSIDE REJECT WE HAVE ONLY ONE STATEMENT.
// a).catch "atlasst move to "finally""


// PROMISE STAGES:
// STAGE1.PENDING
// STAGE2.RESOLVE OR REJECT THE PROMISE.
// STAGE3.THEN OR Catch ("CATCH IS AN ERROE HANDLING PROCESS")
// STAGE3.FINALLY

// PROMISE FUNCTION

// let stokes = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     topping: ["chocolate", "peanuts"],
//   };

// let is_shop_open = true;

// let order = (time,work)=>{
//     return new Promise ((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
          
//         }
//         else{
//             reject(console.log("our shop is closed"))
//         }
//     })
// }
// //promise chaining
// //.then,.then,.then
// order(2000,()=>{
//     console.log(`${stokes.Fruits[0]} was selected.`)
// })
// .then(()=>{
//     return order(0000,()=>{
//         console.log("production has started.")
//     })
// })
// .then(()=>{
//     return order(2000,()=>{
//         console.log("the fruit was chopped")
//     })
// })
// .then(()=>{
//     return order(1000,()=>{
//         console.log(`${stokes.liquids[0]} and ${stokes.liquids[1]}`)
//     })
// })
// .then(()=>{
//     return order(1000,()=>{
//         console.log(`start the machine`)
//     })
// })
// .then(()=>{

//     return order(2000,()=>{
//         console.log(`ice creame placed on ${stokes.holder[0]}`)
//     })
// })
// .then(()=>{

//     return order(3000,()=>{
//         console.log(`${stokes.topping[0]} was selected.`)
//     })
// })
// .then(()=>{

//     return order(3000,()=>{
//         console.log(`ice creame wes serverd`)
//     })
// })
// .catch(()=>{
//     console.log("Customer left")
// })//this code executes only if the statement is false

// .finally(()=>{
//     console.log("day ended shop is closed.")
// })//this will executes in both the conditions either the code is true or false.



// ASYNC AND AWAIT:

// let stokes = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     topping: ["chocolate", "peanuts"],
//   };

// // let is_shop_open = true;

// // let order = () =>{
// // return new Promise( (resolve, reject)=>{
// //     if(){
// //         resolve()
// //     }
// //     else{
// //         reject()
// //     }
// // })
// // }
// // order()
// // .then()
// // .then()
// // .then()
// // .then()
// // .catch()
// // .finally()
// async function order (){
//  try{
//      await abc;
//  }
//  catch(error){
//      console.log("abc doen't exist",error)
//  }
//  finally{
//      console.log("runs code anyway")
//  }

// }

// order()
// //the ".then" is used to  write anywhere inside the page,it will able to work anywhere.
// .then(()=>{
//     console.log("abchggggbjbj");
// });

// await=>inside a hotel when a server goes to take the order to the CustomElementRegistry,then the function of the kitchen remains empty at that time there iis no work done inside the kitchen.
// inspite of the kitchen the remaining works are in progress like  washing ,cleaning table is thease jobs are in progres they do not stop.

// //

// let stokes = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
//   };

// let is_shop_open = true;

// let toppings_choice = ()=>{
 
// return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve(console.log("which topping would you love?"));
//    },3000);
// });


// };

// async function kitchen(){
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     await toppings_choice()
//     console.log("4");
//     console.log("5");
// }


// kitchen()

// console.log("cleaning the dishes.");
// console.log("clenaing the tables");
// console.log("taking the others orders");


// with the help of aeait we can be able to get the pericuar data at the perticular position inside the function
// here as we see the output then you will get the clear view by comparing the input console with the output.


// output:

//  a
//  b
//  c
//  cleaning the dishes.
//  clenaing the tables
//   taking the others orders
//  which topping would you love?
//  4
//  5


let stokes = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stokes.Fruits[0]}`);
        await time(0000)
        console.log("start the production")
        await time(2000)
        console.log("cut the fruit")
        await time(2000)
        console.log(`${stokes.liquids[0]} and ${stokes.liquids[1]} was added.`)
        await time(1000)
        console.log(`start the machine`)
        await time(2000)
        console.log(`${stokes.holder[0]} was placed`)
        await time(3000)
        console.log(`${stokes.toppings[1]} was selected .`)
        await time(2000)
        console.log(`serve the ice creame`)





    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended,shop is closed")
    }
}
kitchen();
