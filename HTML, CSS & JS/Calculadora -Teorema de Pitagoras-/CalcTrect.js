/*const container = document.getElementById("container")
El profesor nos comenta que es mejor como la línea de abajo
en vez del quilombo de esta línea de código. 
Que nos evitamos declarar otra variable (como en la línea de 
código de arriba.)*/

document.getElementById("container").innerHTML =
 `
<h1>TEOREMA DE PITÁGORAS - CALCULADORA</h1>
<img src="imgC/Teorema-de-pitagoras.png" alt="">
<h2>Ingresa tus valores</h2>
<input type="tel"  id="inputEl1"></input>
<input type="tel" id="inputEl2" ></input>
<button id="calc">ME FALTA UN  CATETO</button>
<button id="calc1">ME FALTA LA HIPOTENUSA</button>

<p id="ulEl"></p>
<!--Puse el Id, porque de otra forma, ¿cómo
hacemos el nexo entre este elemento HTML y JS? -->
<button id="open-modal"> AYUDA 😀</button>
`
/* Hay que tener cuidado de en dónde ponemos el innerHTML, ya que lo estaba poniendo
abajo de "const ulEl [...]" y simplemente no se renderizaba mi dialogo para indicar
las medidas del cateto o hipotenusa, según sea el caso. POR ESO NO LO LEÍA.
Entonces hay que tener cuidado de en dónde declaramos las variables y tener presente 
que el navegador lee de arriba hacia abajo. No es así cómo que lea de arriba a abajo y 
viceversa, acto seguido (como escaneando el código de arriba a abajo --> NO). 

Por otra parte he notado que mis profesores en Scrimba, guardan el HTML en JS, por eso 
lo hago de esa forma. */

document.getElementById("overlay").innerHTML = 
`
<div id="modal">
<p>Solo preocúpate por ingresar tus datos (solo números y no importa el orden), la calculadora hará lo demás. 😀</p>
<button id="close-modal">CERRAR 👋</button>
</div><!--close "modal"-->

`

const inputEl1 = document.getElementById("inputEl1") /* 1ER cuadro de texto - INPUT  */
const inputEl2 = document.getElementById("inputEl2")
const ulEl = document.getElementById("ulEl") /* Donde se renderizaba mi diálogo para indicar
las medidas del cateto o hipotenusa, según sea el caso */


document.getElementById("open-modal").addEventListener("click", function() {
   document.getElementById("overlay").style.display = "block";
})/*Hay que procurar traducir la función que esta justo arriba con el id = "open-modal". Vamos por partes:
*document.getElementById("open-modal") --> Has blanco en la estructura HTML con el id = open-modal
*addEventListener("click",function(){ --> En cuanto el usuario haga ""click* corre la siguiente
función que está en las llaves {}.
* document.getElementById("overlay").style.display = "block"; --> Has blanco en la estructura HTML con id="overlay" y dale en CSS un display:"block" (en otras palabras será visible lo que este dentro del id = "overlay")*/


document.getElementById("open-modal").addEventListener("dblclick", function() {
   document.getElementById("overlay").style.display = "none";
}) /* Aqui es lo mismo, pero para que cierre "overlay" (el recuadro que dice: Solo preocúpate por ingresar tus datos (solo números y no importa el orden), la calculadora hará lo demás. 😀 ) debe hacer doble clíc. Eso es todo.  */

document.getElementById("close-modal").addEventListener("click", function() {
   document.getElementById("overlay").style.display = "none";
}) /*Hay que procurar traducir la función que esta justo arriba con el id = "close-modal". Vamos por partes:
*document.getElementById("close-modal") --> Has blanco en la estructura HTML con el id = close-modal
*addEventListener("click",function(){ --> En cuanto el usuario haga ""click* corre la siguiente
función que está en las llaves {}.
* document.getElementById("overlay").style.display = "none"; --> Has blanco en la estructura HTML con id="overlay" y dale un display en CSS = "none" (en otras palabras no será visible lo que este dentro del id = "overlay")*/
 

document.getElementById("calc").addEventListener("click", function(){/*Esta función cubre la eventualidad de que el usuario quiera calcular un CATETO. */
   let hipotenusa = inputEl1.value /* Por si las dudas, se asignan los valores a variables declaradas */
   let cateto = inputEl2.value /* X2 */
   let catetoElevadoalCuadrado = hipotenusa**2 - cateto**2 /* Separo el argumento porque previamente NO me estaba funcionando como esperaba, me aparecia en algunos casos NaN, por eso procedí a separar de esta forma. */
      if(catetoElevadoalCuadrado < 0){
          let catetoElevadoalCuadradoporMenosuno = -1*catetoElevadoalCuadrado /* Si el argumento es negativo, mandará un error (muchas calculadoras fallan con NUMEROS IMAGINARIOS), en ese caso deberá multiplicar por -1, para enmendar el fallo.  */
          let catetoObtenidoMedianteRaizcuadrada = Math.sqrt(catetoElevadoalCuadradoporMenosuno) /*Aplica la raiz cuadrada a catetoElevadoalCuadradoporMenosuno */
          let catetoObtenidoMedianteRaizcuadradaConcuatroDecimales = catetoObtenidoMedianteRaizcuadrada.toFixed(4)
          ulEl.innerText = `El cateto es igual a ${catetoObtenidoMedianteRaizcuadradaConcuatroDecimales} unidades de medida`
       }
       else { /*Si es que el argumento no es negativo (evitando el "error" por números IMAGINARIOS) procede con normalidad */
         let catetoObtenidoMedianteRaizcuadrada = Math.sqrt(catetoElevadoalCuadrado)
         let catetoObtenidoMedianteRaizcuadradaConcuatroDecimales = catetoObtenidoMedianteRaizcuadrada.toFixed(4)
         ulEl.innerText = `El cateto es igual a ${catetoObtenidoMedianteRaizcuadradaConcuatroDecimales} unidades de medida`
      }
})/*termina calc.addEventListener */

document.getElementById("calc1").addEventListener("click",function(){ /*Esta función cubre la eventualidad de que el usuario quiera calcular la HIPOTENUSA */
   let catetoUno = inputEl1.value
   let catetoDos = inputEl2.value
   let hipotenusaObtenidaMedianteRaizcuadrada = Math.sqrt(catetoUno**2 + catetoDos**2)       
   let hipotenusaObtenidaMedianteRaizcuadradaConcuatroDecimales = hipotenusaObtenidaMedianteRaizcuadrada.toFixed(4)
   ulEl.innerText = `La hipotenusa tiene una magnitud igual a ${hipotenusaObtenidaMedianteRaizcuadradaConcuatroDecimales} unidades`  
})/*termina calc1.addEventListener */ /* Vamos a procurar traducir la línea de código. Vamos por partes:
*document.getElementById("calc1") --> Has blanco en la estructura HTML con el id = calc1
*addEventListener("click",function(){ --> En cuanto el usuario haga ""click* corre la siguiente
función que está en las llaves {}.
 
/*Estoy checando con las dos funciones que se acaban de declarar anteriormente "calc" y "calc1"
que no es tan necesario declarar una función y despues "hacer blanco" por medio del Id como 
nos enseño el profe Per (curso elemental de JS en YouTube). 
De esta forma como se aprecia en las dos funciones citadas, se puede apreciar como se "hizo blanco"
y ahi mismo se manda a traer la función y FUNCIONA, ya lo verifique. */

/*A GRANDES RASGOS. ENTENDER JS SOLO ES CUESTIÓN DE PRÁCTICA. ES UN POCO MÁS ELABORADO QUE PYTHON, PORQUE HAY QUE CONCILIAR (SOBRETODO) A JS CON HTML (y a veces tambien con CSS), ESE ES EL RETO (a diferencia de Python). JS no tiene (hasta donde sé) una consola que te pida datos como pasa con PYTHON, TU LA TIENES QUE HACER EN HTML. Esa es la diferencia y que JS es el lenguaje de muchos navegadores.
ESO SON MIS CONCLUSIONES POR EL MOMENTO*/