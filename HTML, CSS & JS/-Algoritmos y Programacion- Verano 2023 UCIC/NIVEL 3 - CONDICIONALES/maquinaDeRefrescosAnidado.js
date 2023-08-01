/*
Crear un programa que simule una máquina de refrescos.
Tendremos 4 diferentes refrescos
Cada opción equivale a un refresco
UTILIZANDO IF ANIDADOS
*/

numero_de_refresco=0
if(numero_de_refresco===1){
  console.log("Toma tu Coca-Cola")
}
else{
  if(numero_de_refresco===2){
    console.log("Toma tu Pepsi")
  }
  else{
    if(numero_de_refresco===3){
      console.log("Toma tu Manzana")
    }
    else{
      if(numero_de_refresco===4){
        console.log("Toma tu Sprite")
      }
      else{
        console.log("Refresco inexistente / Elige otra opción")
      }
    }
  }
}
