/*Programa que en función de tu edad y peso, te permite entrar a un parque de atracciones (Six Flags)
Por seguridad, para poder subir tienes que tener más de 12 años y pesar más de 40 kilos */

let edad=15
let peso=40
if(edad>=12){
  if(peso>=45){
    console.log("Puedes pasar a la atracción")
  }
  else{
    console.log("No puedes subir a la atracción")
  }
}
else{
  console.log("No puedes subir a la atracción")
}
