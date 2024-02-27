//Advanced Javascript Assignment 1 
//Create a memoised function that returns the cached value when the same arguments are passed.

/*
memoization involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. This eliminates redundant computations and significantly improves the performance of the program. The basic idea behind memoization can be summarized in three steps:

    Check if the result for a given set of inputs is already cached.
    If the result is found, return it.
    Otherwise, compute the result, cache it, and return it.
*/

// //Practice -1 
// function fibonacci(n, cache = {}) {
//     if (n <= 1) {
//       return n;
//     }
    
//     if (cache[n]) {
//       return cache[n];
//     }
    
//     const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
//     cache[n] = result;
    
//     return result;
//   }

// function memoize(func) {
//     const cache = {};

//     return function (...args) {
//         const key = JSON.stringify(args);

//         if(cache[key]) {
//             return cache[key];
//         }
//         const result=func.apply(this,args);
//         cache[key]=result;

//         return result;
//     };
// }

// const fiboMemoized = memoize(fibonacci);
// console.log(fiboMemoized(10));


//Practice - 2
function memoize(func) {
    const cache = {};

    return function(...args) {
        //generate unique key by stringifying input args
        const key = JSON.stringify(args);

        //if result exists in cache - return cache result
        if(cache[key]!==undefined ) {
            console.log("Cache result for - ", args);
            return cache[key];
        } else {            //store result in cache and return
            console.log("Calculating result for - ", args);
            const result=func(...args);
            cache[key]=result;
            return result;
        }
    };
}

function gcd(no1, no2) {
    return no2 === 0 ? no1 : gcd(no2, no1 % no2);
}

function LCM(no1, no2) {
    let greatestCommonDivisor = gcd(no1,no2);
    return (no1*no2)/greatestCommonDivisor;
}

//wrap LCM to memotize 
const memotizedLCM = memoize(LCM);

console.log(memotizedLCM(2,5));     //calculates stores and returns 10
console.log(memotizedLCM(2,5));      //returns cached result 10
console.log(memotizedLCM(4,10));    //calculates stores and returns 20
console.log(memotizedLCM(4,10));    //returns cached result 20
