// Recupera aleatoriamente un item de un arreglo

function recuperarItem(item) {
  const recuperar = Math.floor(Math.random() * item.length);
  const itemRandoms = item[recuperar];
  return itemRandoms;
}

const numeros = [1, 2, 3, 4, 5];
const animales = ["🦁", "🐅", "🐆", "🐺"];

console.log(recuperarItem(animales));
