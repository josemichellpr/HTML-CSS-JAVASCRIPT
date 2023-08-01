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
/* Definir como constantes los elementos de entrada y salida */
const EDAD = document.getElementById("edad")
const OUTPUT = document.getElementById("output")
const FECHA = 2023
/* Definir como constantes los elementos de entrada y salida */


function calcular_anio(){
  let edad = Math.floor(EDAD.value)/* He hecho el experimento con la aplicación que corre JS en mi celular y Math.floor() "mata dos pajaros de un tiro". Convierte de string a int y le quita los decimales al entero con el que vamos a trabajar. De esa manera tenemos más rigor matemático y no hacemos entrar en bucles infinitos a nuestro algoritmo */
  anio = FECHA - edad
  OUTPUT.innerText= `Tu año de nacimiento es aproximadamente ${anio}`
}

/* FUNCIONA BIEN */