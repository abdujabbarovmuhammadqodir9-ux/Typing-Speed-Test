let object = {
    name: 'John',
    age: 30,
    city: 'New York',
    email: 'tkc80@example.com',
    phone: '123-456-7890',
}

let num = 0;
console.log(object.name); // John

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numbers[4]); // 5

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruits[2]); // orange

let users = [
    
    {
        name: 'John',
        age: 30,
        city: 'Bishkek',
        phone: '123-456-7890',
        avatar: 'https://randomuser.me/api/portraits/men/19.jpg'
    },
    {
        name: 'Jane',
        age: 25,
        city: 'Osh',
        phone: '098-765-4321',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'Bob',
        age: 35,
        city: 'Naryn',
        phone: '555-555-5555',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Alice',
        age: 40,
        city: 'Talas',
        phone: '777-777-7777',
        avatar: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
    {
        name: 'Mike',
        age: 45,
        city: 'Jalal-abad',
        phone: '999-999-9999',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name: 'Emily',
        age: 50,
        city: 'Chyi',
        phone: '111-111-1111',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        name: 'David',
        age: 55,
        city: 'Ysyk-Kol',
        phone: '222-222-2222',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    }
];
function searchUser() {
    let input = document.getElementById('input1').value.toLowerCase();
    let filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(input)
    );

    console.log(filteredUsers);

    let filteredText = '';

    for (let i = 0; i < filteredUsers.length; i++) {
        filteredText += `<div class="card">
            <img src="${filteredUsers[i].avatar}" alt="${filteredUsers[i].name}">
            <h2>${filteredUsers[i].name}</h2>
            <p>Age: ${filteredUsers[i].age}</p>
            <p>City: ${filteredUsers[i].city}</p>
            <p>Phone: ${filteredUsers[i].phone}</p>
        </div>`;
    }

    document.getElementById('result').innerHTML = filteredText;
}

let inputElement = document.getElementById('input1');
inputElement.addEventListener('input', searchUser);


function searchUserByPhone() {
    let input = document.getElementById('input2').value;

    let filteredUsers = users.filter(user =>
        user.phone.includes(input)
    );

    let filteredText = '';

    for (let i = 0; i < filteredUsers.length; i++) {
        filteredText += `<div class="card">
            <img src="${filteredUsers[i].avatar}" alt="${filteredUsers[i].name}">
            <h2>${filteredUsers[i].name}</h2>
            <p>Age: ${filteredUsers[i].age}</p>
            <p>City: ${filteredUsers[i].city}</p>
            <p>Phone: ${filteredUsers[i].phone}</p>
        </div>`;
    }

    document.getElementById('result').innerHTML = filteredText;
}

let phoneInputElement = document.getElementById('input2');
phoneInputElement.addEventListener('input', searchUserByPhone);


function filterUsersByCity() {
    let city = document.getElementById('input3').value.toLowerCase();

    let filteredUsers = users.filter(user =>
        user.city.toLowerCase().includes(city)
    );

    let filteredText = '';

    if (city === 'all') {
        filteredText = text;
    } else {
        for (let i = 0; i < filteredUsers.length; i++) {
            filteredText += `<div class="card">
                <img src="${filteredUsers[i].avatar}" alt="${filteredUsers[i].name}">
                <h2>${filteredUsers[i].name}</h2>
                <p>Age: ${filteredUsers[i].age}</p>
                <p>City: ${filteredUsers[i].city}</p>
                <p>Phone: ${filteredUsers[i].phone}</p>
            </div>`;
        }
    }

    document.getElementById('result').innerHTML = filteredText;
}

let ageInputElement = document.getElementById('input3');
ageInputElement.addEventListener('change', filterUsersByCity);

console.log(users[2].name, users[2].phone); // Bob

// let nums = '';
// for (let i = 0; i < 100; i++) {
//     nums += i + '<br>';
// }
// document.getElementById('nums').innerHTML = nums;

let text = '';

for (let i = 0; i < users.length; i++) {
    text += `<div class="card">
        <img src="${users[i].avatar}" alt="${users[i].name}">
        <h2>${users[i].name}</h2>
        <p>Age: ${users[i].age}</p>
        <p>City: ${users[i].city}</p>
        <p>Phone: ${users[i].phone}</p>
    </div>`;
}

document.getElementById('result').innerHTML = text;