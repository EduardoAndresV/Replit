//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (cadena="",n) =>{
  let aux = cadena.slice(0,n);
  console.log(aux)
}


recortarTexto("Hola Mundo", 4);