/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase). */

var message1 = "Hola mundo ¿Cómo estas?";
var message2 = message1.toUpperCase();

console.log(message2)

/* b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var fruits = "limon, pera y mandarina";
var fruits1 = fruits.substring (0,5);

console.log(fruits1)

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var fruits2 = "naranja, banana, uva"
var fruits3 = fruits2.substring (-3)

console.log(fruits3)

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var fruits4 = "sandía, mango, kiwi"
var fruits5 = fruits4.substring(0,1).toUpperCase() + fruits4.substring(1,19).toLowerCase()

console.log(fruits5)

/* e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var time = "El dia está soleado"
var time1 = time.indexOf(" ")

console.log(time1)

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +) */

var time2 = "vegetales congelados"
console.log(time2.indexOf (" "))
var time3 = time2.substring(0,1).toUpperCase() + time2.substring(1,9).toLowerCase() + " " + time2.substring(10,11).toUpperCase() + time2.substring(11,20).toLowerCase() 

console.log(time3)
