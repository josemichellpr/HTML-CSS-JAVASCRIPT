/*
Programa que realiza la sumatoria de un límite establecido.
Por ejemplo, la sumatoria de 0 a 10 es igual a 55
*/
let i=0 /*Este valor no debe cambiar*/
let limite=20/*Aquí se pone el límite según convenga*/
let sumatoria=0 /*Este valor no debe cambiar*/
while(!(i===limite+1)){
  sumatoria+=i //sumatoria=sumatoria+i
  i+=1 //i=i+1
}
console.log(sumatoria)