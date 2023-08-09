// Dado un array de números, crea una función que devuelva la suma de todos los elementos.

function sumaTotal(numeros) {
  const sumaElementos = numeros.reduce((total, suma) => {
    return total + suma;
  }, 0);
  return sumaElementos;
}

// Resolviendo el ejercicio sin el método reduce 😁

const sumaNumeros = (numeros) => {
  let numero = 0;
  for (let i = 0; i < numeros.length; i++) {
    numero += numeros[i];
  }
  return numero;
};

// Ejemplo de uso ✅
const numeros = [1, 2, 3, 4, 76, 23, 87, 341, 0, 54];
const SumaTotalNumeros = sumaTotal(numeros);
