/* 
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.

Si no encuentra la palabra debe devolver [-1, -1].

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]
*/

function findJavaScript(matrix) {
  let arrJavaScript = [];
  let fila = -1;
  let columna = -1;

  matrix.forEach((matri, indexFila) => {
    matri.forEach((elem, indexColum) => {
      if (elem === "JavaScript") {
        fila = indexFila;
        columna = indexColum;
      } else if (elem !== "JavaScript") {
        return [fila, columna];
      }
    });
  });
  arrJavaScript.push(fila, columna);

  return arrJavaScript;
}

// Segunda manera de realizar el ejercicio 😁

const findJavaScript = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
