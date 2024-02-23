
// What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?

function findNumber()  {
    for(let i =0;i <5;i++) {
        console.log(i);
        if(i==2) {
            return "if condition  terminated ";
            // not printed - will immediately exit the function as soon as the number matches and condition says return true;
        }
        return "loop terminated ";
        //will print loop terminated and exit.
    }
    console.log("Line after loop ");
    //statements after loop does not run after using return - return stops the execution immediately, irrespective of its declared location 

}

console.log("Using return in loop - " ,findNumber());

/*
Take a function that accepts a function as a parameter (also known as callback function). 
function test(callback){
 callback();
}

function callbackFunc(){
 console.log(“Calling the callback function”)
 return 5;
}
Explore the following cases - what is printed in the console, and what gets returned:
*/



function test(callback){
    callback();
   }
   
function callbackFunc(){
    console.log("Calling call back function ...");
    return 5;
}

//1. test(callbackFunc)
console.log(test(callbackFunc));
//output - Calling call back function ...
//undefined

// For above senario 1 , when calling test(callbackFunction) it in turn calls callback()i.e callbackFunc thus printing 
// "Calling call back function ..." while test does not return its value so 5 is not printed and it shows undefined.


//2.test(callbackFunc())
console.log(test(callbackFunc()));
//Uncaught TypeError: callback is not a function

//3. test(() => callbackFunc())
console.log(test(() => callbackFunc()));
//output - Calling call back function ...

// 4. What happens when you return callback() from the test function?
//=> test will return whatever value is returned by the callback function taht is  passed to it..

//5. What happens when you return callback from the test function?
// =>test will return the callback function not the result of calling the callback function..
