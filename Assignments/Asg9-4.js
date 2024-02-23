const userTable = document.getElementById('userTable');
const userTableBody = document.getElementById('userTableBody');
const searchInput= document.getElementById('searchInput');

let users=[];
function fetchUsers() {
    const url ='https://jsonplaceholder.typicode.com/users';
    userTableBody.innerHTML='Loading...';


    fetch(url) 
        .then(response => {
            if(!response.ok) {
                throw new Error("Response not ok");
            }
            return response.json();
        })
        .then(data=> {
            if(!Array.isArray(data)) {
                throw new Error("Invalid data format ...")
            }
            users=data;
            console.log(users);
            displayUsers(users);
        })

        .catch(error => {
            console.log("Error fetching users: ", error);
            userTableBody.innerHTML='Error fetching details... ';
        });
}

function displayUsers(users)  {
    userTableBody.innerHTML='';

    if(users.length === 0) {
        userTableBody.innerHTML ='No users found';
        return;
    }

    users.forEach(user => {
        const row = `
        <tr>
            <td>${user.username}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>`;
        userTableBody.innerHTML += row;
    });
}

function sortUsers() {
    users.sort((a,b) =>{
        const nameA= a.name
        const nameB=b.name
        if (nameA < nameB) 
            return -1;
        else if(nameA > nameB) 
            return 1;
        return 0;
    });
    displayUsers(users);
}

function filterUsers(search) {
    const filteredUsers = users.filter(users => {
        const name = users.name.toLowerCase();
        return name.includes(search.toLowerCase());
    });
    displayUsers(filteredUsers);
}

searchInput.addEventListener('input', function() {
    const search = this.value.trim();
    if(search.length===0 )
        return 'Not available';
    else
        filterUsers(search);
});

fetchUsers();
