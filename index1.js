////  СОЗДАНИЕ МАССИВА И ЗАМЕНА ЗНАЧЕНИЙ В НЁМ  \\\\

// const letters = ['a', 'b', 'c', 'd'];
// console.table(letters);

// letters[1] = 'qweqwe';
// letters[3] = 12313;

// console.table(letters);

//

////  ПЕРЕДАЧА ПО ССЫЛКЕ И ЗНАЧЕНИЮ  \\\\

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10

// console.log(a === b); // false

// a - original, b - copy

// const a = [10];
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a[0] = 20;

// console.log(a); // 20
// console.log(b); // 20

// console.log(a === b); // true

// console.log([1, 2, 3] === [1, 2, 3]); // false потому что разные ссылки

// a - link, b - the same

//

////  ПЕРЕБОР (ИТЕРАЦИЯ) МАСИВА  \\\\

// const letters = ['a', 'b', 'c', 'd'];
// console.table(letters);

// for (let i = 0; i <= letters.length - 1; i += 1) {
//   console.log(letters[i]);
// }

// for (let i = 0; i <= letters.length - 1; i += 1) {
//   letters[i] += '-1';
// }

// console.table(letters);

//

////  for...of  \\\\

// перечисление значений массива. используется когда не нужен индекс и не нужно ничего менять в массиве

// const letters = ['a', 'b', 'c', 'd'];

// for (letter of letters) {
//   console.log(letter);
// }

//

////  ПОСЧИТАТЬ ОБЩУЮ СУММУ ПОКУПОК В МАГАЗИНЕ  \\\\
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// // for (let i = 0; i < cart.length; i += 1) {
// //   //   console.log(cart[i]);
// //   total += cart[i];
// // }

// for (const i of cart) {
//   total += i;
// }

// console.log('Total: ', total);

////  добавить такс  \\\\

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

//

////  ПОСЧИТАТЬ ЧЁТНЫЕ ЧИСЛА  \\\\

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //   if (numbers[i] % 2 === 0) {
// //     console.log(numbers[i]);

// //     total += numbers[i];
// //   }
// // }

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);

//     total += number;
//   }
// }

// console.log('Total: ', total);

//

////  includes  \\\\

// const logins = ['M4ngoDoge', 'k1ssdf', 'effefes', 'creat1on'];
// const loginToFind = 'creat1on';

// // let message = `Пользователь ${loginToFind} не найден.`;

// // if (logins.includes(loginToFind)) {
// //   message = `Пользователь ${loginToFind} найден.`;
// // }

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

//

////  НАХОДИМ САМОЕ МАЛЕНЬКОЕ ЧИСЛО  \\\\

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

//

////  СОЕДИНЯЕМ МАССИВ В ОДНУ СТРОКУ ЧЕРЕЗ for И join  \\\\

// for

// const letters = ['a', 'b', 'c', 'd'];

// for
// let string = '';

// for (letter of letters) {
//   string += letter + ', ';
// }

// string = string.slice(0, -2); // slice deleted comma & space

// console.log(string);
//

// join
// const string = letters.join(', ');
// console.log(string);
// the end :)

//

////  slug  \\\\

// const title = 'Top 10 benefits for React framework';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

//

////  ПОСЧИТАЙ СУММУ ЧИСЕЛ ИЗ ДВУХ МАССИВОВ  \\\\

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const arrays = array1.concat(array2);
let total = 0;

for (const array of arrays) {
  total += array;
}

console.log(total);
