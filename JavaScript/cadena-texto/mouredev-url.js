/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

/**
 *
 * @param {string} url
 */

const obtenerParametros = (url) => {
  const partes = url.split("?");
  const primeraParte = partes.at(1);
  const hola = primeraParte.split("&");
  const filtrar = hola.map((element) => element.split("=").at(1));
  return filtrar;
};

const url = "https://retosdeprogramacion.com?year=2023&challenge=0";

console.log(obtenerParametros(url));
