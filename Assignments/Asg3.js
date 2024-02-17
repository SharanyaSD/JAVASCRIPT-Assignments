
let age=25;
let arraySize=25;

let arrayAge= [];

let input = prompt('Enter your choice: ');

switch(parseInt(input)) {
    case 1: 
        if (age<=12) {
            console.log('child');
        } else if(age >=13 && age <= 18) {
            console.log('teen')
        } else {
            console.log('adult');
        }
        break;
    case 2:
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
        break;
    case 3 :
        for(let i=1;i<=arraySize;i++) {
            arrayAge.push(i);
        }
        console.log(arrayAge);
        break;
    case 4:
        let i=1;
        while(i <= arraySize) {
            arrayAge.push(i);
            i++;
        }
        console.log(arrayAge);
        break;
    default:
        console.log("Wrong choice ");
        
    
}