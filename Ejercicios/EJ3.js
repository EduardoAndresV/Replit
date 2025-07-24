//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


const separarCadena = (cadena="",x) => {
  let aux = cadena.split(x)
  console.log(aux)
}

separarCadena('hola que tal', ' ')