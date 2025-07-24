const colores = ["rojo", "verde", "azul"];

for (const color of colores) {
  console.log(color);
}
// rojo
// verde
// azul


const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Santiago"
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
// nombre: Ana
// edad: 30
// ciudad: Santiago


const numeros = [1, 2, 3];

numeros.forEach((num, idx) => {
  console.log(`Índice ${idx}: ${num}`);
});
// Índice 0: 1
// Índice 1: 2
// Índice 2: 3