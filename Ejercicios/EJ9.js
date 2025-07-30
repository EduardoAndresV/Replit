//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;;
}


for (let i =0; i<10; i++) {
  console.log(aleatorio(501,600))
}