//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = "hello";
let b ="owu";
let c = "com";
let d = "ua";
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let  i = 3.14;
let j = 2.7;
let k = 16;
let l =true;
let m = false;
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
alert(a);
document.write(a);
document.write('<br>');

console.log(b);
alert(b);
document.write(b);
document.write('<br>');

console.log(c);
alert(c);
document.write(c);
document.write('<br>');

console.log(d);
alert(d);
document.write(d);
document.write('<br>');

console.log(e);
alert(e);
document.write(e);
document.write('<br>');

console.log(f);
alert(f);
document.write(f);
document.write('<br>');

console.log(g);
alert(g);
document.write(g);
document.write('<br>');

console.log(h);
alert(h);
document.write(h);
document.write('<br>');

console.log(i);
alert(i);
document.write(i);
document.write('<br>');

console.log(j);
alert(j);
document.write(j);

document.write('<br>');
console.log(k);
alert(k);
document.write(k);
document.write('<br>');

console.log(l);
alert(l);
document.write(l);
document.write('<br>');

console.log(m);
alert(m);
document.write(m);
document.write('<br>');




// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
a ="ddd";
b=5;
c=10;
d=15;
e=12;
f="hello";
g=25;
h=10;
i="owu";
j=30;
k=555;
l=1000;
m=200;
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(a);
alert(a);
document.write(a);
document.write('<br>');

console.log(b);
alert(b);
document.write(b);
document.write('<br>');

console.log(c);
alert(c);
document.write(c);
document.write('<br>');

console.log(d);
alert(d);
document.write(d);
document.write('<br>');

console.log(e);
alert(e);
document.write(e);
document.write('<br>');

console.log(f);
alert(f);
document.write(f);
document.write('<br>');

console.log(g);
alert(g);
document.write(g);
document.write('<br>');

console.log(h);
alert(h);
document.write(h);
document.write('<br>');

console.log(i);
alert(i);
document.write(i);
document.write('<br>');

console.log(j);
alert(j);
document.write(j);
document.write('<br>');

console.log(k);
alert(k);
document.write(k);
document.write('<br>');

console.log(l);
alert(l);
document.write(l);
document.write('<br>');

console.log(m);
alert(m);
document.write(m);
document.write('<br>');


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt("name");
let surname = prompt("surname");
let age = prompt("age");
console.log("Вітаю " + name + " "+ surname+ ". Тобі " + age + " років");

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let xxx =name+" "+surname+" "+age;
console.log(xxx);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let numeric1 = prompt("введіть 1-е число");
let numeric2= prompt("введіть 2-е число");
let numeric3= prompt("введіть 3-е число");
numeric1=parseInt(numeric1);
numeric2=parseInt(numeric2);
numeric3=parseInt(numeric3);
console.log(numeric1);
console.log(numeric2);
console.log(numeric3);

// 2-ий варіант

console.log(parseInt(prompt("введіть 1-е число")))
console.log(parseInt(prompt("введіть 2-е число")));
console.log(parseInt(prompt("введіть 3-е число")));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt.
// Додати їх всі мож собою і результат вивести в консоль.
let numeric1 = prompt("введіть 1-е число");
let numeric2 = prompt("введіть 2-е число");
let numeric3 = prompt("введіть 3-е число");
let numeric4 = prompt("введіть 4-е число");
numeric1 =parseInt(numeric1);
numeric2=parseInt(numeric2);
numeric3=parseInt(numeric3);
numeric4=parseInt(numeric4);
numeric=numeric1+numeric2+numeric3+numeric4;
console.log(numeric);

// або 2-й варіант

console.log(parseInt(prompt("введіть 1-е число"))+parseInt(prompt("введіть 2-е число"))
    +parseInt(prompt("введіть 3-е число"))+parseInt(prompt("введіть 4-е число")));

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let numeric1=parseFloat(prompt("введіть 1-е число з плаваючою точкою"));
let numeric2=parseFloat(prompt("введіть 2-е число з плаваючою точкою"));
let numeric3=parseFloat(prompt("введіть 3-е число з плаваючою точкою"));
let result=numeric1+numeric2+numeric3;
console.log(result);
// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// Просумувати їх між собою. Результат вивести в консоль.
let numeric1=prompt("введіть 1-е число з плаваючою точкою");
let numeric2=prompt("введіть 2-е число з плаваючою точкою");
let numeric3=prompt("введіть 3-е число з плаваючою точкою");
numeric1=Math.round(numeric1);
numeric2=Math.round(numeric2);
numeric3=Math.round(numeric3);
let result=numeric1+numeric2+numeric3;
console.log(result);

//або 2-й варіант

let result = Math.round(prompt("введіть 1-е число з плаваючою точкою"))
    + Math.round(prompt("введіть 2-е число з плаваючою точкою"))
    + Math.round(prompt("введіть 3-е число з плаваючою точкою"));
console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.П
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
let numeric1=prompt("введіть 1-е число");
let numeric2=prompt("введіть 2-е число");
let result=Math.pow(numeric1,numeric2);
console.log(result);

// 2-ий варіант

console.log(Math.pow(prompt("введіть 1-е число"),prompt("введіть 2-е число")));

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 !==10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );/false
// console.log(34 > 33 && 23 < 90 );/true
// console.log(99 > 100 && 45 > 12 );/false
// console.log(132 > 100 || 45 < 12 );/true
// console.log(111 > 11 || 45 < 111 );/true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );/true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );/true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );/false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));/true
// console.log(!!'-1');/true
// console.log(!!-1);/true
// console.log(!!'0');/true
// console.log(!!'null');/true
// console.log(!!'undefined');/true
// console.log(!!(3/'owu'));/false
// console.log((111 > 11 || 45 < 111) ||  !!'0');/true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));/false