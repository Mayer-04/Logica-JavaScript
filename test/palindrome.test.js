import { palabraPalindrome } from "../javascript/palindrome.js";
import { describe, test, expect } from "vitest";

describe("Determinar si una palabra o frase es un palíndromo", () => {
  test("No se pasa una palabra o frase a la función", () => {
    const resultado = palabraPalindrome();
    expect(resultado).toBeNull();
  });

  test("Palabra palindrome", () => {
    const palabra = " OSO ";
    const palabra2 = "ana";
    const palabra3 = "lenguaje";

    expect(palabraPalindrome(palabra)).toBe(true);
    expect(palabraPalindrome(palabra2)).toBe(true);
    expect(palabraPalindrome(palabra3)).toBe(false);
  });
});
