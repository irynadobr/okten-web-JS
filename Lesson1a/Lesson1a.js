// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str ="Привіт";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str); // string
console.log(typeof num);//number
console.log(typeof flag);//boolean
console.log(typeof txt);//string

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних операцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
//
let a1;
let a2;
let a3;
let a4;
let a5;
a1 = 60/2+4;
console.log(a1);
a2=2*1+20/2;
console.log(a2);
a3 = 100-(60/2+4);
console.log(a3);
a4 = (10+20*2)*2-10;
console.log(a4);
a5 = 100/2+80/2-3;
console.log(a5);
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);


// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
//
let height = 23;
let  width = 10;
let  s = height*width;
console.log("площа прямокутника = " + s + " см");


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
let heightC = 10;
let dc = 4;
let v = 3.14 * heightC*Math.pow(dc/2, 2);
console.log("об'єм циліндра = " + v + " м");


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или
// оператор возведения в степень ** ).
//
let n =3;
let m = 4;
let k2 = Math.pow(n,2)+Math.pow(m,2);//квадрат гіпотенузи
let k = Math.sqrt(k2);//  корінь квадратний від k
console.log("гіпотенуза = "+ k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную strr и выводить спомощью document.write,
// alert и console.log
//
let strr = "Hello world";
document.write(strr);
alert(strr);
console.log(strr);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
alert("ПІБ - Іванова Ольга Петрівна\n вік - 18 \n хоббі - плавання");


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
let str1 = 'Хто ';
let str2 = 'ти ';
let str3 = 'такий ';
let concatenation = str1 + str2 +str3;
document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");// 205 стрічка, спочатку str - string, і змінна а сприймається як стрічка
// document.write(str - a + "<br/>");//15 стрічка
// document.write(str * "2" + "<br/>");//40 стрічка
// document.write(str / 2 + "<br/>");//10 стрічка


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")       // 3.14 число
//     parseInt("-7.875")     // -7.875 - число
// parseInt("435")            //  435 - число
// parseInt("Вася")           // NaN - не число, стрінгу символів не можна перетворити в число
//


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(st);
//
let st = prompt("Enter something", "ho-ho");
console.log(st);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert
let sum = parseInt(prompt("введіть перше число"))+parseInt(prompt("введіть друге число"));
alert(sum);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя,
// фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name = prompt("name");
let surName = prompt("surName");
let age = prompt("age");

alert("Добрий вечір, " + name + " " + surName+ ", мої вітання, що Вам "+age);



// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
let namber1 = prompt("1-е число");
let namber2 = prompt("2-е число");
let namber3 = prompt("3-е число");

if (namber1 > namber2 & namber1>namber3) {
    console.log(namber1);
    if (namber2>namber3){

        console.log(namber2);
        console.log(namber3);
    }
   else {

        console.log(namber3);
        console.log(namber2);
    }
} else
    if (namber2>namber1 & namber2>namber3){
        console.log(namber2)
        if (namber1>namber2){
            console.log(namber1);
            console.log(namber3);
        }
    else {
            console.log(namber3);
            console.log(namber1);
        }
    } else {
        console.log(namber3);
        if (namber1 > namber2) {
            console.log(namber1);
            console.log(namber2);
        } else {
            console.log(namber2);
            console.log(namber1);
        }
    }
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//

const color = prompt('Введіть колір світлофора');
    switch (color) {
        case 'зелений':
            console.log("йди!");
            break;
        case 'жовтий':
            console.log("почекай!");
            break;
        case "червоний":
            console.log("стій!");
            break;
        default:
            console.log("роби ,що хочеш!");
            break;

    }

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

const color = prompt('Введіть колір світлофора');
    const isRoadClear = confirm("дорога чиста");

switch (color) {
    case "зелений":
        isRoadClear? console.log("йди!"):console.log("почекай, поки порушники проїдуть");
        break;
    case "жовтий":
        !isRoadClear?console.log("почекай!"):console.log("стій все одно");
        break;
    case "червоний":
       isRoadClear?console.log("стій всеодно!"):console.log("стій і чекай");
        break;
    default:
        console.log("роби ,що хочеш!");
        break;

}