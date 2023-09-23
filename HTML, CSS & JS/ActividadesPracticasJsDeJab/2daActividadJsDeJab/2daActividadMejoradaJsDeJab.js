/*
En este documento, ya he visto la actividad resuelta del profesor. Y en el otro documento, es mi código al CIEN POR CIEN. Obviamente, se puede mejorar, es por eso este documento .
QUIERO APLICAR EL document.querySelectorAll[".cosa"][i] 
LOS CONCEPTOS DE BLOCK Y NULL
entre otras cosas, hagámoslo.
Vamos, tampoco quiero hacer una copia exacta de lo que hace el profe, solo es implementar las mejores a MI código. y pongo mi con mayúsculas no por ego, sino que para aprender, uno tiene que crear sus propios programas. ESO ES LO QUE IMPORTA, las mejoras ya pueden venir después.
*/

document.querySelector("body").innerHTML=
`
<div class="container"> <!--"text-center" es para que se centre horizontalmente lo que esté dentro-->
<button class="boton">Botón 1</button>
<button class="boton">Botón 2</button>
<button class="boton">Botón 3</button>
<div class="cajaGrande">
<div class="caja">
    <img id="imagen" src="images/img_7.png" alt="">
</div><!---->
</div>
</div>
`
/* AQUÍ VAMOS A PONER LOS ALIAS */
var boton = document.querySelectorAll(".boton")
var cajaGrande = document.querySelector(".cajaGrande")
var caja = document.querySelector(".caja")
/* AQUÍ VAMOS A PONER LOS ALIAS */

boton[0].addEventListener("click",accion1)

boton[1].addEventListener("click",accion2)

boton[2].addEventListener("click",accion3)

let i=0

function accion1(){/* */
document.getElementById("imagen").style.transform="rotate(45deg)"
cajaGrande.style.backgroundColor="blue"
boton[0].style.visibility="hidden" /* Con esta línea nos ahorramos las dos líneas que están comentadas en esta misma función*/
/*
document.querySelectorAll(".boton")[0].style.backgroundColor="white"
document.querySelectorAll(".boton")[0].style.borderColor="white"
*/
}/*termina funcion */

function accion2(){/* */
i+=1
if(i%2!==0){
    boton[1].style.backgroundColor="blue"
    caja.innerHTML="" /* Es para que desaparezca la imagen y el color azul de fondo con forma circular */
}

else{
    boton[1].style.backgroundColor="orangered"/* Para el botón naranja */
    caja.innerHTML=`<img id="imagen" src="images/img_7.png" alt="">`
    document.getElementById("imagen").style.transform="rotate(45deg)"
    cajaGrande.style.backgroundColor="blue"
    
}

}/*termina funcion */

function accion3(){
    caja.innerHTML=`<img id="imagen" src="images/img_7.png" alt="">`
    /*
    document.querySelectorAll(".boton")[0].style.backgroundColor="blue"
    document.querySelectorAll(".boton")[0].style.borderColor="black"
    */
    cajaGrande.style=null
    boton[0].style=null /* Con esta simple línea, nos ahorramos lo que está comentado en esta misma función */
    boton[1].style=null /* Para que el estilo del botón, se ponga como está programado desde el en CSS */
    
}

/*
 FUNCIONA BIEN
 El enlace del video es el siguiente: https://www.youtube.com/watch?v=oWGJHCzOFwc&list=PLRM7PpbqqStK55TlSFBreCHRYqVXtomYs&index=4
 */