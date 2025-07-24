const sumar = (a, b) => a + b;
console.log(sumar(2, 3));

//

const esPar = numero => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(esPar(4));

//

const frutas = ["manzana", "pera", "plátano"];

frutas.forEach((fruta, i) => {
  console.log(`${i + 1}: ${fruta}`);
});