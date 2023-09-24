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
    <button id="trigger">Comprobar</button>
</div>

`

/* Intente hacer unos cambios en los variables "a", "b" y "comprobación" usando el metodo Number(), para evitar usar el let A = Math.floor(a.innerText)
Pero no, mejor lo dejo así. */
let a =document.querySelectorAll(".aleatorio")[0]
a.innerText= Math.floor(Math.random()*10) 
let b = document.querySelectorAll(".aleatorio")[1]
b.innerText = Math.floor(Math.random()*10)
let comprobacion = document.querySelectorAll(".aleatorio")[2]
const OUTPUT = document.getElementById("output")

document.getElementById("trigger").addEventListener("click",accion)



/*AQUÍ ESTÁ EL EVENTO PARA LOS INTERNAUTAS QUE USAN TECLADO*/
document.getElementById("enter").addEventListener("keydown",dirigirFuncionPrincipal)
//Este detalle me parece valioso usarlo
/*AQUÍ ESTÁ EL EVENTO PARA LOS INTERNAUTAS QUE USAN TECLADO*/

function dirigirFuncionPrincipal(event){
    (event.key === "Enter") && accion() 
    /* Esto es como si pusieras 
    if(event.key === "Enter"){accion()}
    Si no me equivoco va de acuerdo con el paradigma de programación declarativo, mas no imperativo. 
    */ 
}

function accion (){
/*Para usar el operador triple igual (===), tuvé que convertirlos a número*/
let A = Math.floor(a.innerText), B = Math.floor(b.innerText), suma = Math.floor(comprobacion.value)

if(suma === A+B){
    OUTPUT.innerText="Dale"
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
comprobacion.value =`` /* Para que se quite lo que anteriormente pusiste */
comprobacion.focus() /* Para que el cursor se ponga en el input (donde se pone el número) */
}

/*
24 SEPT 2023
La única mejora que le pude hacer es que corregí el evento que responde al Enter. Ya funciona muy bien, tiene unos detalles de estilo. Nomás que ya no quiero estar batallando, quiero pasar a otros retos. 
Enlace al video de la actividad : https://www.youtube.com/watch?v=WQAsMdCkS94&list=PLRM7PpbqqStK55TlSFBreCHRYqVXtomYs&index=4

Esta actividad es la número 4 de su lista de reproducción de JAB , la 3 no la quise hacer. 
*/