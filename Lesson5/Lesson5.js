// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
class Computer {
    constructor(ram, power, name) {
        this.ram = ram;
        this.power = power;
        this.name = name;
    }
    inclusion() {
        console.log(`"computer  ${this.name}  inkluded`);
    }
}

const user1 = new Computer(8, 500, 'user1');
const user2 = new Computer(4, 200, 'user2');
console.log(user1);
console.log(user2);
user1.inclusion();
user2.inclusion();

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
class Laptop extends Computer {
    constructor(ram, power, name, inchMonitor) {
        super(ram, power, name);
        this.inchMonitor = inchMonitor;
        this.batteryOperation = power / (inchMonitor * ram);
    }

}

const user3 = new Laptop(12, 500, 'user3', 22);
const user4 = new Laptop(16, 900, 'user4', 16);
console.log(user3);
console.log(user4);
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
class Ultrabook extends Laptop {
    constructor(ram, power, name, inchMonitor, weight) {
        super(ram, power, name, inchMonitor);
        this.weight = weight;
    }

    inclusion() {
        if (this.weight > 2 && this.batteryOperation < 4) {
            console.log(`ultrabook ${this.name} error. weight = ${this.weight}  > 2 and battery = ${this.batteryOperation} < 4 hour`);
        }
    }
}

const user5 = new Ultrabook(4, 200, 'user5', 15, 4);
const user6 = new Ultrabook(8, 600, 'user6', 22, 2);
const user7 = new Ultrabook(10, 20, 'user7', 22, 2.5);
console.log(user5);
console.log(user6);
console.log(user7);
user5.inclusion();
user6.inclusion();
user7.inclusion();

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BaseComputer extends Computer {
    constructor(ram, power, name) {
        super(ram, power, name);
        this.FPS_COUNT = power / ram;
    }
    playing() {
        console.log(`You are playing *GAME_${this.name}* with *${this.FPS_COUNT}* FSP`);
    }

    increasePower(increasePower) {
        if (increasePower < 10) {

            let newPower = this.power * (increasePower / 100 + 1);
            console.log(`Power =` + newPower);
            console.log(`CPU power  ${this.name}  increased by ${increasePower}`);
        } else {
            console.log(`Entered incorrectly. Increased Power ${this.name} = ${increasePower} > 10% `)
        }
    }

    increaseRam(increaseRam) {
        if (increaseRam === 2) {
            let newRam = this.ram * 2;
            console.log(`RAM = ${newRam}`);
            console.log(`RAM  ${this.name}  increased by ${increaseRam}`)
        } else {
            console.log(`Entered incorrectly. Increased RAM  ${this.name}  = ${increaseRam} > 2 `)
        }
    }
}

user8 = new BaseComputer(8, 700, "user8");
user9 = new BaseComputer(12, 600, 'user9');
console.log(user8);
console.log(user9);
user8.playing();
user9.playing();

user8.increaseRam(15);
user8.increaseRam(2);

user9.increaseRam(5);
user9.increaseRam(3);

// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingComputer extends BaseComputer {
    constructor(Ram, power, name) {
        super(Ram, power, name);
        this.FPS_COUNT = this.FPS_COUNT * 2;
    }

    playing() {
        this.power = this.power * 0.9;
        super.playing();
        console.log(`power ${this.name} = ${this.power}`);
    }

    error() {
        console.log(this.power)
        if (this.power < 500 && this.ram < 8) {
            console.log(`error!!!! power = ${this.power} < 500  and RAM = ${this.ram}  < 8 .  Games do not start on the computer  ${this.name}`);
        }
    }

}

user10 = new GamingComputer(6, 300, 'user10');
user11 = new GamingComputer(5, 500, 'user11');
console.log(user10);
console.log(user11);
user10.error();
user10.playing();

user11.error();
user11.playing();
user11.playing();
user11.error();

