document.querySelector(".container").innerHTML =
`
<h1>Conversor de unidades</h1>
<p>Inserta tus unidades del Sistema Inglés</p>
<input type="number" placeholder="Ingresa libras" id="masa_en_libras">
<br>
<br>
<button class="calc1" onclick="convertir_lb_kg()">Convertir lb-kg</button>
<p id="output"></p>
`

/* Definir como constantes los elementos de entrada y salida */
const MASA_EN_LIBRAS = document.getElementById("masa_en_libras")
const OUTPUT = document.getElementById("output")
const COEFICIENTE_CONVERSION = 1/2.205
/* Definir como constantes los elementos de entrada y salida */


function convertir_lb_kg(){/* ¿Recuerdas el onclick="convertir_lb_kg()" ?  en <button> */
  let masaEnLibras = Math.floor(MASA_EN_LIBRAS.value)
  if(masaEnLibras<0){
    OUTPUT.innerText=`Error, vuelve a ingresar los datos.`
  }
  else{
    let masa_en_kg = (masaEnLibras*COEFICIENTE_CONVERSION).toFixed(2) /*toFixed(2), para que solo permita dos decimales*/
    OUTPUT.innerText= `La masa en kilogramos es ${masa_en_kg}`
  }
}
