// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header.

const idMainHeader = document.getElementById('main_header');
idMainHeader.style.color = 'blue';

// b) робить шириниу елементу ul 400px
const ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    const ulElement = ul[i];
    ulElement.style.width = '400px';

}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
const clasLinkList = document.getElementsByClassName('linkList');
for (let i = 0; i < clasLinkList.length; i++) {
    const clasLinkListElement = clasLinkList[i];
    clasLinkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const clasListElement2 = document.getElementsByClassName('listElement2');
for (let i = 0; i < clasListElement2.length; i++) {
    const clasListElement2Element = clasListElement2[i];
    console.log(clasListElement2Element.innerText);

}
// e) отримує всі елементи li та змінює ім колір фону на сірий
const elementLi = document.getElementsByTagName('li');
for (let i = 0; i < elementLi.length; i++) {
    const elementLiElement = elementLi[i];
    elementLiElement.style.backgroundColor = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const elementA = document.getElementsByTagName('a');

for (let i = 0; i < elementA.length; i++) {
    const elementAElement = elementA[i];
    elementAElement.classList.add('anchor');
    console.log(elementAElement.classList);
}

// 2 -ий варіант

// for (const elemenAelement of elementA) {
//     elemenAelement.valueOf().classList.add('anchor');
//     console.log(elemenAelement.classList);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
const elemA = document.getElementsByTagName('a');
for (let i = 0; i < elemA.length; i++) {
    const elementA = elemA[i];
    if (elementA.innerText === 'link3') {
        elementA.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const elA = document.getElementsByTagName('a');
for (let i = 0; i < elA.length; i++) {
    const elementA = elA[i];
    let textA = elementA.innerText;
    elementA.classList.add(`element_${textA}`);
    console.log(elementA.classList);

}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const clasSubHeader = document.getElementsByClassName('sub-header');
for (let i = 0; i < clasSubHeader.length; i++) {
    const clasSubHeaderElement = clasSubHeader[i];
    clasSubHeaderElement.style.backgroundColor = prompt('enter a color');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку

const subHeader = document.getElementsByClassName('sub-header');

// якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let i = 0; i < subHeader.length; i++) {
    const subHeaderElement = subHeader[i];
    if (subHeaderElement.innerText === 'content 2 segment') {
        subHeaderElement.style.backgroundColor = prompt('enter a color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
const clasContent1 = document.getElementsByClassName('content_1');
for (let i = 0; i < clasContent1.length; i++) {
    const clasContent1Element = clasContent1[i];
    clasContent1Element.innerText = prompt('enter a text')
}

// l) отримати елементи p та змінити їм padding на 20px
const tegP = document.getElementsByTagName('p');
for (let i = 0; i < tegP.length; i++) {
    const tegPElement = tegP[i];
    tegPElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const text2 = document.getElementsByClassName('text2');
for (let i = 0; i < text2.length; i++) {
    const text2Element = text2[i];
    text2Element.innerText = 'feb-2021';
}

// 2) Є масив котрий характеризує правила.

//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял,или говорит -Хватит — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

const div = document.createElement('div');
//idContent = document.createAttribute('id');
//idContent.value = "content";
//div.setAttributeNode(idContent);

div.setAttribute('id', 'content');// додати id в  <div>
document.body.appendChild(div);
const h1Conten = document.createElement('h1');
h1Conten.innerText = 'Правила бійцівського клубу';
document.body.appendChild(h1Conten);
const div2 = document.createElement('div');

div2.setAttribute('id', 'wrap');// додати id в <div2>
document.body.appendChild(div2);
for (let i = 0; i < rules.length; i++) {
    const ruleTitle = rules[i].title;
    const ruleBody = rules[i].body;
    const div3 = document.createElement('div');
    div3.classList.add(`rules`, `rule${i + 1}`);
    const tegH2 = document.createElement('h2');
    tegH2.innerText = ruleTitle;
    const tegP = document.createElement('p');
    tegP.innerText = ruleBody;
    div3.appendChild(tegH2);
    div3.appendChild(tegP);
    div2.appendChild(div3);
}
// ===========================================================================

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (let i = 0; i < citiesWithId.length; i++) {
    const citiesWithIdElement = citiesWithId[i];

}
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    const usersWithIdElement = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        const citiesWithIdElement = citiesWithId[j];
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].addres = citiesWithId[j];
            usersWithCities.push(usersWithId[i])
        }
    }
}
console.log(usersWithCities);