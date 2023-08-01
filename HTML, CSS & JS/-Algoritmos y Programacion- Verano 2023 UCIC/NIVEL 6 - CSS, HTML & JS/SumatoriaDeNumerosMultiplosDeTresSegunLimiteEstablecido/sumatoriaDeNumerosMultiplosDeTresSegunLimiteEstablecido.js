document.querySelector(".container").innerHTML=
`
<h1>Sumatoria de números múltiplos de tres segun limite establecido</h1>
<p>Tu decides el límite de la sumatoria</p>
<input type="number" placeholder="Inicio de sumatoria" id="inicio_de_sumatoria">
<br>
<br>
<input type="number" placeholder="Fin de sumatoria" id="fin_de_sumatoria">
<br>
<br>
<button class="calc1" onclick="calcular_sumatoria()">Calcular</button>
<p id="output"></p>
`
/* Definir como constantes los elementos de entrada y salida */
const INICIO_DE_SUMATORIA=document.getElementById("inicio_de_sumatoria")/* elemento de entrada */
const FIN_DE_SUMATORIA=document.getElementById("fin_de_sumatoria")/* elemento de entrada */
const OUTPUT = document.getElementById("output") /* elemento de salida */
/* Definir como constantes los elementos de entrada y salida */


function calcular_sumatoria(){/* Comienza la función */
let i = 0,inicioDeSumatoria=Math.floor(INICIO_DE_SUMATORIA.value),finDeSumatoria=Math.floor(FIN_DE_SUMATORIA.value)
let variable = inicioDeSumatoria,suma_de_multiplos_de_tres = 0
if(finDeSumatoria<inicioDeSumatoria){
    OUTPUT.innerText = `Error.Vuelve a capturar los datos`
}
else{
    while(!(i===(finDeSumatoria-inicioDeSumatoria)+1)){/* Se declara asi, con un operador lógico de negación, porque la lógica de programación se hizo en Raptor y en ese software de diagrama de flujo, se "entra" al bucle cuando el argumento es falso. Aqui se "entra" cuando el argumento es verdadero (true) */
        if(variable%3===0){
            suma_de_multiplos_de_tres+=variable
        }
        i+=1
        variable+=1
    }    
    OUTPUT.innerText=`El resultado de la sumatoria es ${suma_de_multiplos_de_tres}`
    }
}/* Termina la función */


