// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"

let textContent = document.getElementById('content');
console.log(textContent);
// b) отримує текст з блоку з id "rules"

let textRules = document.getElementById("rules");
console.log(textRules);

// c) замініть текст параграфа з id 'content' на будь-який інший
textContent.innerHTML = 'замініть текст параграфа з id \'content\' на будь-який інший';

// d) замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerHTML = 'замініть текст параграфа з id \'rules\' на будь-який інший';

// e) змініть кожному елементу колір фону на червоний
textContent.style.background = 'red';
textRules.style.background = 'red';
let textTegUl = document.getElementsByTagName('ul');
console.log(textTegUl);
textTegUl[0].style.background = 'red';
// f) змініть кожному елементу колір тексту на синій
textContent.style.color = 'blue';
textRules.style.color = 'blue';
textTegUl[0].style.color = 'blue';
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(textRules.classList);


// h) отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName("fc_rules");
console.log(fcRules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fcRules.length; i++) {
    const fcRule = fcRules[i];
    fcRule.style.color = "red";
}


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement.
//     Вставити цей блок на сторінку

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name} <br> ${user.age} <br> ${user.status} <br> ${user.address.city} <br> ${user.address.country}
<br> ${user.address.street} , ${user.address.houseNumber} <br> -----------------`;
    console.log(userDiv);
    document.body.appendChild(userDiv);
}


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name} <br> ${user.age} <br> ${user.status}`;

    let userAddresDiv = document.createElement('div');
    userAddresDiv.innerHTML = `${user.address.city} <br> ${user.address.country} <br> ${user.address.street} 
, ${user.address.houseNumber} <br> -----------------`;

    userDiv.appendChild(userAddresDiv);
    document.body.appendChild(userDiv);
}
