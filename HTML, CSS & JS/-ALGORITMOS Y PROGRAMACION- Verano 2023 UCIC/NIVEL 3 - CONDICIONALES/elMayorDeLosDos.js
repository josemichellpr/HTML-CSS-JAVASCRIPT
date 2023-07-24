/*Programa que pide tu edad y la edad de un amigo.
Y que diga cual es el mayor de los dos.
Se empieza comprobando la condición de que las edades sean iguales.*/

let tu_edad=30
let edad_amigo=28
if(tu_edad>edad_amigo){
  console.log("Tú tienes más edad que tu amigo")
}
else{
  if(tu_edad===edad_amigo){
    console.log("Tu amigo y tu tienen la misma edad")
  }
  else{
    console.log("Tu amigo es mayor que tu")
  }
}
