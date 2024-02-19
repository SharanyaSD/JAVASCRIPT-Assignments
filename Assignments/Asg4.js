// function findNumber()  {
//     for(let i =0;i <5;i++) {
//         console.log(i);
//         if(i==2) {
//             return "loop terminated ";
//             // will immediately exit the function as soon as the number matches and condition says return true;
//         }
//     }
//     console.log("Line after loop");
// }

// console.log(findNumber());

function test(callback){
    callback();
   }
   
function callbackFunc(){
    console.log("Calling call back function ...");
    return 5;
}

//console.log(test(callbackFunc));
//output - Calling call back function ...

//console.log(test(callbackFunc()));
//Uncaught TypeError: callback is not a function


// console.log(test(() => callbackFunc()));
//output - Calling call back function ...

/*
When returning callback() from a function

*/