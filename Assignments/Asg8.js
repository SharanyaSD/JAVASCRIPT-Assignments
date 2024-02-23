//Question 1
/* Assignments
1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
Example:
 const func = async () => {
  console.log(“Printing before”)
  //Call your function here eg. sleep(3000)
  console.log(“Printing after”)
}*/
function sleep(time) {
    return new Promise ((resolve) => setTimeout(resolve,time));
}


const func = async () => {
    console.log("Printing before")
    //sleep(3000). then(()=> {          //promise
    setTimeout(() =>        //setTimeout 
     console.log("Printing after"),3000

    );
    //)};
}

func();
// op - Printing before

//Question 2
/* 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received*/
function fetchData() {
    return new Promise((resolve, reject ) => {
        const url ='https://reqres.in/api/users';
        //api call
        fetch(url)

        .then(response => {
            //check response successful or not
            if(!response.ok) {
                //if not - reject promise - error
                reject(new Error("Failed to fetch data"));
            }
            //successful - parse to json response
            return response.json();
    }) 
        .then (data => {
            resolve(data);
        })
        .catch(error => {
            //reject promise of error occured
            reject(error);
        });
    });
}

fetchData() 
    .then (data => {
        console.log("Data received: ", data);
    })
    .catch(error => {
        console.error("Error fetchong data: ", error);
    })

//op - 

//Question 3 -
/* 
3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction: ', err);
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));


*/

const testAsyncFunction1 = () =>{
    return new Promise((resolve, reject) =>{
    if (10> 0.5) {
    resolve('Test Resolve');
    } else {
    reject('Test Reject');
    }
    }).catch((err) =>{
    console.log('Error caught in testAsyncFunction: ', err);
    });
    };
testAsyncFunction1()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));


//Question 4 - what will be printed - 
const testAsyncFunction2 = () =>{
    return Promise.reject('Test static reject');
    };
testAsyncFunction2()
.then((res) =>{
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));

//Question 5 - what will be printed
const testAsyncFunction3 = () =>{
    return new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
    resolve('Test Resolve');
    } else {
    reject('Test Reject');
    }
    }).catch((err) =>{
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
    });
    };
testAsyncFunction3()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));


//Question 6 
/*
6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.*/
function fetchData() {
    return new Promise((resolve, reject ) => {
        const url ='https://reqres.in/api/users';

        fetch(url)
        .then(response => {
            if(!response.ok) {
                reject(new Error("Failed to fetch data"));
            }
            return response.json();
    }) 
        .then (data => {
            setTimeout(() => {
                resolve(data);
            }, 2000); //2 seconds delay 
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

fetchData() 

//Question 7 - Complete the above tasks with async/await.
async function fetchDataAsync() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error ("Failed to fetch data");
        }
        const data = await response.json();

        //delay by 2 secs
        await new Promise (resolve => setTimeout(resolve,2000));
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchDataAndLog() {
    try {
        const data = await fetchDataAsync();
        console.log('Data recieved after delay ', data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
fetchDataAndLog() ;

