// let totalBet = prompt("please enter your bet");
// console.log(totalBet);

// if (totalBet == 5000) {
//   alert("All in!");
// } else if (totalBet < 5000) {
//   alert("Passing this round");
// } else {
//   alert("Wrong bet, try again");
//   totalBet = prompt("please enter your bet");
// }

/*Determinar el tipo de dato y valor de las variables*/
/* let variable1 = 838 < 542;
console.log("a) tipo :", typeof variable1, "valor: ", variable1);

 */
/* let number = 10;
while (number < 0) {
  number--;
  console.log(number);
} */
// Generating mmultiplication tables
/* for (let number = 1; number <= 10; number++) {
  console.log("Tabla del: ", number);
  console.log("------------------");

  let multi = 1;
  while (multi <= 10) {
    console.log(number, "x", multi, "=", number * multi);
    multi++;
  }

  console.log("------------------"); */

/* for (
    let counter = 0, limit = 100;
    counter <= limit;
    counter++, limit--
  ) {
    console.log(counter, " - ", limit);
  } */

/*   let counter = 1;
while (counter++ <= 100) {
  if (counter % 2 != 0) {
    continue;
    console.log("Hello world!!");
  }
  console.log(counter);
} */

/* let option = null;
let colors = ["red", "green", "blue"];

do {
  console.log("Please, choose a color");
  for (let index = 0; index < colors.length; index++) {
    console.log(index + 1 + "." + colors[index]);
  }
  console.log("Press 0 to leave");
  option = prompt("Make your choice");
  switch (option) {
    case "1":
      console.log("%cHex code for red: #FF0000", "color: rgb(0, 0, 255);");
      break;
    case "2":
      console.log("Hex code for green: #FF008000");
      break;
    case "3":
      console.log("Hex code for blue: #0000FF");
      break;

    default:
      if (option != 0) {
        console.warn("Not a valid option, please try again.");
      } else {
        console.log("Exiting, see you soon!");
      }
      break;
  }
} while (option != 0 || option!= null);
 */
/* 
let star = {
  name: "Polaris",
  constellation: "Ursa Minor",
  type: "Double/Cepheid",
  spectralClass: "F7",
  mag: 2.0,
  "": "acceptable",
}
console.log(star.name);
star.constellation = "Ursa Major"
console.log(star.constellation);

let num1 = 4;
let num2 = num1;
console.log(num2);
num2 = 7
console.log(num1);
console.log(num2);

let star2 = star;
star2.name = "Mizar";
star2.mag = 5.7

console.log(star.name);
console.log(star2.name);
console.log("acceptable"); */

/* let hero = {
  character: "Iron Man",
  name: "Tony Stark",
  powers: [
    "Genius-level intellect",
    "Multiple powered armor suits",
    "Ability to fly",
  ],
  info: {
    yearCreated: 1963,
    powerOrigin: "From his suit",
    weapons: ["repulsor rays", "uni-beam projector", "lasers"],
    didYouKnow:
      "Tony Stark created and built one of teh Spider-Man's upgraded suits known as the Iron Spider Suit. We got a small glimpse of it in Spider-Man: Homecoming!",
  }, */
/* };

let hero2 = new Object();
hero2.character = "Hulk";
hero2.name = "Bruce Banner";
hero2.powers = [
  "strength",
  "speed",
  "stamina",
  "durability",
  "regeneration",
  "night invulnerability",
  "breathing underwater",
];
console.log(Object.keys(hero2))
console.log(Object.keys(hero)) */

// Shopping Cart

let shoppingCart = {
  product1: {
    product_id: 0,
    name: "Nike",
    price: 180,
    quantity: 2,
  },
  product2: {
    product_id: 1,
    name: "Adidas",
    price: 210,
    quantity: 4,
  },
  product3: {
    product_id: 2,
    name: "Reebok",
    price: 200,
    quantity: 5,
  },
  product4: {
    product_id: 3,
    name: "Jordan",
    price: 300,
    quantity: 4,
  },
};
console.log(Object.values(shoppingCart))
