/* Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos. */

function getKeysOfBooleanValues(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "boolean");
}

// Ejemplo de uso ✅
const objeto = { a: true, b: 42, c: false };
const tipoBooleano = getKeysOfBooleanValues(objeto);
