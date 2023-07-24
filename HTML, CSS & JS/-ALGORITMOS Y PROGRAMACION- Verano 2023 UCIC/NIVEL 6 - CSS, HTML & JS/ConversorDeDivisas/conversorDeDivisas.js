document.querySelector(".container").innerHTML=
`
<h1>Conversor de divisas</h1>
  <p>Ingresa tu moneda en dólares y la convierto a pesos mexicanos</p>
  <input type="number" placeholder="Ingresa tus USD" id="dolares_estadounidenses"><!--ELEMENTO DE ENTRADA-->
  <br>
  <br>
  <input type="number" placeholder="Ingresa tus MXN" id="pesos_mexicanos">
  <br>
  <br>
  <button class="calc1" onclick="convertir_dolares_a_pesos()">Convertir USD - MXN</button><!--GATILLO-->
  <br>
  <br>
  <button class="calc1" onclick="convertir_pesos_a_dolares()">Convertir MXN - USD</button>
  <br>
  <p id="output"></p><!--ELEMENTO DE SALIDA-->
`

const DOLARES_AMERICANOS = document.getElementById("dolares_estadounidenses")//Elemento de entrada
const PESOS_MEXICANOS = document.getElementById("pesos_mexicanos")
const OUTPUT = document.getElementById("output")
const TASA_CONVERSION = 16.92

function convertir_dolares_a_pesos(){
  let pesos_mexicanos = (DOLARES_AMERICANOS.value * TASA_CONVERSION).toFixed(2)/*toFixed(2), para que solo permita dos decimales*/
  OUTPUT.innerText =`${pesos_mexicanos} MXN.`  
}

function convertir_pesos_a_dolares(){
  let dolares_americanos = (PESOS_MEXICANOS.value * 1/(TASA_CONVERSION)).toFixed(2)
  OUTPUT.innerText = `${ dolares_americanos} USD.`
 
}
