// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arreayWord = ['aga', 'jga', 'kaka', 'gnom'];
let elementInput = document.getElementById('input1');
let elementButton = document.getElementById('click');

elementButton.onclick = (ev => {
        if (arreayWord.indexOf(elementInput.value)>=0) {
            alert('нецензурне слово')
      }
})
//
// // // - Сворити масив нецензцрних слів.
// // //     Сворити інпут текстового типу.
// // //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // //     Кинути алерт з попередженням у випадку якщо містить.
// // //     Перевірку робити при натисканні на кнопку
let arreayWord2 = ['agaga', 'jga', 'kaka', 'gnom'];
let elementInput2 = document.getElementById('input2');
let elementButton2 = document.getElementById('click my');

elementButton2.onclick = (ev => {
    let words = elementInput2.value;
    let arreywords = words.split(' ');
    console.log(arreywords);
    let flag = false;
    arreywords.forEach(word =>
    {flag = arreayWord2.includes(word);
          if (flag) {
            alert('нецензурне слово')
        }
    })
  })

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

for (let i = 1; i <= 8; i++) {
    let h = document.querySelector(`div.rule${i} h2`)
    let p = document.querySelector(`div.rule${i} p`)
    p.innerHTML = ` <a name="menu${i}"></a>` + p.innerHTML
    document.write(h.innerHTML)
    let a = document.createElement('a');
    a.setAttribute('href', `#menu${i}`);
    a.innerHTML = `<button>${i}правилo бойцовского клуба</button>`
    document.body.appendChild(a)
    document.write('<br>' + p.innerHTML + '<br>' + '<br>')
}

// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.

let element1 = document.querySelector('#check1');
let element2 = document.querySelector('#check2');
let element3 = document.querySelector('#check3');
let block = document.getElementsByClassName('box')[0];

usersWithAddress.forEach(value => {let div = document.createElement('div');
div.innerText = JSON.stringify(value);
block.appendChild(div)
})
// // 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// // Дані виводить в документ
const nevArray = usersWithAddress.filter(value => {
    if (!value.isMarried) {

        return value
    }
    -1
});

element1.onclick = () => {
        block.innerText = ' '
        if (element1.checked) {
            let div = document.createElement('div');
            div.innerText = JSON.stringify(nevArray);
            block.appendChild(div)
        }
        else
             usersWithAddress.forEach(value => {let div = document.createElement('div');
            div.innerText = JSON.stringify(value);
            block.appendChild(div)
        })
}
// // 2й - залишає старших 29 років включно
// // Дані виводить в документ
let nevArray1 = nevArray.filter(value => {
    if (value.age>=29) {
        return value}
    -1
});

element2.onclick = () => {
    block.innerText = ' '
    if (element2.checked) {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(nevArray1);
        block.appendChild(div)
    }
    else nevArray.forEach(value => {let div = document.createElement('div');
        div.innerText = JSON.stringify(value);
        block.appendChild(div)
    })
}
// // 3й - залишає тих в кого місто Київ
// // Дані виводить в документ
let nevArray2 = nevArray1.filter(value => {
    if (value.address.city==='Kyiv') {
        return value}
    -1
});
element3.onclick = () => {
    block.innerText = ' '
    if (element3.checked) {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(nevArray2);
        block.appendChild(div)
    } else nevArray1.forEach(value => {let div = document.createElement('div');
        div.innerText = JSON.stringify(value);
        block.appendChild(div)
    })

}





