document.querySelector("body").innerHTML=
`
<div class="container"> <!--"text-center" es para que se centre horizontalmente lo que esté dentro-->
<button class="botonAzul1" id="boton1">Botón 1</button>
<button class="botonNaranja" id="boton2">Botón 2</button>
<button class="botonAzul" id="boton3">Botón 3</button>
<div class="cajaGrande">
<div class="caja">
    <img id="imagen" src="images/img_7.png" alt="">
</div><!--En "caja" se proyectan las imágenes, botones y el "Hola Mundo"-->
</div>
</div>
`


document.getElementById("boton1").addEventListener("click",funcion1)

document.getElementById("boton2").addEventListener("click",funcion2)

document.getElementById("boton3").addEventListener("click",funcion3)

let i=0

function funcion1(){/* */
document.getElementById("imagen").style.transform="rotate(45deg)"
document.querySelector(".cajaGrande").style.backgroundColor="blue"
document.querySelector(".botonAzul1").style.backgroundColor="white"
document.querySelector(".botonAzul1").style.borderColor="white"
}/*termina funcion */

function funcion2(){/* */
i+=1
if(i%2!==0){
    document.querySelector(".botonNaranja").style.backgroundColor="blue"
    document.querySelector(".cajaGrande").style=null
    document.querySelector(".caja").innerHTML=""
}

else{
    
    document.querySelector(".botonNaranja").style.backgroundColor="orangered"
    document.querySelector(".caja").innerHTML=`<img id="imagen" src="images/img_7.png" alt="">`
    document.getElementById("imagen").style.transform="rotate(45deg)"
    document.querySelector(".cajaGrande").style.backgroundColor="blue"
    
}

}/*termina funcion */

function funcion3(){
    document.querySelector(".caja").innerHTML=`<img id="imagen" src="images/img_7.png" alt="">`
    document.querySelector(".botonAzul1").style.backgroundColor="blue"
    document.querySelector(".botonAzul1").style.borderColor="black"
    document.querySelector(".cajaGrande").style=null
    document.querySelector(".botonNaranja").style.backgroundColor="orangered"
    
}

/*
 FUNCIONA BIEN
 El enlace del video es el siguiente: https://www.youtube.com/watch?v=oWGJHCzOFwc&list=PLRM7PpbqqStK55TlSFBreCHRYqVXtomYs&index=4
 */