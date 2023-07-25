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
<input type="number" placeholder="Materia 3" id="materia_3">
<br>
<br>
<input type="number" placeholder="Materia 4" id="materia_4">
<br>
<br>
<input type="number" placeholder="Materia 5 id="materia_5">
<br>
<br>
<button class="calc1" onclick="calcular_promedio()">Calcular</button>
<p id="output"></p>
`

const MATERIA1 = document.getElementById("materia_1")
const MATERIA2 = document.getElementById("materia_2")
const OUTPUT = document.getElementById("output")


function calcular_promedio(){
  let materia_1 = Math.floor(MATERIA1.value)/* Esta genial el método Math.floor porque matas dos pájaros de un tiro: vuelves a "number" el "string" que toma por defecto JS y si el usuario pone un entero con decimal, le quita dicho decimal */
  let materia_2 = Math.floor(MATERIA2.value)
  let conjunto_de_calificaciones = [
    materia_1,
    materia_2
  ]
  let promedio = (conjunto_de_calificaciones[0]+conjunto_de_calificaciones[1])/conjunto_de_calificaciones.length
  if(materia_1>100 || materia_2>100){
    OUTPUT.innerText = "Error.Vuelve a ingresar los datos"
  }
  else{
    OUTPUT.innerText=`Tu promedio es igual a ${promedio}` 
  }
  
 /* No pondré un filtro para números menores de cero, ya que el riesgo está en alguien que quiera sacar ventaja, no viceversa */
}
