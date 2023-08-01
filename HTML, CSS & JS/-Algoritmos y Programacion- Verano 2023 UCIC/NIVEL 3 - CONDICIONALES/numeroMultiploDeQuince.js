
/*El objetivo de este programa es desarrollar un algoritmo que "sepa" que números son múltiplos tanto de 3 como de 5 */

let numero=15
let residuo_multiplo_quince=numero%15
let residuo_multiplo_cinco=numero%5
let residuo_multiplo_tres=numero%3

if(residuo_multiplo_quince===0){
  console.log("El número es múltiplo tanto de 3 como de 5")
}
else if(residuo_multiplo_cinco===0){
  console.log("El número es múltiplo  de 5")
}
else if(residuo_multiplo_tres===0){
  console.log("El número es multiplo de 3")
}
else{
  console.log("El número NO es multiplo de 3, 5 o ambos")
}
