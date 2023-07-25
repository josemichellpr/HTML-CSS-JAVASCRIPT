document.querySelector(".container").innerHTML = 
`
<h1>Promedio de calificaciones</h1>
<p>Ingresa tus calificaciones</p>
<input type="number" placeholder="Materia 1" id="materia_1">
<br><!--Es para poner espacio vertical-->
<br>
<input type="number" placeholder="Materia 2" id="materia_2">
<br>
<br>
<input type="number" placeholder="Materia 3" id="materia_3">
<br>
<br>
<input type="number" placeholder="Materia 4" id="materia_4">
<br>
<br>
<input type="number" placeholder="Materia 5" id="materia_5">
<br>
<br>
<button class="calc1" onclick="calcular_promedio()">Calcular</button>
<p id="output"></p>
`

document.querySelector(".mensajeaAlumno").innerHTML=
`
<p id="messageForStudent"></p>
`

const MATERIA1 = document.getElementById("materia_1")
const MATERIA2 = document.getElementById("materia_2")
const MATERIA3 = document.getElementById("materia_3")
const MATERIA4 = document.getElementById("materia_4")
const MATERIA5 = document.getElementById("materia_5")
const OUTPUT = document.getElementById("output")
const MESSAGE_FOR_STUDENT = document.getElementById("messageForStudent")

function calcular_promedio(){
  let materia_1 = Math.floor(MATERIA1.value)/* Esta genial el método Math.floor porque matas dos pájaros de un tiro: vuelves a "number" el "string" que toma por defecto JS y si el usuario pone un entero con decimal, le quita dicho decimal */
  let materia_2 = Math.floor(MATERIA2.value)
  let materia_3 = Math.floor(MATERIA3.value)
  let materia_4 = Math.floor(MATERIA4.value)
  let materia_5 = Math.floor(MATERIA5.value)
  let acumulado =0 /* Hay que poner el acumulado fuera del bucle for, porque de lo contrario, su valor nunca cambiará */
  let calificaciones = [
    materia_1,
    materia_2,
    materia_3,
    materia_4,
    materia_5
  ]
  
  for(let i=0; i<calificaciones.length; i++){
    acumulado+=calificaciones[i]
  }

  if(materia_1>100 || materia_2>100 || materia_3>100 || materia_4>100 || materia_5>100){
    OUTPUT.innerText = "Error.Vuelve a ingresar los datos"
    document.querySelector(".mensajeaAlumno").style.display="none"
  }
  else{
    let promedio = acumulado/calificaciones.length
    OUTPUT.innerText=`Tu promedio es igual a ${promedio}` 

    if(promedio<70){
      MESSAGE_FOR_STUDENT.innerText=`Reprobatorio`
      document.querySelector(".mensajeaAlumno").style.backgroundColor="red"
    
     }
     else{
      MESSAGE_FOR_STUDENT.innerText=`Aprobatorio`
      document.querySelector(".mensajeaAlumno").style.backgroundColor="green"

     }
  }
  
 /* No pondré un filtro para números menores de cero, ya que el riesgo está en alguien que quiera sacar ventaja, no viceversa */

 console.log(calificaciones.length)/* Para tener certeza de lo que hacemos */


}
