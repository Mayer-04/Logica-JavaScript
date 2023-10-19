/* 
Crea una función llamada consultarAPI que tome una URL y un callback como argumentos. 
La función debería hacer una solicitud HTTP a la URL proporcionada y luego llamar al callback con la respuesta.
*/

function consultarAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}

consultarAPI("https://rickandmortyapi.com/api/character", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
