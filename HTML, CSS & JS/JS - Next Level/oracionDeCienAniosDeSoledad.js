/*
Comprobar cuántas veces aparece el caracter "o", con o sin tilde, en la siguiente cadena de caracteres.
*/

let cuenta = 0
ORACION = `Muchos años despues, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a reconocer el hielo`

for (let entry of ORACION) {
    if(entry===`o` || entry===`ó`){cuenta++}
}
    
console.log(cuenta)

/*
Dejo este pedazo de código, para que se entienda mejor el bucle for of, que es su equivalente.
for(i=0;i<ORACION.length;i++){
    if(ORACION[i]===`o` || ORACION[i]===`ó`){cuenta++}
}
*/

/*
FUNCIONA BIEN
*/


