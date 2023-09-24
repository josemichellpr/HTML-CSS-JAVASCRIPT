document.querySelector("body").innerHTML=
`
<div class="container">
        <div class="caja">
            <div class="aleatorio"></div>
            <p class="grande">+</p>
            <div class="aleatorio"></div>
            <p class="grande">=</p>
            <input type="number" class="aleatorio" id="enter">
        </div>
        <p id="output"></p> 
        <p id="mensaje"></p>
        <button id="trigger">Comprobar</button>
    </div>
`

let a =document.querySelectorAll(".aleatorio")[0]
a.innerText= Math.floor(Math.random()*10)
let b = document.querySelectorAll(".aleatorio")[1]
b.innerText = Math.floor(Math.random()*10)
let comprobacion = document.querySelectorAll(".aleatorio")[2]
const OUTPUT = document.getElementById("output")
document.getElementById("trigger").addEventListener("click",accion)

/*AQUÍ ESTÁ EL EVENTO PARA LOS INTERNAUTAS QUE USAN TECLADO*/
document.getElementById("enter").addEventListener("keypress")
if(e.key = "Enter"){accion()}
//Este detalle me parece valioso usarlo
/*AQUÍ ESTÁ EL EVENTO PARA LOS INTERNAUTAS QUE USAN TECLADO*/

const OUTPUT2 = document.getElementById("mensaje")

function accion (){
/*Para usar el operador triple igual (===), tuvé que convertirlos a número*/
let A = Math.floor(a.innerText), B = Math.floor(b.innerText), suma = Math.floor(comprobacion.value)

if(suma === A+B){
    OUTPUT.innerText="Correcto"
    OUTPUT.style.color ="green"
    OUTPUT. style.fontSize = "1.5rem"
    /*Hasta ahora me percato que se hace la igualación a una constante que en este caso es OUTPUT, para (como en matemáticas) no escribir una larga expresión a cada momento.*/
}
else{
    OUTPUT.innerText = `El resultado de ${A}+${B} es ${A+B}. Vuelve a intentar`
    OUTPUT.style.color = "red"
    OUTPUT.style.fontSize = "1.5rem"
}
a.innerText= Math.floor(Math.random()*10)
b.innerText = Math.floor(Math.random()*10)
comprobacion.value =``
comprobacion.focus()
}