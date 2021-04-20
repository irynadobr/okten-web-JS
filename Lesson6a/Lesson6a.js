// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

let newCarsOver3 = cars.filter(value => {
    if (value.volume > 3) {
        return value
    }
})
console.log(newCarsOver3);
// - двигун = 2л
let newCarsEqual2 = cars.filter(value => {
    if (value.volume === 2) {
        return value
    }
})
console.log(newCarsEqual2);
// - виробник мерс
let newCarsMers = cars.filter(value => {
    if (value.producer === 'mercedes') {
        return value
    }
})
console.log(newCarsMers);

// - двигун більше 3х літрів + виробник мерседес
let newCarsOver3Mers = cars.filter(value => {
    if (value.volume > 3 && value.producer === 'mercedes') {
        return value
    }
})
console.log(newCarsOver3Mers);
// - двигун більше 3х літрів + виробник субару
let newCarsOver3Subaru = cars.filter(value => {
    if (value.volume > 3 && value.producer === 'subaru') {
        return value
    }
})
console.log(newCarsOver3Subaru);
// - сили більше ніж 300
let newCarsPowerOver300 = cars.filter(value => {
    if (value.power > 300) {
        return value
    }
})
console.log(newCarsPowerOver300);

// - сили більше ніж 300 + виробник субару
let newCarsPowerOver300Subaru = cars.filter(value => {
    if (value.power > 300 && value.producer === 'subaru') {
        return value
    }
})
console.log(newCarsPowerOver300Subaru);
// - мотор серіі ej
let newCarsPowerEngineEJ = cars.filter(value => {
    if (value.engine.startsWith('ej')) {
        return value
    }
})
console.log(newCarsPowerEngineEJ);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let newCarsPowerOver300SubaruEngineEJ = cars.filter(value => {
    if (value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')) {
        return value
    }
})
console.log(newCarsPowerOver300SubaruEngineEJ);
// - двигун меньше 3х літрів + виробник мерседес
let newCarsPowerOver300Mers = cars.filter(value => {
    if (value.power < 300 && value.producer === 'mercedes') {
        return value
    }
})
console.log(newCarsPowerOver300Mers);
// - двигун більше 2л + сили більше 250
let newCarsVolumeOver2PowerOver250 = cars.filter(value => {
    if (value.volume > 2 && value.power > 250) {
        return value
    }
})
console.log(newCarsVolumeOver2PowerOver250);

// - сили більше 250  + виробник бмв
let newCarsPowerOver250Bmv = cars.filter(value => {
    if (value.power > 250 && value.producer === 'bmw') {
        return value
    }
})
console.log(newCarsPowerOver250Bmv);


// - взять слдующий массив
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
//
// -- Відсортувати їх по ID

usersWithAddress.sort((a, b) => {
    if (a.id > b.id) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);
// -- Відсортувати їх по ID в зворотньому порядку
usersWithAddress.sort((a, b) => {
    if (a.id < b.id) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);
// -- Відсортувати по віку
usersWithAddress.sort((a, b) => {
    if (a.age > b.age) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);

// -- Відсортувати по віку в зворотньому порядку
usersWithAddress.sort((a, b) => {
    if (a.age < b.age) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);
// -- Відсорутвати по імені
usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);

// -- Відсорутвати по назві вулиці
usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);
// -- Відсорутвати по номеру будинку
usersWithAddress.sort((a, b) => {
    if (a.address.number > b.address.number) {
        return 1
    }
    return -1
})
console.log(usersWithAddress);
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let usersAge = usersWithAddress.filter(value => value.age < 30);
console.log(usersAge);

// -- Залишити тільки одружених
let userIsMarried = usersWithAddress.filter(value => value.isMarried);
console.log(userIsMarried);
// -- Залишити тільки одружених, які молодні за 30
let userIsMarried30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
console.log(userIsMarried30);
// -- Залишити лише тих, в кого парні номери будинків.
let userNumber = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(userNumber);
// -- Порахувати загальний вік всіх людей. (reduce)

let userAgeUser = usersWithAddress.reduce((sumAge, value) => sumAge + value.age, 0)
console.log(userAgeUser);
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let userIsMarriedChild = usersWithAddress.reduce((userIsMarriedChild, user) => {
    if (user.isMarried && user.age > 30) {
        user.child = true;
        userIsMarriedChild.push(user);

    }
    return userIsMarriedChild;
}, [])

console.log(userIsMarriedChild);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробити половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class Car {
    constructor(model, power, driverCar, price, age) {
        this.model = model;
        this.power = power;
        this.driverCar = driverCar;
        this.price = price;
        this.age = age;
    }

    PowerReconditioning(newDriver) {
        this.power = this.power * 1.1;
        this.driverCar = newDriver;
    }
}

class DriverCar {
    constructor(name, ageDriver, drivingExperience) {
        this.name = name;
        this.ageDriver = ageDriver;
        this.drivingExperience = drivingExperience;
    }
}

let car1 = new Car('bmv', 300, new DriverCar('Oleg', 28, 1), 2000, 2000);
let car2 = new Car('opel', 200, new DriverCar('Olga', 25, 5), 2500, 2005);
let car3 = new Car('audi', 150, new DriverCar('Rita', 27, 6), 3000, 2010);
let car4 = new Car('honda', 210, new DriverCar('Taras', 29, 10), 3500, 2015);
let car5 = new Car('subaru', 230, new DriverCar('Olena', 32, 9), 1500, 2001);
let car6 = new Car('volvo', 190, new DriverCar('Petro', 40, 20), 9000, 2011);
let car7 = new Car('lada', 100, new DriverCar('Karina', 28, 7), 500, 1997);
let car8 = new Car('shkoda', 150, new DriverCar('Rita', 37, 15), 1500, 2009);
let park = [];
park.push(car1);
park.push(car2);
park.push(car3);
park.push(car4);
park.push(car5);
park.push(car6);
park.push(car7);
park.push(car8);

//     Зробити половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).


car1.PowerReconditioning(new DriverCar('Olga', 22, 2));
car2.PowerReconditioning(new DriverCar('Inna', 24, 5));
car3.PowerReconditioning(new DriverCar('Kyrylo', 18, 1));
car4.PowerReconditioning(new DriverCar('Dara', 44, 25));
console.log(park);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

for (let i = 1; i < park.length; i += 2) {
    const parkElement = park[i];
    park[i].power = park[i].power * 1.1;
    park[i].price = park[i].price * 1.05;

}
console.log(park);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

for (let car of park) {
    if (car.driverCar.drivingExperience < 5 && car.driverCar.ageDriver > 25) {
        car.driverCar.drivingExperience += 1;
        console.log(`водія ${car.driverCar.name} відправити на курси підвищення кваліфікації`)
    }
}
console.log(park);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let sum = 0;
for (let car of park) {
    sum += car.price;
}
console.log(sum);


// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

arr = [1, 2, 3, 4, 4, 4, 4, 7, 9, 8]

function minMaxNumberArr(arr, n) {
    if (arr.some(value => value === n) && arr.every(value => value >= -10 && value <= 10) && arr.length <= 10) {
        let maxIndex = arr.lastIndexOf(n)
        let minIndex = arr.indexOf(n);
        arr.forEach(value => console.log(`Key = ${n}`))
        console.log(`Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}.`);
    } else {
        console.log(-1);
    }
}
minMaxNumberArr(arr, 1);
minMaxNumberArr(arr, 4);
