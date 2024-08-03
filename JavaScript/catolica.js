const multiplesOperations = (number) => {
  const convertString = number.toString();

  const firstDigit = Number(convertString[0]);
  const secondDigit = Number(convertString[1]);

  let reverseNumbers = "";

  for (let i = convertString.length - 1; i >= 0; i--) {
    const resultado = convertString[i];
    reverseNumbers += resultado;
  }

  console.log("Numeros invertidos:", Number(reverseNumbers));

  const suma = firstDigit + secondDigit;
  const resta = firstDigit - secondDigit;
  const multiplicacion = firstDigit * secondDigit;
  const division = firstDigit / secondDigit;
  const resto = firstDigit % secondDigit;
  const exponente = firstDigit ** secondDigit;

  return {
    suma,
    resta,
    multiplicacion,
    division,
    resto,
    exponente,
  };
};

const result = multiplesOperations(73);
console.log(result);
