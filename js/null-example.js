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