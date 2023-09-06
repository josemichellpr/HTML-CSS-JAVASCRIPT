document.querySelector(".container").innerHTML =
`
<h1>Secuencia Fibonacci</h1>
<p>Si haces clic en el botón "Calcular término" el programa arrojará unicamente una cantidad.</p>

<input type="number" placeholder="Límite o término" id="input">
<br>
<br>
<button class="calc1" id="calcularSecuencia">Mostrar secuencia</button>
<br>
<br>
<button class="calc1" id="calcularTermino">Calcular término</button>
<p id="output"></p>
`

/* Definir como constantes los elementos de entrada y salida */
const INPUT = document.getElementById("input")
const OUTPUT = document.getElementById("output")
/* Definir como constantes los elementos de entrada y salida */


document.getElementById("calcularSecuencia").addEventListener("click", function(){/*Se declara la función de esta manera porque es más PRO y se uso un id desde HTML */
let limite = Math.floor(INPUT.value), i=0, acumulado=0,j=3 /* Es importante que j=3 para que así "j" entre en acción con el verdadero algoritmo de esta serie Fibonacci.  */
let array = [], copiaDeArray = `` /* El array sirve para ir ingresando con "push" los nuevos elementos de la serie Fibonacci | copiaDeArray es para poner la serie en forma vertical de la página, porque a la hora de imprimir el array se ponian de forma horizontal*/
let array2=[0,1,1], copiaDeArray2 = `0,1,1`
if(limite < 0){ /* Este if es para que no se colapse el programa */
  OUTPUT.innerText = `Error.Vuelve a ingresar los datos`
}

else{
   if(limite<3){
    while(i!==limite){
    acumulado=acumulado+i 
    array.push(acumulado) /* Para meter en el último elemento del array */
    copiaDeArray += `${array[i]},`
     i=i+1  
  }
  OUTPUT.innerText = copiaDeArray
  
}

else{ /* Este es el algoritmo para generar elemtnos de la serie, propiamente hablando */
  while(j!==limite){
  array2[j]=array2[j-1]+array2[j-2]
  array2.push[j]
  copiaDeArray2 += `, ${array2[j]}`
 j++   // j=j+1
}
OUTPUT.innerText = copiaDeArray2
}
}

})/*termina calc.addEventListener */

document.getElementById("calcularTermino").addEventListener("click", function(){
  let limite = Math.floor(INPUT.value), i=0, acumulado=0,j=3, array = [], array2=[0,1,1] 
  if(limite < 0){ /* Este if es para que no se colapse el programa */
  OUTPUT.innerText = `Error.Vuelve a ingresar los datos`
}

else{
   if(limite<3){
    while(i!==limite){
    acumulado=acumulado+i 
    array.push(acumulado) /* Para meter en el último elemento del array */
     i=i+1  
  }
  OUTPUT.innerText = array[i-1]
  
}

else{ /* Este es el algoritmo para generar elemtnos de la serie, propiamente hablando */
  while(j!==limite){
  array2[j]=array2[j-1]+array2[j-2]
  array2.push[j]
  j++   // j=j+1
}
OUTPUT.innerText = array2[j-1]
}
}


})/*termina calc.addEventListener */



/*
29 de agosto de 2023
FUNCIONA BIEN
*/




