
let age=prompt("Enter age: ");
let arraySize=25;

let arrayAge= [];

// 1. Declare a variable let age = 25;. Write a series of if else statements that will:

//     Print child to the console if age is less than equal to 12.

//     Print teen to the console if age is between 13 and 18 (inclusive).

//     Print adult to the console if age is above 18

        if (age<=12) {
            console.log('child');
        } else if(age >=13 && age <= 18) {
            console.log('teen')
        } else {
            console.log('adult');
        }

//2.  Do the same using switch case.
        switch(true) {
            case age<=12:
                console.log('child');
                break;
            case age>=13 && age <=18 :
                console.log('teen');
                break;
            default:
                console.log('adult');
        }
//3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.

        for(let i=1;i<=arraySize;i++) {
            arrayAge.push(i);
        }
        console.log(arrayAge);

//4. Accomplish the same using a while loop.
        let i=1;
        while(i <= arraySize) {
            arrayAge.push(i);
            i++;
        }
        console.log(arrayAge);

