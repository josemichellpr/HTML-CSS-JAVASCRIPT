document.querySelector(".container").innerHTML = 
`
<h1>¿Cuál es tu nombre y apellido?</h1>
<p>Ingresa tu nombre y apellido y presiona el botón</p>
<input type="text"  id="Nombre" placeholder="Nombre"></input>
<br>
<br>
<input type="text"  id="Apellido" placeholder="Apellido"></input>
<br>
<p id ="elemento_salida"></p><!--id="" es el "puente" entre HTML y JS-->
<button class="calc1" onclick="calc()">Calcular</button><!--"calc" es la función JS-->
`

const NOMBRE = document.getElementById("Nombre")
const APELLIDO = document.getElementById("Apellido")
const OUTPUT = document.getElementById("elemento_salida")


function calc(){
  OUTPUT.innerText= NOMBRE.value + " " + APELLIDO.value /* Como desde el inicio "NOMBRE" y "APELLIDO", son "strings", no hay necesidad de volverlos entidades numéricas. Recordar que lo que entra en un <input> por defecto JS lo mando como "string", aunque en HTML se haya declarado type="number" */
}
