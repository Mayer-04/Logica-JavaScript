/* 
Crear un programa que calcule el área de un triángulo rectángulo. 
El usuario debe ingresar la longitud de los dos catetos y el programa debe mostrar el resultado del área.
*/

// Validaciones pendientes
function trianguloRectangulo(b, a) {
  const areaTriangulo = (b * a) / 2;
  const mensaje = `El área del triángulo rectángulo es: ${areaTriangulo} `;
  return mensaje;
}

trianguloRectangulo(5, 6); // La área del triángulo rectángulo es: 15
