console.log("Question 1");


console.log("For For let")
let a;
console.log("a Before assignment: ",a);
a=15;
console.log("a After assignment: ",a);

console.log("For const");
const person={
    name:'sharanya',
    age:21,
};
console.log("before assignment: ", person);
person.name='datrange';
console.log("after change: ",person);

//Not possible
// person = {};
// console.log(person);

const b= 21;
console.log(b);

//not posiible
// b=14; 
// console.log(b);


var name='sharanya';
console.log(name + " is of type  " + typeof(name));
var age = 21;
console.log(age + " is of type  " + typeof(age));
var salary = 10000.0;
console.log(salary + " is of type  " + typeof(salary));
var active = true;
console.log(active + " is of type  " + typeof(active));
var array =['this', 'is', 'my', 'job'];
console.log(array + " is of type  " + typeof(array));
var hobby = undefined;
console.log("hobby"+ " is of type  " + typeof(hobby));
var practice=null;
console.log("practice" + " was of type  " + typeof(name));
console.log("Adding to practice: ");
practice={domain:"Javascript",times:"5"};
console.log(practice);
console.log(" is of type  " + typeof(practice));
const details={firstName:"Sharanya", lastName:"datrange",college:"KKW", working:true};
console.log(details )
console.log( " is of type  " +  typeof(details));
const date = new Date("2024-02-16");
console.log(date + " is of type  " + typeof(date));




//question 2
console.log("Question 2 ")
const arr = [1,2,3,4,5,6,23,76,12,60,66];
console.log("current array is "+arr);
arr.push(7)
console.log("After adding 7 - "+arr);
arr.pop()
console.log("after popping - "+arr);
arr[2]=10
console.log("modifying 2nd position - "+arr);
arr.splice(1,1);
console.log("deleting 1st postion element - ", arr);
arr.splice(1,3);
console.log("deleting elements - 1,2,3 postions ",arr);

let obj = [{project:"EPM", status:"active", NoOfDays:10},
            {project:"Kisaan360", status:"inactive", NoOfDays:30},
            {project:"Dashboard Manager", status:"inactive", NoOfDays:20}
            ];
console.log(JSON.stringify(obj));
console.log( " - " +typeof(obj));
console.log(obj[2].status="active");
console.log(JSON.stringify(obj));

/*
What do you expect to happen in both cases? What actually happens in both cases.
=> in let or var as well the values can be modified, whereas in const the value once assigned can't be reassigned. 
Well, the values of objects passed in const
can be modfifed. whereas the reference of other object/variable cannot be assigned as in to the defined 
const variable. 


What is the difference between an object declared as a let or a const variable?
the var objects can be updated, const cannot be updated. declaration of var objects can be done again, 
whereas cant do in case of const.
*/