/* 
En un restaurante se reciben pedidos de comida a domicilio. 
Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. 
Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado.
*/

function procesarPedido(pedidos) {
  const nombreCliente = pedidos.shift();
  pedidos.unshift("bebida");
  pedidos.push(nombreCliente);
  return pedidos;
}

// Ejemplo de uso ✅

const platos = ["Mayer", "Pizza", "Pollo", "Hamburguesa", "Sushi"];
const platosModificados = procesarPedido(platos);
console.log(platosModificados);
