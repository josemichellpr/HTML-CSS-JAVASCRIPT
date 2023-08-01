/*
ANTES DE PONERLES EL CÓDIGO TERMINADO, PÍDELES QUE INVESTIGUEN CÓMO HACER PARA ENCONTRAR EL NÚMERO EXACTO DE NIÑOS CON DULCES. Los dulces no pueden fraccionarse. En el código dejas como un string vacío la variable "infantes_con_dulce", para que de tarea ellos investiguen el método para hallar la división sin residuo.

Programa que dado un número de caramelos y un número de niños
,diga a cuántos caramelos toca cada niño y cuántos caramelos sobran
*/

let infantes=9
let dulces=72
let infantes_con_dulce=Math.floor(dulces/infantes)
let dulces_sobrantes=dulces%infantes
console.log("A cada niño le corresponden "+infantes_con_dulce +" dulces y sobran " +dulces_sobrantes+ " caramelos")


