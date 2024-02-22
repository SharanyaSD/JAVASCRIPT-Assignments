console.log("Assignment 8 ");


// function greet(name) {
//     console.log("Hello ${name}");
//
// }
//
// setTimeout(function greet() {
//     console.log('hello');
//     setTimeout(greet, 100)
// },100)
//
//
// interval = setInterval(function greet() {
//     console.log('hello')
// },100)
// clearInterval(interval);
// //
// function greetSharanya(greetFn) {
//     const name='sharanya';
//     greetFn(name);
// }
//
// greetSharanya(greet);
//
// let numbers =[1,2,4,5,9,8,7]
// numbers.sort((a,b) => a-b)
// numbers.map(n => n*2)
// numbers.filter(n => n%2 ===0ll)
const promise =  new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("bringing tacos");
    },5000)

})

const promsie = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Not bringing tacos");
    },5000)
})
const onFulfillment = (result) => {
    console.log(result)
    console.log("Fulfilled condition ")
}

const onRejection = (error) => {
    console.log(error)
    console.log("Rejected")
}


promise.then(onFulfillment)
promsie.catch(onRejection)

//promise.then(onFulfillment).catch(onRejection)
//promise.all - gives an error for rejected promsies
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'foo');
});

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log("For all");
    console.log(values);
});

///promise.allSettled() - waits for all promises to compelte regardless or not one is rejected 
Promise.allSettled([promise1, promise2, promise3]).then((values) => {
   console.log("For allSettled");
    console.log(values);
});


//promise.race() - returns promise that fulfills or rejects as soon as one of input promises fulfills or rejects , with valueof reason from that promise
Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log("For race")
    console.log(value);
});

async function greet1() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("Hello"),1000)
    })

    let result = await promise;

    console.log(result);

}

greet1()


async function fetchDataWithDelay() {
    try {
      // Making the API call
      const response = await fetch('https://reqres.in/api/users');
  
      // Checking if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parsing the JSON response
      const data = await response.json();
  
      // Delaying the resolution of the promise by 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      return data;
    } catch (error) {
      // Handling any errors that occurred
      throw error;
    }
  }
  
  // Calling the async function and logging the result
  async function fetchDataAndLog() {
    try {
      const data = await fetchDataWithDelay();
      console.log('Data received after delay:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Calling the function to fetch data and log the result
  fetchDataAndLog();
  