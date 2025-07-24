//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const cadenaPalindromo = (cadena="") =>{
  let cadenaMinuscula = cadena.toLocaleLowerCase();
  let cadenaInvertida = cadenaMinuscula.split("").reverse().join("")
  console.log(cadenaInvertida)
  let aux = (cadenaMinuscula===cadenaInvertida) ? true : false
  console.log(aux)
}


cadenaPalindromo("Salas")