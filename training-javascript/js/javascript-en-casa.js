//1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
/* alert("Hello World"); */

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
/* document.write("Hello  World") */

//3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
/* document.write(3+5) */

//4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
/* let prompt ("Diga su nombre")
  document.write("Hola nombreUsuario")
 */

//5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/* let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+parseInt(n2) ) ); */

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let n1 = prompt("Escriba un número");
let n2 = prompt("Escriba otro número");
if (n1 > n2) {
  document.write(n1);
} else {
    document.write(n2);
}
