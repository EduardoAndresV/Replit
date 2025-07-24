//Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (cadena="",palabra) =>{
  let cadena2 = cadena.split(" ");
  let contador =0;
  for (let i of cadena2){
    let aux = (i === palabra) ? contador++ : null;
  }
  console.log(contador)
}

contarPalabras("hola mundo adios mundo mundo mundo ", "mundo")