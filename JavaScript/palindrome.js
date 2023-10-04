/* 
Escribe una función que determine si una palabra o frase es un palíndromo. Un palíndromo es una palabra, frase, número o cualquier otra secuencia de caracteres que se lee de la misma manera hacia adelante y hacia atrás (ignorando espacios, signos de puntuación y mayúsculas o minúsculas).
*/

function palindrome(cadena) {
  const minuscula = cadena.trim().toLowerCase();
  const reverse = minuscula.split("").reverse().join("");
  return minuscula === reverse;
}

// Ejemplo de uso 😁

const palabra = "oso";
const palabra2 = "ana";
const palabra3 = "lenguaje";

console.log(palindrome(palabra));
console.log(palindrome(palabra2));
console.log(palindrome(palabra3));
