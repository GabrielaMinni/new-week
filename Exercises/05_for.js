/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
 
var palabras = ["nombre", "apellido", "sexo", "edad", "nacionalidad"]
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

/* b.Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i].substring(0,1).toUpperCase()+palabras[i].substring(1).toLowerCase());
}
