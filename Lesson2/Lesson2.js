// --створити масив з:
//     - з 5 числових значень
let arr =[1,5,10,7,9];
// - з 5 стічкових значень
let arr1 = ["Ivan", "Olga", "Taras", "Anna", "Viktor"];
// - з 5 значень стрічкового, числового та булевого типу
let arr2 = [1, true, "Olga", 5, false];

// - та вивести його в консоль
//
console.log(arr2);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let arr3 = [];
arr3[0] = "Olga";
arr3[1] = true;
arr3[2] = 10;
arr3[4] = "2";
console.log(arr3);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let arr11 =["<div> За </div>", "<div> допомогою </div>","<div> циклу for і</div>", "<div> document.write() </div>"
    , "<div> вивести</div>", "<div> 10</div>", "<div> блоків</div>", "<div> div</div>"
    , "<div>з довільним</div>", "<div> текстом всередині</div>"];
for (let value of arr11) {
    document.write(value);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let arr12 = [];

for (let i = 0; i<10; i++) {
arr12[i]=`<div>За допомогою циклу for ${i}</div>`;
    document.write(arr12[i]);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let arr13 = ["<h1> 11111 </h1>", "<h1> 22222 </h1>", "<h1> 33333 </h1>", "<h1> 44444 </h1>"
    , "<h1> 55555 </h1>", "<h1> 66666 </h1>", "<h1> 77777 </h1>", "<h1> 88888 </h1>", "<h1> 99999 </h1>"
    , "<h1> 1010101010 </h1>", "<h1> 1111111111 </h1>", "<h1> 1212121212 </h1>", "<h1> 1313131313 </h1>"
    , "<h1> 1414141414 </h1>", "<h1> 1515151515 </h1>", "<h1> 1616161616 </h1>", "<h1> 1717171717 </h1>"
    , "<h1> 1818181818 </h1>", "<h1> 1919191919 </h1>", "<h1> 2020202020 </h1>"];
let i = 0;
while (i < arr13.length) {
    document.write(arr13[i]);
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let arr14 = [];
 let i = 0;
 while (i < 20) {
     arr14[i] = `<h1> За допомогою циклу while  ${i} </h1>`;
     document.write(arr14[i]);
     i++;
 }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, 5, 8, 22, 66, 278, 8, 16, 85, 100];
for (const  value of arr4) {
    console.log(value);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr5 = ["Olga", "22", "true", "ivan", "false", "250", "Oleg", "xxxxx", "Anna", "200"];
for (const  value of arr5) {
    console.log(value);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr6 = [1, true, 1, true, "Olga", 500, false, "22", 250, true];
for (const  value of arr6) {
    console.log(value);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if
// та typeof вивести тільки булеві елементи
let arr7 = [1 , 100, true, "200", false, 20, true, false, true, '110'];
for (const  value of arr7) {
    if (typeof value === "boolean") {
        console.log(value);

    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr8 = [1, 25, true, "200", false, 11, "Olga", 25, 100, false];
for (const  value of arr8) {
    if (typeof value === "number") {
        console.log(value);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки стрічкові елементи
let arr9 = ["Olga", 25, 100, true, "15", false, 255, 600, "Anna", "700"];
for (const  value of arr9) {
    if (typeof value === "string") {
        console.log(value);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr10 = [];
arr10[0] = 1;
arr10[1] = "100";
arr10[2] = 150;
arr10[3] = 11;
arr10[4] = true;
arr10[5] = "Olga";
arr10[6] = false;
arr10[7] = 120;
arr10[8] = 111;
arr10[9] = "xxx";
for (const  value of arr10 ) {
    console.log(value);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
   console.log(i);
   document.write(i+ "<br>");
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + "<br>");
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i=i+2) {
    console.log(i);
    document.write(i + "<br>");
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i%2===0) {
        console.log(i);
        document.write(i+ "<br>");
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i%2!==0) {
        console.log(i);
        document.write(i+ "<br>");
    }
}
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let i = 0; i<=2; i++) {
    for (let j = 0; j < 60; j++) {
        document.write(i + ":" + j + "<br>");
        if (i === 2 & j >= 0) {
            break;
        }
    }
}
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

        for (let i = 0; i<=2; i++) {
            for (let j = 0; j < 60; j++) {
                for (let k = 0; k < 60; k++) {
                    document.write(i + ":" + j + ":" + k + "<br>");
                    if (i === 2 & j >= 20 & k >= 0) {
                          k = 60;
                          j = 60;
                    }
                }
            }
        }
