// 2. Eliminar Duplicados: Crea una función que tome un arreglo como entrada y devuelva un nuevo arreglo sin elementos duplicados.

function elementosDuplicados(numeros) {
  let duplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    if (duplicados.indexOf(numeros[i]) === -1) {
      duplicados.push(numeros[i]);
    }
  }
  return duplicados;
}

// Ejemplo de uso ✅
const numeros = ["Andres", "Juan", "Andres", "Andres", "Carlos", "Juan", "Sofia"];
console.log(elementosDuplicados(numeros));
