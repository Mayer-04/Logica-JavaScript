/* Crea un programa que utilice el módulo fs para listar todos los archivos en un directorio específico. 
Muestra el nombre de cada archivo en la consola. */

const fs = require("node:fs");
const path = require("node:path");

const listarArchivos = (directorio) => {
  fs.readdir(directorio, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const arregloArchivos = data.filter((archi) => {
      const pathJavascript = path.join(directorio, archi);
      const stats = fs.statSync(pathJavascript);
      const detallesArchivo = stats.isFile();

      if (detallesArchivo) {
        return pathJavascript;
      }
    });

    for (const archivos of arregloArchivos) {
      console.log(archivos);
    }
  });
};

const directorio = "./javascript";

console.log(listarArchivos(directorio));
