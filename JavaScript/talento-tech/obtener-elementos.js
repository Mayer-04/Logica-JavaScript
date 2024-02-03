/* Ejercicio:
Crea una función que reciba dos array, un booleano y retorne un array.
- Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
- Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
*/

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {boolean} bool
 */

const obtenerElementosComunes = (arr1, arr2, bool) => {
  const unionOfArray = arr1.concat(arr2);

  if (bool) {
    const elementosComunes = arr1.filter((elemento) => arr2.includes(elemento));
    return elementosComunes;
  } else {
    const noComunes = unionOfArray.filter(
      (elemento) => !arr1.includes(elemento) || !arr2.includes(elemento)
    );
    return noComunes;
  }
};

const numeros1 = [1, 2, 3, 4, 5, 6];
const numeros2 = [2, 4, 6, 8, 9];

obtenerElementosComunes(numeros1, numeros2, true);
