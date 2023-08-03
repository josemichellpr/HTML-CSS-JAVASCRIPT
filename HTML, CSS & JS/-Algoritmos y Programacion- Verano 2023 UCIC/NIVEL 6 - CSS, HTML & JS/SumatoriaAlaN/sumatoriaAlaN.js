document.querySelector(".container").innerHTML=
`
<h1>Sumatoria a límite establecido</h1>
<p>Ingresa el límite de la sumatoría y el exponente de la potencia. Números enteros iguales o mayores que 0 y menores que 11. El inicio de la sumatoria es 0.</p>
<p>El exponente debe ser un número entero positivo y menor que 6.</p>
<label for="">Límite</label>
<br>
<input type="number" placeholder="límite" id="limite">
<br>
<br>
<label for="">Exponente</label>
<br>
<input type="number" 
placeholder="exponente" id="exponente">
<br>
<br>
<button class="calc1" onclick="calcular()">Calcular</button>
<p id="output2"></p>
`

document.querySelector(".mensajeaAlumno").innerHTML=
`
<p id="output"></p>
`

/* Definir como constantes los elementos de entrada y salida */
const LIMITE = document.getElementById("limite")/*Aquí se pone el límite según convenga*/
const OUTPUT = document.getElementById("output")
const OUTPUT2 = document.getElementById("output2")
const EXPONENTE = document.getElementById("exponente")
/* Definir como constantes los elementos de entrada y salida */


function calcular(){
  let i=0, limite = Math.floor(LIMITE.value),sumatoriaAlaN=0,exponente=Math.floor(EXPONENTE.value),acumulado=`0`
  if(limite<0 || limite>10){
    OUTPUT.innerText = `Error vuelve a ingresar los datos`
    document.querySelector(".mensajeaAlumno").style.backgroundColor = `red` /* Se rotula el color de fondo ROJO */
    OUTPUT2.innerText =`` /* Se ponen string vacios, para que si manda el error, no haya sumatorias pasadas que no corresponden*/
  }
  else{
    if(exponente<0 || exponente>5){
      OUTPUT.innerText = `Error, vuelve a capturar los datos`
      document.querySelector(".mensajeaAlumno").style.backgroundColor = `red` /* Se rotula el color de fondo ROJO */
      OUTPUT2.innerText =``

    }
    else{
      document.querySelector(".mensajeaAlumno").style.backgroundColor = `green` /* Se rotula el color de fondo VERDE */
      while(!(i===limite)){/* Este algoritmo fue diseñado con apoyo de Raptor, ahí el valor booleano para entrar al bucle es false, por eso se usa aquí el operador lógico de negación */
        i+=1 //i=i+1
        sumatoriaAlaN+=i**(exponente) //sumatoriaAlCuadrado=sumatoriaAlCuadrado+i*i
        acumulado+=` + ${i**(exponente)}` //acumulado=acumulado + ` + ${i**(exponente)}`
        
      }
      OUTPUT2.innerText = `${acumulado} = ${sumatoriaAlaN}`
      OUTPUT.innerText= `El resultado de la sumatoria es ${sumatoriaAlaN}`
    }
  }
}//Termina la función

/*
03 de agosto de 2023
El programa funciona muy bien, no he visto anomalias hasta el momento. La novedad en este caso, es la variable "acumulado" que no es más que una concatenación de strings haciendo uso de las template strings. Los rotulos funcionan sin problemas. Estoy satisfecho.
*/


