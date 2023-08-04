/* Código para comprobar si un número es Par o Impar ✅ */

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} es número Par`;
  } else {
    return `${number} es número Impar`;
  }
};

oddOrEven(4); // 4 es número Par
oddOrEven(5); // 5 es número Impar

// Utilizando Operador Ternario - Número Par o Impar

const oddEven = (number) => {
  const result =
    number % 2 === 0 ? `${number} es número Par` : `${number} es número Impar`;
  return result;
};

oddEven(2); // 2 es número Par
oddEven(3); // 3 es número Impar

/* Código para comprobar si un número es Primo ✅ */

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

isPrime(3); // 3 es numero primo
isPrime(4); // 4 no es numero primo
