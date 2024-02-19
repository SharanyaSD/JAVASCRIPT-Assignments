let choice = prompt("Enter question choice: ");


const people =
[{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
    }, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
    }, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
    }, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
    }, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
    }, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
    }, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
    }]

switch (parseInt(choice)) {

    case 1:

        //filter method creates a new array filled with elements that if passed a test by function returns data 

        function filterByName(name) {
            //substr (start, length)
            //for each object in array
            return people.filter(obj => obj.first_name.substr(0,name.length)===name);
        }

        let input = prompt("Enter name to search ");

        console.log(filterByName(input));


        const emails = people.map(obj => obj.email);
        console.log("Email array : ",emails);

        const DateOfBirth =people.map(obj => new Date(obj.date_of_birth));
        console.log("Dates: ",DateOfBirth);
        function dateSortDesc(DateOfBirth) {
            DateOfBirth.sort((a, b) => b - a);
            // DateOfBirth.reverse();
            // console.log("reversed ",DateOfBirth);
            return DateOfBirth;
        }
        console.log("Dates sorted in Desc: ",dateSortDesc(DateOfBirth));

        function getById(id) {
            return people.find (obj => obj.id===id);
        }

        idInput = prompt("Enter ID to search ");
        idInput=parseInt(idInput);
        console.log(getById(idInput));

        break;

case 2:


        //Mutating methods are array methods that alter data in the original array whereas 
        //unmutating does not affect the original array data 

        //Mutating array methods include - push(), pop(), shift(), unshift(), splice(), sort(), reverse()
        //Unmutating array methods inculude - concat(), slice(), join(), index meethods, etc.
        
        
        console.log("After push: ")
        people.push({
            "id": 11,
            "first_name": "Sharanya",
            "email": "ssd@upenn.edu",
            "date_of_birth": "2024/10/06"
            });
        console.log(people);

        console.log("after pop: ")
        people.pop();
        console.log(people);
        
        //filter, find, sort, map perfomed in case 1 above.
       

        break;
}
