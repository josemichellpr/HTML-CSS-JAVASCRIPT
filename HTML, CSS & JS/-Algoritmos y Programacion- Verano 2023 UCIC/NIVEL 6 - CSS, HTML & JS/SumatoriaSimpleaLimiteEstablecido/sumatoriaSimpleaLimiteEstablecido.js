document.querySelector(".container").innerHTML = 
`
<h1>Sumatoria a límite establecido</h1>
<p>Ingresa el límite de la sumatoría</p>
<p>P/E: La sumatoria del 1 al 10 es igual a 55</p>
<input type="number" placeholder="Límite" id="limite">
<br>
<br>
<button class="calc1" onclick="calcular()">Calcular</button>
<p id="output"></p>
`


/* Definir como constantes los elementos de entrada y salida */
const LIMITE = document.getElementById("limite")/*Aquí se pone el límite según convenga*/
const OUTPUT = document.getElementById("output")
/* Definir como constantes los elementos de entrada y salida */


function calcular(){
  let i=0, limite = Math.floor(LIMITE.value), sumatoria=i  /*Este valor no debe cambiarlo el usuario*/
  if(limite<0){
    OUTPUT.innerText=`Error. Vuelve a ingresar los datos`
  }
  else{
    while(!(i===limite+1)){
      sumatoria+=i //sumatoria=sumatoria+i
      i+=1 //i=i+1
    }
      OUTPUT.innerText =`El resultado de la sumatoria es ${sumatoria}` 
  }
   
}


