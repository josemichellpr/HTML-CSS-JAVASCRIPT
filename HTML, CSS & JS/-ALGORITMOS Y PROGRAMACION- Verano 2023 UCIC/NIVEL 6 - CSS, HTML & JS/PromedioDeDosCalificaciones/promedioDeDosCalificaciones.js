document.querySelector(".container").innerHTML = 
`
<h1>Promedio de dos calificaciones</h1>
<p>Ingresa tus calificaciones</p>
<input type="number" placeholder="Materia 1" id="materia_1">
<br><!--Es para poner espacio vertical-->
<br>
<input type="number" placeholder="Materia 2" id="materia_2">
<br>
<p id="output"></p>
<button class="calc1" onclick="calcular_promedio()">Calcular</button>
`

const MATERIA1 = document.getElementById("materia_1")
const MATERIA2 = document.getElementById("materia_2")
const OUTPUT = document.getElementById("output")


function calcular_promedio(){
  let materia_1 = Math.floor(MATERIA1.value)/* Esta genial el método Math.floor porque matas dos pájaros de un tiro: vuelves a "number" el "string" que toma por defecto JS y si el usuario pone un entero con decimal, le quita dicho decimal */
  let materia_2 = Math.floor(MATERIA2.value)
  let promedio = (materia_1+materia_2)/2
  if(materia_1>100 || materia_2>100){
    OUTPUT.innerText = "Error.Vuelve a ingresar los datos"
  }
  else{
    OUTPUT.innerText=`Tu promedio es igual a ${promedio}` 
  }
  
 /* No pondré un filtro para números menores de cero, ya que el riesgo está en alguien que quiera sacar ventaja, no viceversa */
}
