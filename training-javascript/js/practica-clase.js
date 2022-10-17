function compare(value1, value2) {
  console.log("value1 vale: ", value1);
  console.log("value2 vale: ", value2);
}
function compare(value1, value2) {
  console.log("working!");
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result = compare(4, 3);
console.log(result);
compare(2, 3)

// let numbers = [0, 1, 5, 10, 15];
// let copyOfNumbers = [...numbers];
// let secondCopyOfNumbers = Array.from(numbers);

// copyOfNumbers.reverse();

/* console.log(numbers); */
/* console.log(copyOfNumbers);
 */
/* console.log(secondCopyOfNumbers); */
/* secondCopyOfNumbers.sort(); */
/* console.log(secondCopyOfNumbers); */

/* let team = [ */
//   "Alice",
//   "Sebastian",
//   "Ismael",
//   "Juan",
//   "David Miró",
//   "David Calero",
// ];
// team.sort(); */
/* console.log(team); */
/* secondCopyOfNumbers.sort(compare); */

/* console.log(secondCopyOfNumbers); */

/* let unorderedNumbers = [20, -8, 3, 102, 43, 18];
unorderedNumbers.sort(compare);
 */

/* let unorderedNumbers = [20, -8, 3, 3, 102, 43, 18];
let counter = 0;
unorderedNumbers.sort(function (value1, value2) {
  counter++; */
/*  console.log("value1: ", value1);
  console.log("value2: ", value2);
  console.log("result: ", value1 - value2); */
/*   return value1 - value2;
}); */
/*  console.log(counter); */
/* unorderedNumbers.sort((value1, value2) => value2 - value1);
console.log(unorderedNumbers);
 */

// Traditional methods for ordering arrays
// let numbers = [3, 9, 8, 1, 4];
/* for (let i = 0; i < numbers.length - 2; i++) {
console.log(numbers);
for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
if (numbers[j] > numbers[j + 1]) {
aux = numbers[j];
numbers[j] = numbers[j + 1];
numbers[j + 1] = aux;
}
}
}
console.log(numbers);
 */
/* for (const num of numbers) {
    console.log(num);
}
 */
/* let shoopingCart = {
  product1: {
    id: 0,
    name: "suitcase",
    price: 29.95,
    quantity: 1,
  },
  product2: {
    id: 1,
    name: "glovers",
    price: 29.95,
    quantity: 1,
  },
  product3: {
    id: 2,
    name: "trainers",
    price: 9.95,
    quantity: 1,
  },
  product4: {
    id: 3,
    name: "t-shirt",
    price: 19.95,
    quantity: 2,
  },
};
for (let key in shoopingCart) {
  console.log(shoopingCart[key].id);
  console.log(shoopingCart[key].name);
}
 */
// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
// };
// for (let keys in hero) {
//   console.log(`${keys} => ${hero[keys]}`);
// }

// ["Aragorn", "Gandalf", "Nazgul"].forEach((element, index, array) => {
//   console.log(`${element} is at index ${index} in ${array}`);
//   return 0;
// });

// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//   console.log(letter);
// });

// let numbers = [1, 2, 3];
// let mappedNumbers = [1, 2, 3].map((number) => number * 2);
// console.log(mappedNumbers);

// let filteredNumbers = numbers.filter((number) => number < 3);
// console.log(filteredNumbers);

// console.log(numbers.every((number) => number > 2));
// console.log(numbers.some((number) => number > 2));

// let totalSum = numbers.reduce((accum, number) => accum + number, 0);
// console.log(totalSum);
// totalSum = 0;
// totalSum = numbers.reduceRight((accum, number) => accum + number, 0);
// console.log(totalSum);

// let calendar = new Array(5);
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7);
// }

// for (let row = 0, day = 1; row < calendar.length; row++) {
//   for (let col = 0; col < calendar[row].length; col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else if (day == 31) {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }
// console.log(calendar);

// function sayHello(moment, name) {
//   console.log(`Good ${moment}, ${name}!`);
//   return name.length;
// }
// let letter = 0;
// letters = sayHello("morning", "Paco");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("afternoon", "Pepe");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("night", "Juan");
// console.log(`Your name has ${letters} letters`);

// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum(2, 2));
// console.log(sum(1, 3));
// console.log(sum(0, 4));
