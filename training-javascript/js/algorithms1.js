//EJERCICIO 1
/* let days = console.log(
  new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
); */
//EJERCICIO 2
/* let monthName = prompt("Please, write the chosen month.");
switch (monthName) {
  case "January":
    console.log("January has 31 days");
    break;
  case "February":
    console.log("February has 28 days");
    break;
  case "March":
    console.log("March has 31 days");
    break;
  case "April":
    console.log("April has 30 days");
    break;
  case "May":
    console.log("May has 31 days");
    break;
  case "June":
    console.log("June has 30 days");
    break;
  case "July":
    console.log("July has 31 days");
    break;
  case "August":
    console.log("August has 31 days");
    break;
  case "September":
    console.log("September has 30 days");
    break;
  case "October":
    console.log("October has 31 days");
    break;
  case "November":
    console.log("November has 30 days");
    break;
  case "December":
    console.log("December has 31 days");
    break;
  default:
    console.log("That’s not a real month!");
    break;
} */
//EJERCICIO 3
/* let temperature = prompt("Please, what is the temperature outside?.");
console.log(typeof temperature);
if (temperature < 15) {
  alert("Warm up");
} else if (temperature ==15 || temperature <= 25) {
  alert("Enjoy the weather!");
}
else if (temperature > 25) {
  alert("Cool down")
} */
//EJERCICIO 4
/* let isGreen = false;
if (isGreen) {
  console.log("Cross the road");
} else {
  console.log("Please await");
} */
//EJERCICIO 5
/* let temperature = "Absolute Zero";
switch (temperature) {
  case "Absolute Zero":
    answer = (-273.15 * 9) / 5 + 32;
    console.log(answer + "ºF");
    break;
  case "Freezing point":
    answer = (0 * 9) / 5 + 32;
    console.log(answer + "ºF");
    break;
  case "Body Temperature":
    answer = (37 * 9) / 5 + 32;
    console.log(answer + "ºF");
    break;
  case "Boiling point":
    answer = (100 * 9) / 5 + 32;
    console.log(answer + "ºF");
    break;
  default:
    console.log("Temp not recog");
    break;
} */

//EJERCICIO 6
/* let email = prompt("Please, insert your email");
let password = prompt("Please, insert your password");
if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
  alert("Welcome Mr.Tolkien");
} else {
  alert("Wrong password or email");
} */

//EJERCICIO 7
/* let euros = prompt("Please, write your number");
switch (euros) {
  case euros:
    console.log(
      "son " +
        euros * 0.97 +
        " dólares, " +
        euros * 141.59 +
        " yenes, " +
        euros * 0.88 +
        " libras, " +
        euros * 0.97 +
        " francos."
    );
} */
//EJERCICIO 8
/* let n1, n2, n3;
let suma, resta, multi, divide;
n1 = prompt("Enter a number 1");
n2 = prompt("Enter a number 2");
n3 = prompt("Enter a operation");

if (n3 == "suma") {
  console.log(parseInt(n1) + parseInt(n2));
} else if (n3 == "resta") {
  console.log(parseInt(n1) - parseInt(n2));
} else if (n3 == "multi") {
  console.log(parseInt(n1) * parseInt(n2));
} else if (n3 == "divide") {
  console.log(parseInt(n1) / parseInt(n2));
} else {
  console.log("ERROR!");
}
 */
//EJERCICIO 9
/* let doc = "A7654321Z".toLowerCase();
let isDNI = true;
let validDocument = true;
if (doc.charCodeAt(0) == 116 || doc.charCodeAt(0) == 120) {
  isDNI = false;
}
if (isDNI) {
  for (let index = 0; index < doc.length; index++) {
    if (index <= 7) {
      if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
        validDocument = false;
      }
    } else {
      if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
        validDocument = false;
      }
    }
  }
} else {
  for (let index = 1; index < doc.length; index++) {
    
    if ( index <= 7) {
      if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
        validDocument = false;
      }
    } else {
      if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
        validDocument = false;
      }
    }
  }
}

if (validDocument && isDNI) {
  console.log("It is a valid DNI");
} else if (validDocument) {
  console.log("It is a valid NIE");
} else {
  console.log("not a valid document");
}
 */

//EJERCICIO 10
let ramdomNumber1 = Math.floor(Math.random() * 6 + 1);
let ramdomNumber2 = Math.floor(Math.random() * 6 + 1);

if (ramdomNumber1 > ramdomNumber2) {
  console.log("Player 1 wins!");
} else if (ramdomNumber1 < ramdomNumber2) {
  console.log("Player 2 wins!");
}
  else{
    console.log("draw")
  }

