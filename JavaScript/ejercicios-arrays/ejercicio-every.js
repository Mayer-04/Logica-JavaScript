/* 
Tienes un array de objetos, donde cada objeto representa una persona con las propiedades nombre y edad. Tu objetivo es utilizar el método every para verificar si todas las personas en el array son mayores de 18 años. Debes escribir una función que tome como argumento el array de objetos y devuelva un valor booleano que indique si se cumple la condición. 
*/

const mayoresDeEdad = function (mayor) {
  return mayor.every((e) => e.edad > 18);
};

// Ejemplo de uso ✅

const personas = [
  { nombres: "Mayer", edad: 23 },
  { nombres: "Andres", edad: 22 },
  { nombres: "Lucas", edad: 20 },
  { nombres: "Luis", edad: 50 },
];

console.log(mayoresDeEdad(personas)); // devuelve true, todos cumplen la condición.
