//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


const capicua = (n) => {

  numeroString= n.toString();
  numeroInv = numeroString.split("").reverse().join("");
  console.log(numeroInv)
  let resultado = (numeroString === numeroInv);
  return resultado;
}


console.log(capicua(2002))