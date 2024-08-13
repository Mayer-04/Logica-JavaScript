/* 
Define dos sets con algunos elementos comunes y crea una función que tome estos dos sets como entrada
y devuelva un nuevo set que contenga solo los elementos que están presentes en ambos sets. 
*/

function interseccionSet(set1, set2) {
  const nuevoSet = new Set();
  for (const elementos of set1) {
    if (set2.has(elementos)) {
      nuevoSet.add(elementos);
    }
  }
  return nuevoSet;
}

const primerSet = new Set(["🦊", "🫎", "🐺"]);
const segundoSet = new Set(["🦊", "🐕", "🦍", "🫎"]);
console.log(interseccionSet(primerSet, segundoSet));
