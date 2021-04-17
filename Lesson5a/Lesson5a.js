// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, produser, age, maxSpeed, power,) {
    this.model = model;
    this.produser = produser;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.power = power;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`model:  ${this.model},  produser:  ${this.produser},  age: ${this.age},  maxSpeed: ${this.maxSpeed}, power: ${this.power}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.age = newValue;
        console.log(newValue);
    }


    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

function Driver(name, ageDriver) {
    this.name = name;
    this.ageDriver = ageDriver;
}

let driver1 = new Driver('Oleg', 25);
let driver2 = new Driver('Igor', 30);
let driver3 = new Driver('Oksana', 20);

let car1 = new Car('audi', 'Volkswagen Group', 2000, 200, 300);
let car2 = new Car('BMW', 'BMW', 2010, 250, 500);
let car3 = new Car('Honda', 'honda', 2005, 230, 400);

car1.drive();
car2.drive();
car3.drive();

car1.info();
car2.info();
car3.info();

car1.increaseMaxSpeed(20);
car2.increaseMaxSpeed(50);
car3.increaseMaxSpeed(80);

car1.changeYear(2018);
car2.changeYear(1995);
car3.changeYear(2002);

car1.addDriver(driver1);
car2.addDriver(driver2);
car3.addDriver(driver3);

console.log(car1);
console.log(car2);
console.log(car3);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість
// , об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Cars {
    constructor(model, produser, age, maxSpeed, power,) {
        this.model = model;
        this.produser = produser;
        this.age = age;
        this.maxSpeed = maxSpeed;
        this.power = power;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model:  ${this.model},  produser:  ${this.produser},  age: ${this.age},  maxSpeed: ${this.maxSpeed}, power: ${this.power}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.age = newValue;
        console.log(newValue);
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class Drivers {
    constructor(name, ageDriver) {
        this.name = name;
        this.ageDriver = ageDriver;
    }
}

let driver_1 = new Drivers('Olga', 40);
let driver_2 = new Drivers('Vlad', 30);
let driver_3 = new Drivers('Petro', 25);

let cars1 = new Car('audi', 'Volkswagen Group', 1990, 150, 250);
let cars2 = new Car('BMW', 'BMW', 2000, 200, 400);
let cars3 = new Car('Honda', 'honda', 2011, 220, 600);

cars1.drive();
cars2.drive();
cars3.drive();

cars1.info();
cars2.info();
cars3.info();

cars1.increaseMaxSpeed(10);
cars2.increaseMaxSpeed(60);
cars3.increaseMaxSpeed(55);

cars1.changeYear(2005);
cars2.changeYear(2010);
cars3.changeYear(2020);

console.log(cars1);
console.log(cars2);
console.log(cars3);

cars1.addDriver(driver_1);
cars2.addDriver(driver_2);
cars3.addDriver(driver_3);

console.log(cars1);
console.log(cars2);
console.log(cars3);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
class Cinderella {
    constructor(nameCinderella, ageCinderella, footSize) {
        this.nameCinderella = nameCinderella;
        this.ageCinderella = ageCinderella;
        this.footSize = footSize
    }
}

class Prince {
    constructor(namePrince, agePrince, shoeSize) {
        this.namePrince = namePrince;
        this.agePrince = agePrince;
        this.shoeSize = shoeSize;
    }
}

let cinderella1 = new Cinderella('Olga', 16, 35);
let cinderella2 = new Cinderella('Anna', 17, 35);
let cinderella3 = new Cinderella('Mary', 16, 34);
let cinderella4 = new Cinderella('Kateryna', 18, 36);
let cinderella5 = new Cinderella('Anastasia', 19, 37);
let cinderella6 = new Cinderella('Inna', 20, 40);
let cinderella7 = new Cinderella('Natali', 21, 39);
let cinderella8 = new Cinderella('Viktoria', 17, 38);
let cinderella9 = new Cinderella('Oksana', 20, 36);
let cinderella10 = new Cinderella('Ilina', 19, 39);

let prince = new Prince('Aleks', 23, 34);
let cinderellas = [];

cinderellas.push(cinderella1);
cinderellas.push(cinderella2);
cinderellas.push(cinderella3);
cinderellas.push(cinderella4);
cinderellas.push(cinderella5);
cinderellas.push(cinderella6);
cinderellas.push(cinderella7);
cinderellas.push(cinderella8);
cinderellas.push(cinderella9);
cinderellas.push(cinderella10);


for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(`cinderella - ${cinderella.nameCinderella}, age - ${cinderella.ageCinderella}, foot size - ${cinderella.footSize}  повинна бути з принцем`);
    }
}

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderellas(nameCinderella, ageCinderella, footSize) {
    this.nameCinderella = nameCinderella;
    this.ageCinderella = ageCinderella;
    this.footSize = footSize
}

function Prinse(namePrince, agePrince, shoeSize) {
    this.namePrince = namePrince;
    this.agePrince = agePrince;
    this.shoeSize = shoeSize;
    this.cinderella = function (cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.shoeSize) {
                console.log(`cinderella - ${cinderella.nameCinderella}, age - ${cinderella.ageCinderella}, foot size - ${cinderella.footSize}  повинна бути з принцем`);
            }
        }
    }
}


let cinderellas1 = new Cinderella('Olga', 16, 35);
let cinderellas2 = new Cinderella('Anna', 17, 34);
let cinderellas3 = new Cinderella('Mary', 16, 35);
let cinderellas4 = new Cinderella('Kateryna', 18, 36);
let cinderellas5 = new Cinderella('Anastasia', 19, 37);
let cinderellas6 = new Cinderella('Inna', 20, 40);
let cinderellas7 = new Cinderella('Natali', 21, 39);
let cinderellas8 = new Cinderella('Viktoria', 17, 38);
let cinderellas9 = new Cinderella('Oksana', 20, 36);
let cinderellas10 = new Cinderella('Ilina', 19, 39);

let prinse = new Prinse('Aleks', 23, 34);

let cinderellas_ = [];

cinderellas_.push(cinderellas1);
cinderellas_.push(cinderellas2);
cinderellas_.push(cinderellas3);
cinderellas_.push(cinderellas4);
cinderellas_.push(cinderellas5);
cinderellas_.push(cinderellas6);
cinderellas_.push(cinderellas7);
cinderellas_.push(cinderellas8);
cinderellas_.push(cinderellas9);
cinderellas_.push(cinderellas10);

prinse.cinderella(cinderellas_);


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Teg(titleOfTeg, action, arraysAttributes) {
    this.titleOfTeg = titleOfTeg;
    this.action = action;
    this.arraysAttributes = arraysAttributes;

}

function Atributes(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;

}


let accesskey = new Atributes('accesskey', 'Активация ссылки с помощью комбинации клавиш');
let target = new Atributes('target', 'Имя окна или фрейма, куда браузер будет загружать документ.');

let align = new Atributes('align', 'Задает выравнивание содержимого тега <div>');
let title = new Atributes('title', 'Добавляет всплывающую подсказку к содержимому');

let alignH1 = new Atributes('align', 'Определяет выравнивание заголовка');

let list = new Atributes('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.');
let size = new Atributes('size', 'Ширина текстового поля');

let action = new Atributes('action', 'Адрес программы или документа, который обрабатывает данные формы');
let novalidate = new Atributes('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода');

let disabled = new Atributes('disabled', 'Заблокировать для доступа элемент списка');
let value = new Atributes('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов');

let form = new Atributes('form', 'Связывает список с формой.');
let disabledSelect = new Atributes('disabled', 'Блокирует доступ и изменение элемента');


let atributesTegA = [accesskey, target];
let atributesTegDiv = [align, title];
let atributesTegH1 = [alignH1];
let atributesTegSpan = [];
let atributesTegInput = [list, size];
let atributesTegFrom = [action, novalidate];
let atributesTegOption = [disabled, value];
let atributesTegSelect = [form, disabledSelect];


let a = new Teg('a',
    'является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    atributesTegA);
let div = new Teg('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', atributesTegDiv);
let h1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', atributesTegH1);
let span = new Teg('span', 'предназначен для определения строчных элементов документа.', atributesTegSpan);
let input = new Teg('input', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', atributesTegInput);
let from = new Teg('from', 'устанавливает форму на веб-странице', atributesTegFrom);
let option = new Teg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', atributesTegOption);
let select = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    atributesTegSelect);

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(from);
console.log(option);
console.log(select);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//

class Tegs {
    constructor(titleOfTeg, action, arraysAttributes) {
        this.titleOfTeg = titleOfTeg;
        this.action = action;
        this.arraysAttributes = arraysAttributes;

    }
}

class Atribute {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let accesskey_ = new Atribute('accesskey', 'Активация ссылки с помощью комбинации клавиш');
let target_ = new Atribute('target', 'Имя окна или фрейма, куда браузер будет загружать документ.');

let align_ = new Atribute('align', 'Задает выравнивание содержимого тега <div>');
let title_ = new Atribute('title', 'Добавляет всплывающую подсказку к содержимому');

let alignH1_ = new Atribute('align', 'Определяет выравнивание заголовка');

let list_ = new Atribute('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.');
let size_ = new Atribute('size', 'Ширина текстового поля');

let action_ = new Atribute('action', 'Адрес программы или документа, который обрабатывает данные формы');
let novalidate_ = new Atribute('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода');

let disabled_ = new Atribute('disabled', 'Заблокировать для доступа элемент списка');
let value_ = new Atribute('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов');

let form_ = new Atribute('form', 'Связывает список с формой.');
let disabledSelect_ = new Atribute('disabled', 'Блокирует доступ и изменение элемента');


let atributesTegA_ = [accesskey_, target_];
let atributesTegDiv_ = [align_, title_];
let atributesTegH1_ = [alignH1_];
let atributesTegSpan_ = [];
let atributesTegInput_ = [list_, size_];
let atributesTegFrom_ = [action_, novalidate_];
let atributesTegOption_ = [disabled_, value_];
let atributesTegSelect_ = [form_, disabledSelect_];


let tegA = new Teg('a',
    'является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    atributesTegA);
let tegDiv = new Teg('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', atributesTegDiv);
let tegH1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', atributesTegH1);
let tegSpan = new Teg('span', 'предназначен для определения строчных элементов документа.', atributesTegSpan);
let tegInput = new Teg('input', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', atributesTegInput);
let tegFrom = new Teg('from', 'устанавливает форму на веб-странице', atributesTegFrom);
let tegOption = new Teg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', atributesTegOption);
let tegSelect = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    atributesTegSelect);

console.log(tegA);
console.log(tegDiv);
console.log(tegH1);
console.log(tegSpan);
console.log(tegInput);
console.log(tegFrom);
console.log(tegOption);
console.log(tegSelect);


