let lenguaje = prompt("Selecciona un lenguaje entre en | de | pt | po ");
let answer;
switch (lenguaje) {
  case "en":
    answer = "Language is English, execute code for English";
    console.log(answer);
    break;
  case "de":
    answer = "Language is German, execute code for German";
    console.log(answer);
    break;
  case "pt":
    answer = "Language is Portuguese, execute code for Portuguese";
    console.log(answer);
    break;
  case "po":
    answer = "Language is Poland, execute code for Poland";
    console.log(answer);
    break;
  default:
    console.log("Lenguage not chosen, using Spanish");
    break;
}
