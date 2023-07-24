/* EN ESTE EJERCICIO DE JS USO UN ID PARA ACTIVAR UNA FUNCIÓN. NO SE USA EL onclick en el botón */

document.querySelector(".container").innerHTML=
`
<h1>Escribe tu password</h1>
<p>Si es incorrecta, no puedes entrar</p>
<input type="text"  id="inputEl1" placeholder="Escribe tu password"></input>
<br>
<br>
<input type="text"  id="inputEl2" placeholder="Confirma tu password"></input>
<p id="output"></p>
<button id="autentificar">Enviar</button>
`

const inputEl1 = document.getElementById("inputEl1") /* 1ER cuadro de texto - INPUT  */
const inputEl2 = document.getElementById("inputEl2") 
const OUTPUT = document.getElementById("output") 
document.getElementById("autentificar").addEventListener("click", function(){/* */
  let password1 = inputEl1.value /* Por si las dudas, se asignan los valores a variables declaradas */
  let password2 = inputEl2.value
   if(password1!=password2){
      OUTPUT.innerText = " No coinciden."
   }
    else{
    OUTPUT.innerText ="Gracias por registrarte."
  }
   
})/*termina calc.addEventListener */

/* FUNCIONA BIEN */