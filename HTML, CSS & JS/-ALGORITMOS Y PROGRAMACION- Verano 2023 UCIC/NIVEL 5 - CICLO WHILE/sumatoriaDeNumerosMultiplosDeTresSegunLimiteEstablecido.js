/*
Programa en el cual solo se suman los números múltiplos de 3 entre dos límites dados.
*/
let i=0
let limite_inferior=11
let limite_superior=54
let variable=limite_inferior
let suma_de_numeros_multiplos_de_tres=0
while(!(i===(limite_superior-limite_inferior)+1)){
  if(variable%3===0){   suma_de_numeros_multiplos_de_tres=suma_de_numeros_multiplos_de_tres+variable
  }
  i=i+1
  variable=variable+1
}
console.log(suma_de_numeros_multiplos_de_tres)
/*FUNCIONA MUY BIEN*/
