document.querySelector(".container").innerHTML=
`
<!--AQUI EN EL "BODY" VA LA ESTRUCTURA DE LA PÁGINA WEB-->
<h1>CONTADOR DE VIDAS</h1>
  <h2 id ="cuenta">0</h2><!--id="cuenta" es el "puente" entre HTML y JS-->
  <button class="calc1" onclick="incremento_btn()">Incrementar</button><!--"incremento_btn()" es la función JS-->
  <br>
  <br>
  <button class="calc1"  onclick="decremento_btn()">Decrementar</button>
  <br>
  <br>
  <button class="calc1" onclick="reiniciar_btn()">Reiniciar</button>
`

let cuenta=document.getElementById("cuenta")/*Conectar el id de HTML con una variable de JS. AQUÍ GUARDAMOS LO QUE HTML NOS MANDE con el mismo "id"*/
let contador=0


function incremento_btn(){
  contador=contador+1/*En esta variable se va a guardar el valor del contador*/
  cuenta.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}


function decremento_btn(){
  contador=contador-1/*En esta variable se va a guardar el valor del contador*/
  if(contador<0){
    contador=0
  }
  cuenta.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}


function reiniciar_btn(){
  contador=contador*0/*En esta variable se va a guardar el valor del contador*/
  cuenta.innerText=contador/* Es para poner en pantalla de HTML el valor de "contador"*/
}
