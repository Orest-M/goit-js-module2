// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5);
// multiply(4, 8, 12);
// multiply(17, 6, 25);
//

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result);

// result = multiply(4, 8, 12);
// console.log(result);

// result = multiply(17, 6, 25);
// console.log(result);
//

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"

//

////  СЧИТАЕМ СУММУ ЧИСЕЛ МАССИВА ЧЕРЕЗ ФУНКЦИЮ  \\\\

// function calculateTotalPrice(items) {
//   console.log(items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([50, 20]));
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 6, 2, 10]));

//

////  ПОИСК ЭЛЕМЕНТА В МАССИВЕ  \\\\

// const logins = ['m4ngoDoge', 'dfdww', 'e1dvDFD', 'qwerty'];

// function findLogin(allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogin(logins, 'asdasd'));
// console.log(findLogin(logins, 'aswewwe'));
// console.log(findLogin(logins, 'qwerty'));
// console.log(findLogin(logins, 'asdadffewfew'));

//

////  ФУНКЦИЯ КОТОРАЯ НАХОДИТ НАИМЕНЬШЕЕ ЧИСЛО  \\\\

// function findSmallestNumber(numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// }

// console.log(findSmallestNumber([51, 18, 13, 24, 7, 85, 19]));
// console.log(findSmallestNumber([5, 1, 33, 23, 121, 95, 76]));
// console.log(findSmallestNumber([51, -5, 98, 63, 75, 2, 42]));

//

////  ФУНКЦИЯ КОТОРАЯ ИЗМЕНЯЕТ РЕГИСТР БУКВ В СЛОВЕ НА ПРОТИВОПОЛОЖНЫЙ  \\\\

// function changeCase(string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// }

// console.log(changeCase('qweqwe'));
// console.log(changeCase('WevdSSAvcr'));
// console.log(changeCase('qWeRtY'));

//

////  ФУНКЦИЯ ДЛЯ URL-slug  \\\\

// function slugify(string) {
//   return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('QWwc qwdwqgewgew wggved'));

//

////  ... (rest)  \\\\

////  ФУНКЦИЯ ДЛЯ ПОДСЧЁТА ЧИСЕЛ ЧЕРЕЗ ...  \\\\

// const add = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 10, 20));

//

////  ФУНКЦИЯ, КОТОРАЯ ПЕРВЫМ АРГУМЕНТОМ ПРИНИМАЕТ МАССИВ ЧИСЕЛ, ВТОРЫМ ПРОИЗВОЛЬНОЕ КОЛИЧЕСТВО ЧИСЕЛ И ВОЗВРАЩАЕТ ТЕ ЧИСЛА, КОТОРЫЕ ЕСТЬ И В ПЕРВОЙ И ВО ВТОРОЙ ЧАСТИ  \\\\

// function filterNumbers(array, ...args) {
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} есть везде`);
//     }
//   }

//   return uniqueElements;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

//

////  Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.  \\\\

// function getExtremeElements(array) {
//   let firstAndLastElements = [array[0], array[array.length - 1]];

//   return firstAndLastElements;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//

////  Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

//  Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;

//   words = message.split(delimiter);

//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

//

////  Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord). Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// обычная запись

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// стрелочная запись со скобками

// const calculateEngravingPrice = (message, pricePerWord) => {
//   return message.split(' ').length * pricePerWord;
// };

// стрелочная без скобок

// const calculateEngravingPrice = (message, pricePerWord) =>
//   message.split(' ').length * pricePerWord;

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

//

////  Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.  \\\\

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

////  Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.  \\\\

//  Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   return newArray.length < maxLength ? newArray : newArray.slice(0, maxLength);
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//

////  Напиши функцію, яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом, і повертає найдовше слово в цьому рядку.  \\\\

// function findLongestWord(string) {
//   const arrayString = string.split(' ');

//   let longestWordIndex = arrayString[0].length;
//   let longestWord = arrayString[0];

//   for (let i = 1; i < arrayString.length; i++) {
//     let maxi = arrayString[i].length;

//     if (maxi > longestWordIndex) {
//       longestWord = arrayString[i];
//       longestWordIndex = maxi;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//

////  push  \\\\

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//

////  Напиши функцію, яка приймає масив чисел і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).  \\\\

// function filterArray(numbers, value) {
//   const biggerNumbers = [];

//   for (number of numbers) {
//     if (number > value) {
//       biggerNumbers.push(number);
//     }
//   }

//   return biggerNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//

function includes(array, value) {
  let element;

  for (i = 0; i < array.length; i++) {
    element = array[i];

    if (element === value) {
      return true;
    }
  }

  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
