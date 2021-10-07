/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 
console.log(meses[5], meses[11]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). 

console.log(meses.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

meses.unshift("verano")
meses.push("otoño")

console.log(meses)

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses.pop()
meses.shift()

console.log(meses)
