//  Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


const numeroPrimo = (n) =>{
  let aux =0;
  for (let i=2; i<=n ; i++){
    if( n % i===0){
      aux++;
    }
  }
  if (aux === 1){
    return true
  }{
    return false
  }
}

console.log(numeroPrimo(2))