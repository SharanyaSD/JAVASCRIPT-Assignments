
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
    
let input = prompt ("Enter a choice: ")

switch(parseInt(input)) {

case 1:
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
    break;
case 2:
    let obj = {
        a:"Apple",
        b:["Basketball","Baseball"],
        c:{
            call:"cellphone"
        },
        d:"Dog"
    }
    
    filterObj(obj);
    
    function filterObj(obj) {
       
    }
    
    //ytd
    break;
case 3:
    
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
    break;

    case 4:
        console.log(groupBy(users,"gender"));
        function groupBy (array,key) {
                    const mappedObj = {};
                    array.forEach(item => {
                        const keyValue = item[key];
                        mappedObj[keyValue]=item;
                    });
                return mappedObj;
                }
        break;

    case 5:
    
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
            break;
        
        case 6:
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
                break;

            case 7:

             break;
}

