// Create a validation class similar to ‘yup’ and add validations for required, min and max for strings. 

class Employee {
    constructor(ID, Name, Salary) {
        

        if(typeof Name !== 'string') {
            throw new Error('Name must be string.');
        }

        if(typeof Salary !== 'number') {
            throw new Error('Salary should be numeric');
        }

        if(Salary < 0) {
            throw new Error('Salary cannot be negative. ')
        }

        if (Name.length < Employee.nameMin || Name.length > Employee.nameMax) {
            throw new Error(`Name must be between ${Employee.nameMin} and ${Employee.nameMax} characters.`);
        }

        if(ID=='' ) {
            throw new Error('ID cannot be empty ')
        }

        this.ID=ID;
        this.Name=Name,
        this.Salary=Salary;
    }

    display() {
        console.log(`Employee ID: ${this.ID}. Employee Name: ${this.Name}. Employee Salary: ${this.Salary}. `);

    }
    
    static get nameMin() {
        return 2;
    }

    static get nameMax() {
        return 20;
    }

}

const employee= new Employee(101, 'Vijay', 200000);
employee.display();

console.log("For incorrect name input ");
console.log(101,8421,200000);
try {
    const employee1 = new Employee(101,8421,200000) ;
    employee1.display();

} catch (error) {
    console.log(error.message);
}

console.log(101,'Vijay','20 lakhs');
console.log("For incorrect non-numeric/non-float salary - ");
try {
    const employee2 = new Employee(101,'Vijay','20 lakhs');
    employee2.display();

} catch(error) {
    console.log(error.message);
}

console.log("For negative salary - ");
console.log(101,'Vijay',-1);
try {
    const employee2 = new Employee(101,'Vijay',-1);
    employee2.display();

} catch(error) {
    console.log(error.message);
}

console.log("For incorrect length name - ");
console.log(101,'g',10000);
try {
    const employee2 = new Employee(101,'g',10000);
    employee2.display();

} catch(error) {
    console.log(error.message);
}

console.log("Empty ID");
console.log(' ','sharanya',20000);
try {
    const employee3= new Employee('', 'Sharanya',100000);
    employee3.display();
} catch (error ) {
    console.log(error.message);
}

console.log('---------------------------------------------------------------------------------');

//Expose an isValid method that returns true or false based on the argument passed
// JavaScript contains the following falsy values:

//     false
//     0, -0 and 0n
//     "", '' (empty strings)
//     null, undefined and NaN
//     document.all

// All other values are truthy. - any non-zero value, any non-empty string, non empty objects, arrays, etc.


console.log('Check isValid ');
function isvalid(value) {
    if(value)
        return true;
    else 
        return false;
}

console.log(isvalid(true));     //true
console.log(isvalid(false));    //false
console.log(isvalid(0));        //false
console.log(isvalid(1));    //true
console.log(isvalid(''));   //false
console.log(isvalid('sample'));     //true
console.log(isvalid(null));         //false
console.log(isvalid(undefined));    //false

console.log('---------------------------------------------------------------------------------');
// Implement a Fibonacci sequence generator using a generator function in JavaScript.
//Generator function generates next value everytime 
function* fiboGenerator(num) {
    let n1=0;
    let n2=1;
    let sum;
    for(let i=0;i<num; i++ ){
        sum=n1+n2;
        n1=n2;
        n2=sum;
        yield sum;
    }
}

let a=fiboGenerator(10);
let next;
while(!(next=a.next()).done) {
    console.log(next.value);
}
console.log('---------------------------------------------------------------------------------');

//Share minimum four differentiation between regular function and arrow functions with one examples
//1. Syntax
//Regular function - have to explicitly use return keyword else it will return undefined.

function regularFunction(arg) {
    return arg;
}
console.log('Regular Function -' , regularFunction(10));

//Arrow  - there is no need to explicitly use 'return' if there is only 1 statement - can write funcion in single line

const arrow =(args) => 'Argument value is '+args;
console.log('Arrow Function - ',arrow(10));

//2. Accessing Arguments
//Regular - can access all arguments passed using 'arguments' object (its like an array like object holding arguments passwd to fucntion )

function regularFunction(name, job, technology) {
    console.log(arguments);
    
}
console.log('regular Function using arguments- ');
regularFunction('sharanya','josh','React');

//Arrow - arguments object is not available. Can use rest parameter syantx instead 
const arrow1 = (...args) => {
    console.log(args);
}
arrow1('sharanya','josh','GoLang');


//3. Duplicates

//regular - in case of duplicates in args - last defined will be considered 
function regularFunction(n1,n2,n1) {
    console.log(n1,n2);
}

regularFunction(10,20,30);
//third args overrides value of first 

//arrow - Des not allow duplication - will throw error

// const arrow2 = (n1,n2,n1) => {
//     console.log(n1,n2);
// }
// arrow2(10,20,30);
//SyntaxError: Duplicate parameter name not allowed in this context

//4. Hoisting - vars/functions are moved to top of their scope contained, before code execution

//regular - hoisted. function call before declaration

regularFunction1();
function regularFunction1() {
    console.log("Regular function declared");
}

//arrow - cannot be accessedbefre initialised
// arrowFunction();

// const arrowFunction = () => {
//     console.log("this is arrow function");
// }
//ReferenceError: Cannot access 'arroeFunction' before initialization