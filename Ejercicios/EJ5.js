//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena="") =>{
  let aux = cadena.split("").reverse().join("");
  console.log(aux)

}

invertirCadena("Hola Mundo")