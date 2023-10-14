const elementoAleatorio = require("../javascript/elemento-aleatorio.js");

test("Recuperar un elemento aleatorio de un array", () => {
  const items = ["🦁", "🐅", "🐆", "🐺"];
  const result = elementoAleatorio(items);
  expect(items).toContain(result);
});

test("Recuperar un elemento aleatorio de un array vacio", () => {
  const items = [];
  const result = elementoAleatorio(items);
  expect(result).toBe(undefined);
});

test("Recuperar un elemento aleatorio de un array con un solo elemento", () => {
  const items = ["🦁"];
  const result = elementoAleatorio(items);
  expect(result).toBe("🦁");
});
