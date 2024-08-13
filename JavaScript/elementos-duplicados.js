/* 
Eliminar Duplicados: 
Crea una función que tome un arreglo como entrada y devuelva un nuevo arreglo sin elementos duplicados.
Sin utilizar new Set().
*/

/**
 *
 * @param {Array<string>} arr
 * @returns {Array<string>}
 */

function elementosDuplicados(arr) {
  let duplicados = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicados.indexOf(arr[i]) === -1) {
      duplicados.push(arr[i]);
    }
  }
  return duplicados;
}

// Ejemplo de uso ✅
const nombres = [
  "Andres",
  "Juan",
  "Andres",
  "Andres",
  "Carlos",
  "Juan",
  "Sofia",
];
console.log(elementosDuplicados(nombres));
