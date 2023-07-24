/*Van a catalogar a una persona en función de su edad
Hay cuatro posibilidades
1. Si es menor de 14 es niño(a)
2. Si la edad es mayor o igual que 14 es joven
3. Si la edad es mayor o igual a 25 es adulto
4. Si la edad es mayor o igual que 70 es anciano*/


let edad=-12


if (0<edad && edad<14){
  console.log("Eres un niño")
}
else if(14<=edad && edad<25){
  console.log("Eres un joven")
}
else if(25<=edad && edad<70){
  console.log("Eres un adulto")
}
else if(70<=edad && edad<125){
  console.log("Eres un anciano")
}
else{
  console.log("Nadie tiene edad negativa o ha vivido tanto tiempo")
}


/* Intente hacer funcionar este con puros operadores matemáticos, sin operadores lógicos. Como con Python, estuve intentando durante unos minutos y no, mejor así, para qué gastar tiempo. Si así se puede. */

/*Mostrando la lógica de programación del ejercicio de “verificar peso y estatura para subir a la atracción”.
Con la lógica de programación, que no incluye al operador lógico and, intentar este ejercicio.*/
