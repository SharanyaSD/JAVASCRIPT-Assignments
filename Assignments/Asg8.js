//Question 1
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

//Question 2
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

//Question 3

// const testAsyncFunction = () =>{
//     return new Promise((resolve, reject) =>{
//     if (10> 0.5) {
//     resolve('Test Resolve');
//     } else {
//     reject('Test Reject');
//     }
//     }).catch((err) =>{
//     console.log('Error caught in testAsyncFunction: ', err);
//     });
//     };
// testAsyncFunction()
// .then((res) =>{
// console.log('Response in then block: ', res);
// })
// .catch((err) => console.log('Error in catch block: ', err));


//Question 4
// const testAsyncFunction = () =>{
//     return Promise.reject('Test static reject');
//     };
// testAsyncFunction()
// .then((res) =>{
// console.log('Response in then block', res);
// })
// .catch((err) => console.log('Error in catch block', err));

//Question 5 
const testAsyncFunction = () =>{
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
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));


//Question 6 
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

//Question 7
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

