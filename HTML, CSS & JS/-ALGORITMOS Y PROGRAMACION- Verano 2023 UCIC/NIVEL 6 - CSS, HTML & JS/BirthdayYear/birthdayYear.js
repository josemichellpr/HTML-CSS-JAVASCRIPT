document.querySelector(".container").innerHTML = 
`
<h1>Calculadora de año de nacimiento</h1>
<p>Ingresa tu edad y te diré aproximadamente el año en el que naciste </p>
<input type="number" placeholder="Edad " id="edad">
<br>
<br>
<button class="calc1" onclick="calcular_anio()">Calcular</button>
<br>
<p id="output"></p>
`

const EDAD = document.getElementById("edad")
const OUTPUT = document.getElementById("output")
const FECHA = 2023

function calcular_anio(){
  anio = FECHA - EDAD.value
  OUTPUT.innerText= `Tu año de nacimiento es aproximadamente ${anio}`
}
