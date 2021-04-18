// 1) Створити масив з 20 чисел та:
let array = [1, 2, 10, 15, 3, 25, 60, 20, 50, 6, 17, 22, 11, 9, 8, 77, 28, 29, 13, 100];
//     a) відсортувати його від меншого до більшого.

let sortArray = array.sort(
    (a, b) => {
        return a - b
    }
);
console.log(array);
//     b) відсортувати його від більшого до меншого.

let sort = array.sort(
    (a, b) => {
        return b - a
    }
);
console.log(array);


//     c) Відфілтрувати числа які є кратними 3.

let number3 = array.filter(
    value => value % 3 === 0
)
console.log(number3);

// або

let numbers3 = array.filter(
    value => value % 3 === 0 ? value : false
)
console.log(numbers3);

// d) Відфілтрувати числа які є більшими за 10.

let number10 = array.filter(
    value => value > 10 ? value : false
)
console.log(number10);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

array.forEach(value => {
        document.write(value + ', ')
    }
);

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let newArray = array.map(value => value * 3);
console.log(newArray);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

let sum = array.reduce((sum, value) => sum + value);
console.log(sum);

// 2) Створити масив з 20 стрічок та:

let arrayString = ['Lora', 'Olga', 'Dara', 'Karina', 'Oleg', 'Tamara', 'Igor', 'Ivan', 'Anna', 'Rita',
    'Tanja', 'Xrystyna', 'Anita', 'Ala', 'Vita', 'Taras', 'Roman', 'Goga', 'Kira', 'Svitlana'];

//     a) Відсортувати його в алфавітному порядку

arrayString.sort((a, b) => {
    return a.localeCompare(b)
});
console.log(arrayString);

// b) Відсортувати в зворотньому порядку

arrayString.sort((a, b) => {
    return b.localeCompare(a)
});
console.log(arrayString);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let string10 = arrayString.filter(
    value => value.length > 4 ? value : false
)
console.log(string10);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

arrayString.forEach(value => console.log(`am says *${value}*`));


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let usersAgeAugmentation = (users.map(value => (value.age)))
    .sort((a, b) => a - b);

console.log(usersAgeAugmentation);

let usersaAgeDecline = (users.map(value => (value.age)))
    .sort((a, b) => b - a);
console.log(usersaAgeDecline);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//зростання
let usersNameAugmentation = (users.map(value => (value.name)))
    .sort((a, b) => {
    if (a.length > b.length)
    {
        return 1
    }
    return -1
});

console.log(usersNameAugmentation);

//спадання

let usersaNameDecline = (users.map(value => (value.name)))
    .sort((a, b) => {
    if (a.length < b.length)
    {
        return 1
    }
    return -1
});

console.log(usersaNameDecline);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

users.forEach(((value, index) => value.id = index + 1));

console.log(users);
// d) відсортувати його за індентифікатором

let usersSortIdDecline = users.sort((a, b) => b.id - a.id);
console.log(usersSortIdDecline);

let usersSortIdAugmentation = users.sort((a, b) => a.id - b.id);
console.log(usersSortIdAugmentation);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

let newUsersisMarried = users.reduce((acc, value) => {
        if (value.isMarried) {
            value.rooms = true;
            acc.push(value)
        }
        console.log(acc);
        return acc;
    }
    , [])

//або
// let usersIsMarried =users.filter(value =>{
//     if (value.isMarried) {
//         value.rooms=true;
//         return value}
//     -1
// } )
// console.log(usersIsMarried);

