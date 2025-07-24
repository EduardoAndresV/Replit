function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarUsuario(callback) {
  const nombre = "Eduardo";
  callback(nombre); // ejecuta la función que se pasó como parámetro
}

procesarUsuario(saludar); 


//

function operar(a, b, callback) {
  return callback(a, b); //Dentro de operar: se llama suma(5, 3) → devuelve 8
}

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;

console.log(operar(5, 3, suma));  
console.log(operar(5, 3, resta));