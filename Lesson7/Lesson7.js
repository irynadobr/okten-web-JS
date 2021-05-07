// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникавл елемент с id="text".

let elementP = document.createElement('p');
elementP.setAttribute('id', 'text');
elementP.innerText = 'Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".'

//elementP.addEventListener('click', event => element.hidden = true);

elementP.onclick = (ev => elementP.hidden = true);
document.body.appendChild(elementP);

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//let elementButton = document.getElementById('click');

let elementButton = document.createElement('button');
elementButton.setAttribute('id', 'click');
elementButton.innerText = 'click my';
elementButton.onclick = (ev => elementButton.hidden = true);
document.body.appendChild(elementButton);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

let elementBr = document.createElement('br');
let elementInput = document.createElement('input');
elementInput.setAttribute('type', 'text1');
elementInput.setAttribute('id', 'input1');
let elementButton1 = document.createElement('button');
elementButton1.setAttribute('id', 'age');
elementButton1.innerText = 'enter age';
document.body.appendChild(elementBr);
document.body.appendChild(elementInput);
document.body.appendChild(elementButton1);

elementButton1.onclick = (ev => {
    console.log(+elementInput.value);
    const msg = +elementInput.value > 18 ? 'age >18' : 'age<=18';
    alert(msg)
});

// - Створіть меню, яке розгортається/згортається при клику

let elementBr1 = document.createElement('br');
let elementButton2 = document.createElement("button");
elementButton2.setAttribute('id', 'menu1');
elementButton2.innerText = 'menu';
let elementUl = document.createElement('ul');
elementUl.setAttribute('id', 'menu');
let elementLi1 = document.createElement("li");
elementLi1.innerText = '1.';
let elementLi2 = document.createElement("li");
elementLi2.innerText = '2.';
let elementLi3 = document.createElement("li");
elementLi3.innerText = '3.';
let elementLi4 = document.createElement("li");
elementLi4.innerText = '4.';
let elementLi5 = document.createElement("li");
elementLi5.innerText = '5.';
let flag = true;
elementButton2.onclick = (ev => {
    menu.style.display = flag ? 'none' : 'block';
    flag = !flag
})
document.body.appendChild(elementBr1);
document.body.appendChild(elementButton2);
document.body.appendChild(elementUl);
elementUl.appendChild(elementLi1);
elementUl.appendChild(elementLi2);
elementUl.appendChild(elementLi3);
elementUl.appendChild(elementLi4);
elementUl.appendChild(elementLi5);

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

const comments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        "postId": 2,
        "id": 6,
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        "postId": 2,
        "id": 7,
        "name": "repellat consequatur praesentium vel minus molestias voluptatum",
        "email": "Dallas@ole.me",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    }];

// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

let elementDiv = document.createElement('div');
document.body.appendChild(elementDiv);
comments.forEach(comment => {
    const div = document.createElement('div');
    const elementH1 = document.createElement('h1');
    const elementP = document.createElement('p');
    const elementButton = document.createElement('button');
    elementButton.innerText = 'hide body';
    elementH1.innerHTML = ` name: ${comment.name}`;
    elementP.innerHTML = `body: ${comment.body}`;
    elementButton.onclick = (ev => {
        elementP.hidden = !elementP.hidden
    });
    elementDiv.appendChild(div);
    div.appendChild(elementH1)
    div.appendChild(elementP);
    div.appendChild(elementButton);
})

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let forma1 = document.createElement('form');
forma1.setAttribute('name', 'form1');

let forma2 = document.createElement('form');
forma2.setAttribute('name', 'form2');
let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'input1');

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'input2');

let input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('name', 'input3');

let input4 = document.createElement('input');
input4.setAttribute('type', 'text');
input4.setAttribute('name', 'input4');

const buttonForm = document.createElement('button');
buttonForm.setAttribute('id', 'but1');
buttonForm.innerText = 'information on forms ';

document.body.appendChild(forma1);
document.body.appendChild(forma2);
document.body.appendChild(buttonForm);

forma1.appendChild(input1);
forma1.appendChild(input2);
forma2.appendChild(input3);
forma2.appendChild(input4);

buttonForm.onclick = (ev => {
    const forms = document.forms;
    for (const form of forms) {
        console.log(form.name + ':')
        for (const formElement of form) {
            console.log(formElement.value);
        }
    }
})

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

const createTable = (numberTr, numberTd, element) => {
    let elementTable = document.createElement(element);
    let table = document.createElement('table');
    for (let i = 1; i <= numberTr; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 1; j <= numberTd; j++) {
            let td = document.createElement('td');
            td.innerText = `${i}:${j}`
            tr.appendChild(td)
        }
    }
    document.body.appendChild(elementTable);
    elementTable.appendChild(table);
}
createTable(2, 4, 'div');

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
let divCarrousel = document.createElement('div');
divCarrousel.setAttribute('id', 'carrousel');
let img = document.createElement('img');
img.setAttribute('src', './img/image1.jpg');
img.setAttribute('alt', 'image1');
img.style.width = '400px';
let buttonLeft = document.createElement('button');
buttonLeft.setAttribute('id', 'butLeft');
buttonLeft.innerText = 'Left';
let buttonRight = document.createElement('button');
buttonRight.setAttribute('id', 'butRight');
buttonRight.innerText = 'Right';

document.body.appendChild(divCarrousel);
divCarrousel.appendChild(img);
divCarrousel.appendChild(buttonLeft);
divCarrousel.appendChild(buttonRight);

const arrayImg = [
    {
        alt: 'image1',
        url: './img/image1.jpg'
    },
    {
        alt: 'image2',
        url: './img/image2.jpg'
    },
    {
        alt: 'image3',
        url: './img/image3.jpg'
    },
];
let index = 0;
buttonLeft.onclick = (ev => {
        if (index - 1 < 0) {
            index = arrayImg.length - 1;
        } else {
            index--;
        }
        img.src = arrayImg[index].url;
        img.alt = arrayImg[index].alt;
    }
)

buttonRight.onclick = (ev => {
    if (index + 1 > arrayImg.length - 1) {
        index = 0;
    } else {
        index++;
    }
    img.src = arrayImg[index].url;
    img.alt = arrayImg[index].alt;
})