
let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender":"male"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender":"female"
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender":"male"
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender":"female"
    }];
    

// How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
    const existingObj  = {
        name: "Harry Potter",
        age: 12,
        address: {
          details: ["4", "Privet Drive"],
          area: "Little Whinging",
          city: "Surrey",
          state: "England"
        }
      };
      
    //spread method - ...
    // assign() method - assign()
    //JSON parse
    
    console.log("Existing Object ",existingObj)
    
    const newObj = {
        ... existingObj,
            address: {
                ...existingObj.address,
                details :["5", ...existingObj.address.details.slice(1)]
            }
        };
    
    
    console.log("NewObject with 5: ",newObj);


//2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
        console.log(users);
        console.log(mapBy(users, "first_name")) ;

        function mapBy(array, key)  {
            const mappedObj = {};
            array.forEach(item => {
                const keyValue = item[key];
                mappedObj[keyValue]=item;
            });
           return mappedObj;
        }

//Write a functiongroupBy to convert an array of objects into groups based on the specified key:
        console.log(groupBy(users,"gender"));
        function groupBy (array,key) {
                    const mappedObj = {};
                    array.forEach(item => {
                        const keyValue = item[key];
                        mappedObj[keyValue]=item;
                    });
                return mappedObj;
                }

// Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 
            console.log(sortArray(users, "id", "desc" ));
    
            function sortArray(array, key, order ) {
                const sortingOrder = order === 'desc' ?-1 : 1;
                // for loop not a optimised solution so..
                array.sort((a,b) => {
                    if (a[key] < b[key]) 
                        return -1*sortingOrder;
                    else if  (a[key]>b[key]) 
                        return 1*sortingOrder;
                    else 
                        return 0;
                });
                return array ;
            }

//Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

            let userNames = [{
                "id": 1,
                "first_name": "Nicki",
              }, {
                "id": 2,
                "first_name": "Raychel",
              }, {
                "id": 3,
                "first_name": "Demetris",
              }, {
                "id": 4,
                "first_name": "Amata",
              }];
              
              let userEmails = [{
                "id": 2,
                "email": "rmcgrady1@cpanel.net",
              }, {
                "id": 1,
                "email": "ncrozier0@squarespace.com",
              }, {
                "id": 4,
                "email": "abraiden3@canalblog.com",
              }, {
                "id": 3,
                "email": "dkilshall2@elpais.com",
              }];
              

              const mergeUsers = mergedArray(userNames, userEmails);
              console.log(mergeUsers);
                function mergedArray(arr1,arr2) {

                    //performing sortingf to avoid duplication that will occur everythime the id matches 
                    arr1.sort((a,b) => a.id-b.id);
                    arr2.sort((a,b)=> a.id-b.id);

                    let mergeResult = [];
                    let i=0;
                    let j=0;

                    while(i< arr1.length && j < arr2.length) {
                        if(arr1[i].id < arr2[j].id) {
                            //push obj from arr 1
                            mergeResult.push(arr1[i]);
                            i++;

                        } else if(arr1[i].id > arr2[j].id) {

                            //push obj from arr2
                            mergeResult.push(arr2[j]);
                            j++;
                        } else {
                            //merge objs from arr1 and 2 and push 
                            mergeResult.push({...arr1[i], ...arr2[j]});
                            i++;
                            j++;
                        }
                    }

                    //adding remaining elements to merege result 

                    while(i < arr1.length) {
                        mergeResult.push(arr1[i]);
                        i++;
                    }

                    while(j< arr2.length) {
                        mergeResult.push(arr2[j]);
                        j++;
                    }
                    return mergeResult;
                }

                // const mergedArray = arr1.map((item) => {
                //     const matchedObject = arr2.find((obj) => obj.id === item.id);
                //     return { ...item, ...matchedObject };
                //   });
                  
                // console.log(mergedArray);
                // const arr = arr1.concat(arr2,arr3);
                // let mergedArr =[...new Set(arr)];
                // console.log(mergedArr);
                // console.log(arr);
                // function mergeArrays(arr1,arr2,arr3) {
                //     const idSet = new Set();
                //     const mergedArray=[];

                //     for(const obj of arr1) {
                //         if(!idSet.has(obj.id)); {
                //             mergedArray.push(obj);
                //             idSet.add(obj.id);
                //         }
                //     }

                //     for(const obj of arr2) {
                //         if(!idSet.has(obj.id)); {
                //             mergedArray.push(obj);
                //             idSet.add(obj.id);
                //         }
                //     }

                //     for(const obj of arr3) {
                //         if(!idSet.has(obj.id));


                // //ytd..........


                //Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
            let user = {
                'id':21,
                'name':'sharanya',
                'working': {
                    'language':'Javascript',
                    'status':'active'
                },
                'results':true

            };
            let user1 ={
                'id':22,
                'name':'janhvi',
                'working' : {
                    'language':'Javascript',
                    'status':'inactive'
                },
                'results':true
            };
            let user2 = {
                'id':21,
                'name':'sharanya',
                'working': {
                    'language':'Javascript',
                    'status':'active'
                },
                'results':true
            };

            console.log(deepEqual(user, user1));
            console.log(deepEqual(user1,user2));
            console.log(deepEqual(user,user2));
            function deepEqual(obj1, obj2) {

                //cannot directly comapare arrays or objects using ===. different memory locations 

                // If both are not objects or arrays, compare directly
                if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
                  return obj1 === obj2;
                }
              
                // Get keys of both objects/arrays
                const key1 = Object.keys(obj1);
                const key2 = Object.keys(obj2);
              
                // If number of keys are different, objects are not equal
                if (key1.length !== key2.length) {
                  return false;
                }
              
                // Check each key and value recursively
                for (let key of key1) {
                  if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                    return false;
                  }
                }
              
                return true;
              }

//Advanced - 2
// Write a recursive function to create a deep clone of a nested object
console.log("Assignment 7");
const person ={
  name:"Sharanya",
  tech: ['Java', 'Python','GoLang'],
  experience: {
    workHistory: ['2018,2019,2020,2021,2022']
  }

};

// person.tech.push('C++');
// console.log(personCloned.tech);
  //creaeting deep clome of person

// console.log(person==personCloned);
// console.log(person.experience.workHistory ==  personCloned.experience.workHistory);


function deepClone(obj){
  if(obj === null || typeof(obj)!=='object') {
    return obj;
  }

  //creating obj for array 
  if(Array.isArray(obj)) {
    let clonedArray =[];
    for(let i=0; i<obj.length; i++) {
      clonedArray.push(deepClone(obj[i]));
    }
    return clonedArray;
  }

  //creating obj for non array
  let clonedObject = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObject[key] = deepClone(obj[key]);
    }
  }
  return clonedObject;

}


const personCloned=structuredClone(person); 
console.log('using structured(No change in original) : ',personCloned);

console.log(personCloned);

const clonedPerson = deepClone(person);

clonedPerson.experience.workHistory.push('2024');
console.log("Using deep clone - No change in original ");
console.log('Deep clone of person- ',clonedPerson);
console.log('Original person - ' ,person);