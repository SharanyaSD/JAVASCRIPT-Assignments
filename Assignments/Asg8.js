
//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
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
//Printing before
func();




/* 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received*/
function fetchData() {
    return new Promise((resolve, reject ) => {
        const url ='https://reqres.in/api/users';
        //api call
        fetch(url)
        .then(response => {
            if(!response.ok) {
                reject(new Error("Failed to fetch data"));
            }
            return response.json();
    }) 
        .then (data => {
            resolve(data);
        })
        .catch(error => {
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




//3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
// when promise resolves, it prints := Response in then block:  Test Resolve
// when promise rejects, it prints := Error caught in testAsyncFunction:  Test Reject, Response in then block:  undefined 




//Question 4 - what will be printed - 
const testAsyncFunction2 = () =>{
    return Promise.reject('Test static reject');
    };
testAsyncFunction2()
.then((res) =>{
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));
//output - Error in catch block Test static reject



//Question 5 - what will be printed
const testAsyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};
testAsyncFunction3()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
// output - Error in catch block:  Error: Forced error


//6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.
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
