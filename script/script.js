// Задание 1 - Поиск максимального числа

const numbers = [12, 5, -3, 6, -9, 12, -5];

let max = numbers[0];
for (const number of numbers) {
   max = number > max ? number : max;    
}
console.log(max);

// Задание 2 - Генератор таблицы умножения

for (let i = 1; i <=10; i++) {
    console.log(5 * i);
}

// Задание 3 - Подсчет четных чисел в заданном массиве

let count = 0;
for (const number of numbers) {
    if (number%2 === 0) {count++;
    }      
}
console.log(count);

// Задание 4 - Реверс массива

const newArray = [];
for (let i=numbers.length; i>=0; i--){
   newArray.push(numbers[i]);
}
console.log(newArray);

// Калькулятор стоимости товаров

function calculatorPrice (cost, value){
    return cost * value;
}

let calculatorPrice_1 = (cost, value) => cost * value;

console.log(calculatorPrice(25, 5));
console.log(calculatorPrice(3, 15));
console.log(calculatorPrice(5, 100));
console.log(calculatorPrice(255, 5));

console.log(calculatorPrice_1(25, 5));
console.log(calculatorPrice_1(3, 15));
console.log(calculatorPrice_1(5, 100));
console.log(calculatorPrice_1(255, 5));

// Проверка на четность

function isEven (value) {
    return value%2 === 0;
}

let isEven_1 = (value) => value % 2 === 0;

console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(7));

console.log(isEven_1(5));
console.log(isEven_1(6));
console.log(isEven_1(7));

// Реверс строки

function reverse (value) {
    let firstWordArray = value.split('');
    let newWordArray = [];
    for (let i=firstWordArray.length-1; i >=0; i--){
       newWordArray.push(firstWordArray[i]);
    } 
    return newWordArray.join('');
}

console.log(reverse("пример"));
console.log(reverse("Онда голова хорошо, а две лучше"));

// Конвертер температуры

function converter(valueCelicii) {
    return (valueCelicii * 9/5) + 32;
}

console.log(converter(20));
console.log(converter(45));




