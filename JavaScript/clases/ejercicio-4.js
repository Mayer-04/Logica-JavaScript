/* Crear una Clase para un Estudiante.
Crea una clase llamada Estudiante con las propiedades nombre, edad y carrera. Implementa métodos get y set para cada una de estas propiedades. Además, añade un método esMayorDeEdad que devuelva true si el estudiante es mayor de 18 años y false en caso contrario.
*/

class Estudiante {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  get getCarrera() {
    return this.carrera;
  }

  esMayorEdad() {
    return this.edad > 18;
  }
}

const estudiante1 = new Estudiante("Andres", 23, "Programación");

estudiante1.esMayorEdad();
