const nombre = "melany cardona londoño";
const notas = [1.0, 3.5, 1.8];
const ficha = 3412785
const promedio = (notas[0] + notas[1] + notas[2]) / 3;
console.log("=======================");
console.log(`SISTEMAS DE NOTAS SENA`);
console.log(`=======================`);
console.log(`Aprendiz: ${nombre}`);
console.log(`ficha: ${ficha}`);
console.log(`notas: ${notas}`);
console.log(`=======================`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${promedio >= 3 ? "Aprobado" : "No Aprobado"}`);
