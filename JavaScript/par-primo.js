/* Código para comprobar si un número es Par o Impar ✅ */

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} es numero Par`;
  } else {
    return `${number} es numero Impar`;
  }
};

oddOrEven(4); // 4 es numero Par
oddOrEven(5); // 5 es numero Impar

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
