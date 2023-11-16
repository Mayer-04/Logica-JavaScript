/* Dado un número n, encuentra la suma de todos los números que son múltiplos de 3 o 5 y que son menores que n. */

function multiplesNumeros(n) {
  let suma = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
}

console.log(multiplesNumeros(10));
