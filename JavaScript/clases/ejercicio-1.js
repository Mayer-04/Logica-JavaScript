/* 
Crea una clase llamada Producto que tenga las siguientes propiedades: nombre, precio y cantidad. 
Además, incluye un método llamado calcularTotal que devuelva el precio total del producto (precio * cantidad).
*/

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return `El precio total del producto es ${this.precio * this.cantidad}`;
  }
}

const producto1 = new Producto("Camisa", 20000, 3);

producto1.calcularTotal();
