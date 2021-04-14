// 1) створити функцію яка приймає масив та виводить його

function arrays(arr) {
    console.log(arr);
}

arrays([1, 2, 3]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function random(n) {  //n - кількість елементів масиву
    let array = [];
    for (let i = 0; i < n; i++) {
        const arrElement = Math.round(Math.random() * 50);
        array.push(arrElement);
    }
    arrays(array);
}

random(10);
random(25);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    let arr = [a, b, c];
    let min =arr[0];

    for (let i = 1; i < arr.length; i++) {
        const arrElement = arr[i];

        if (arr[i]<min) {
            min=arr[i]
        }
    }
    console.log(min);
}

min(520, 2, 20);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    let arr = [a, b, c];
    let max =arr[0];

    for (let i = 1; i < arr.length; i++) {
        const arrElement = arr[i];

        if (arr[i]>max) {
            max=arr[i]
        }
    }
    console.log(max);
}

max(520, 2, 20);


// 5) створити функцію яка повертає найбільше число з масиву

function maxNumberOfArray(arrays) {
    let max =arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        const arrElement = arrays[i];
        if (arrays[i]>max) {
            max=arrays[i]
        }
    }
    return max;
}

console.log(maxNumberOfArray([1, 500, 700, 4, 20000, 10, 2000, 1000]));

// 6) створити функцію яка повертає найменьше число з масиву

function minNumberOfArray(arrays) {
    let min =arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        const arrElement = arrays[i];
        if (arrays[i]<min) {
            min=arrays[i]
        }
    }
    return min;
}

console.log(minNumberOfArray([1, 500, 700, 0, 20000, 10, 2000, 1000]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function arraysOfNumber(arraysNumber) {
    let sum = 0;
    for (let i = 0; i < arraysNumber.length; i++) {
        const arrElement = arraysNumber[i];
        sum += arraysNumber[i];
    }
    return sum;
}

console.log(arraysOfNumber([1, 500, 20, 4, 7, 15]));


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrOfNumber(arrNumber) {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        const arrElement = arrNumber[i];
        sum += arrNumber[i];
    }
    return sum / arrNumber.length;
}

console.log(arrOfNumber([10, 5, 80, 100]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function arrObject(arrObj) {
    let arrKeys = []
    for (let value of arrObj) {
        for (let key in value) {
            arrKeys.push(key);
        }
    }
    return arrKeys;
}

console.log(arrObject([{name: 'Dima', age: 13}, {model: 'Camry'}]));


//або 2-й варіант

function arrKeys(arrObj) {
    let arrKeys = []
    for (let i = 0; i < arrObj.length; i++) {
        const arrElement = arrObj[i];
        let objectKeys = arrObj.keys(arrElement);
        for (let value of objectKeys) {
            arrKeys.push(value);
        }
    }
    return arrKeys;
}

console.log(arrKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arraysObject(arrAnyObj) {
    let arrValues = []
    for (let i = 0; i < arrAnyObj.length; i++) {
        const arrElement = arrAnyObj[i];
        let objectVelues = Object.values(arrElement);
        for (let value of objectVelues) {
            arrValues.push(value);
        }
    }
    return arrValues;
}

console.log(arraysObject([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumElementOfArrays(array1, array2) {
    let arrSumElementsOfArrays = [];
    for (let i = 0; i < array1.length; i++) {
        const arr1Element = array1[i];
        for (let j = 0; j < array2.length; j++) {
            const arr2Element = array2[j];
            if (i === j) {
                let sumElementOfArrays = array1[i] + array2[j];
                arrSumElementsOfArrays.push(sumElementOfArrays);
            }
        }
    }
    return arrSumElementsOfArrays;
}

console.log(sumElementOfArrays([1, 2, 3, 4], [2, 3, 4, 5]));

// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function minMaxOfAnyAmountOfNambers(anyAmountOfNambers) {
    let arrNumbers = []
    for (let i = 0; i < anyAmountOfNambers; i++) {
        let number = prompt(`enter a number ${i + 1}`);
        console.log(number);
        arrNumbers.push(number);
    }
    arrNumbers.sort(function (a, b) {
            return a - b;
        }
    )
    console.log('amountOfNamber = ' + anyAmountOfNambers);
    console.log(' maxOfAnyAmountOfNambers = ' + arrNumbers[arrNumbers.length - 1]);
    return 'minOfAnyAmountOfNambers = ' + arrNumbers[0];
}

console.log(minMaxOfAnyAmountOfNambers(3));

//або 2-ий варіант

function AnyAmountOfNambers() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        arr.push(argument);
    }
    arr.sort(function (a, b) {
            return a - b;
        }
    )
    console.log(' maxOfAnyAmountOfNambers = ' + arr[arr.length - 1]);
    return 'minOfAnyAmountOfNambers = ' + arr[0];
}

console.log(AnyAmountOfNambers(1, 50, 2, 3, 100, 600, 8, 900, 550));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

function returnValueOrKays(arrAnyObj) {
    let arrValueOrKays = [];
    let returnValueOrKays = prompt('Для того, щоб повернути масив ключів, виберіть - 1, Для того, щоб повернути масив значень, виберіть - 0');
    console.log(returnValueOrKays);
    switch (returnValueOrKays) {
        case '0':
            for (let i = 0; i < arrAnyObj.length; i++) {
                const arrElement = arrAnyObj[i];
                let objectValues = Object.values(arrElement);

                for (let value of objectValues) {
                    arrValueOrKays.push(value);
                }
            }
            return arrValueOrKays;
        case '1':
            for (let value of arrAnyObj) {
                for (let kay in value) {
                    arrValueOrKays.push(kay);
                }
            }
            return arrValueOrKays;
        default:
            return 'введено некоректне значення';
    }
}

console.log(returnValueOrKays([{name: 'Dima', age: 13}, {model: 'Camry'}]));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function objectIndex(arr, index) {
    let a1 = arr[index];
    let a2 = arr[index+1];
    arr[index] =a2;
    arr[index+1] = a1;
    console.log(arr);
}

objectIndex([9, 8, 0, 4], 0);
objectIndex([9, 8, 0, 4], 1);
objectIndex([9, 8, 0, 4], 2);

// function objectIndex(arr, index) {
//     let rezultat = [];
//     let newArray = [];
//     newArray.push(arr[index + 1]);
//     newArray.push(arr[index]);
//     for (let i = 0; i < arr.length; i++) {
//         if (i === index) {
//             rezultat.push(newArray[0]);
//             rezultat.push(newArray[1]);
//             i = i + 1;
//         } else {
//             rezultat.push(arr[i])
//         }
//     }
//     console.log(rezultat);
// }

// objectIndex([9, 8, 0, 4], 0);
// objectIndex([9, 8, 0, 4], 1);
// objectIndex([9, 8, 0, 4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function newArray(arr) {
    for (let i = arr.length - 2; i >= 0; i--) {
        const arrayElement = arr[i];
        if (arrayElement === 0) {
            arr.splice(i, 1);
            arr.push(arrayElement);
        }
    }
    console.log(arr);
}

newArray([1, 0, 6, 0, 3]);
newArray([0, 1, 2, 3, 4]);
newArray([0, 0, 1, 0]);

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function normalizesTheName(nameString) {
    let array = nameString.trim().split(' ')
    let newArray = [];
    newArray.push(array[0]);
    newArray.push(array[array.length - 1]);
    console.log(newArray.join(' '));
}

normalizesTheName('    Harry       Potter      ');
normalizesTheName('    Ron       Whisley      ');
normalizesTheName('    Hermione       Granger      ');
// ============================================================================================


// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function add() {
    let div = document.createElement('div');
    div.innerText = 'Hello owu';
    document.body.appendChild(div);
}

add();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addContent(typeOfElement, content) {
    let element = document.createElement(typeOfElement);
    element.innerText = content;
    document.body.appendChild(element);
}

addContent('p', 'Додає в боді елемент з текстом');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту,
// в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці

function arrCar(typeElement, car) {
    let element = document.createElement(typeElement);
    document.body.appendChild(element);
    for (let i = 0; i < car.length; i++) {
        const carElement = car[i];
        let blokCar = document.createElement(typeElement);
        for (let j = 0; j < Object.keys(carElement).length; j++) {
            blokCar.innerText += ' ' + (Object.keys(carElement))[j] + ': ' + (Object.values(carElement))[j] + ',';
            element.appendChild(blokCar);
        }
    }
}

arrCar('div', [{model: 'lada', color: 'green', age: 2000}, {model: 'BMW', color: 'red', age: 2010}, {
    model: 'lada',
    color: 'yellow',
    age: 1990
}]);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
function arrayCar(typeElement, car) {
    let element = document.createElement(typeElement);
    document.body.appendChild(element);
    for (let i = 0; i < car.length; i++) {
        const carElement = car[i];
        let blokCar = document.createElement(typeElement);
        for (let j = 0; j < Object.keys(carElement).length; j++) {
            let blocProperty = document.createElement(typeElement);
            blocProperty.innerText = (Object.keys(carElement))[j] + ': ' + (Object.values(carElement))[j];
            blokCar.appendChild(blocProperty);
            element.appendChild(blokCar);
        }
    }
}

arrayCar('div', [{model: 'lada', color: 'green', age: 2000}, {model: 'BMW', color: 'red', age: 2010}, {
    model: 'lada',
    color: 'yellow',
    age: 1990
}]);
