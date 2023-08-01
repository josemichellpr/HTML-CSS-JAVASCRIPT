document.querySelector(".container").innerHTML = 
`
<h1>Promedio de dos calificaciones</h1>
<p>Ingresa tus calificaciones</p>
<input type="number" placeholder="Materia 1" id="materia_1">
<br><!--Es para poner espacio vertical-->
<br>
<input type="number" placeholder="Materia 2" id="materia_2">
<br>
<br>
<button class="calc1" onclick="calcular_promedio()">Calcular</button>
<p id="output"></p>
`

/* Definir como constantes los elementos de entrada y salida */
const MATERIA1 = document.getElementById("materia_1")
const MATERIA2 = document.getElementById("materia_2")
const OUTPUT = document.getElementById("output")
/* Definir como constantes los elementos de entrada y salida */


function calcular_promedio(){
  let materia_1 = Math.floor(MATERIA1.value),materia_2 = Math.floor(MATERIA2.value)
  let conjunto_de_calificaciones = [
    materia_1,
    materia_2
  ]

  if(materia_1>100 || materia_2>100){
    OUTPUT.innerText = "Error.Vuelve a ingresar los datos"
  }
  else{
    let promedio = (conjunto_de_calificaciones[0]+conjunto_de_calificaciones[1])/conjunto_de_calificaciones.length
    OUTPUT.innerText=`Tu promedio es igual a ${promedio}` 
  }
  
 /* No pondré un filtro para números menores de cero, ya que el riesgo está en alguien que quiera sacar ventaja, no viceversa */
}/* Termina la función */

/*FUNCIONA BIEN*/