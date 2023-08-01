document.querySelector(".container").innerHTML=
`
<!--AQUI EN EL "BODY" VA LA ESTRUCTURA DE LA PÁGINA WEB-->
<h1>CONTADOR DE VIDAS</h1>
  <h2 id ="output">0</h2><!--id="" es el "puente" entre HTML y JS-->
  <button class="calc1" onclick="incremento_btn()">Incrementar</button><!--"incremento_btn()" es la función JS-->
  <br>
  <br>
  <button class="calc1"  onclick="decremento_btn()">Decrementar</button>
  <br>
  <br>
  <button class="calc1" onclick="reiniciar_btn()">Reiniciar</button>
`

/* Definir como constantes los elementos de entrada y salida */
const OUTPUT=document.getElementById("output")/*Conectar el id de HTML con una variable de JS. AQUÍ GUARDAMOS LO QUE HTML NOS MANDE con el mismo "id"*/
/* Definir como constantes los elementos de entrada y salida */

let contador=0

function incremento_btn(){
  contador=contador+1/*En esta variable se va a guardar el valor del contador*/
  OUTPUT.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}


function decremento_btn(){
  contador=contador-1/*En esta variable se va a guardar el valor del contador*/
  if(contador<0){
    contador=0
  }
  OUTPUT.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}


function reiniciar_btn(){
  contador=contador*0/*En esta variable se va a guardar el valor del contador*/
  OUTPUT.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}

/*FUNCIONA BIEN */