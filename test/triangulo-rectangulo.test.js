const trianguloRectangulo = require("../JavaScript/triangulo-rectangulo.js");

test("Calcular el área de un triángulo rectángulo", () => {
  expect(trianguloRectangulo(5, 6)).toBe(
    "El área del triángulo rectángulo es: 15"
  );
});
