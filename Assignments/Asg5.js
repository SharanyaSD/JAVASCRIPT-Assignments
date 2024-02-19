let i=5;
console.log(i);
//i++ is post increment that returns the value after it is incremented, ++i is pre-increment that returns the value before it is incremented.
console.log("5 after ++i ", ++i);
i=5;
console.log("5 after i++: ",i++);
i++;
console.log(i++);


let str="Hello";
console.log(str[10]);   //undefined
console.log(str[-1]);   //undefined


let arr=[1,2,3,4,5];
let nestedObj={'sharanya': {
    'job':'private',
    'status':'working'
}};
console.log(arr);
console.log(JSON.stringify(arr));
console.log(nestedObj)
console.log(JSON.stringify(nestedObj));
//converts into JSON strings

let correctJSON = '{"name":"sharanya","age":21}';
let incorrectJSON='{name:"sharanya",age:21}';

console.log(JSON.parse(correctJSON));
try {
    console.log(JSON.parse(incorrectJSON));
} catch (error) {
    console.log(error);
}
//when we pass the incorrectJSON and attempt to parse it, its incorrect cause we have not specified " " for theproperty names thus we get syntax error which is catced by tha catch block