/*
Programa en el cual solo se suman los números pares de cierto límite establecido por el usuario. Incluir los límites
*/
let i=0
let limite=20
let suma_constantes_pares=0
while(!(i===limite)){
  i=i+1
  if(i%2===0){
    suma_constantes_pares=suma_constantes_pares+i
  }
}
console.log(suma_constantes_pares)
/*FUNCIONA MUY BIEN*/
