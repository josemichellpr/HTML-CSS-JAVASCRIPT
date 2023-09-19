/* Definir como constantes los elementos de entrada, salida y las constantes */
// EN ESTE CASO NO FUE NECESARIO
/* Definir como constantes los elementos de entrada, salida y las constantes */

/*Fíjate que intenté ponerlo con el inner HTML, para que el HTML este aqui en JS. Si se proyectaban los botones, pero no hacian nada.  */

document.getElementById("boton1").addEventListener("click", function(){/* */
document.querySelector(".caja").innerHTML = `Hola mundo` /* OJO, porque con innerText, no se proyecta la imagen, solo el texto en "crudo" */
})/*termina funcion */


document.getElementById("boton2").addEventListener("click", function(){
  document.querySelector(".caja").innerHTML = `<img src="images/img_0.png" alt="">` /* OJO, porque con innerText, no se proyecta la imagen, solo el texto en "crudo" */
  
})/*termina funcion */

document.getElementById("boton3").addEventListener("click", function(){
    document.querySelector(".caja").innerHTML += `<button type="button" class="btn btn-primary">Botón</button>` /* OJO que estamos usando el operador compuesto para que los botones se agreguen a lo que ya hay en el DOM */
})/*termina funcion */

document.getElementById("boton4").addEventListener("click", function(){
    document.querySelector(".caja").innerHTML =``
})/*termina funcion */

/*
19 de septiembre de 2023
La novedad ahora, es que estamos estilizando con Bootstrap, principalmente. Porque ya me percaté que en producción lo suelen utilizar. 
Funciona bien, como se advierte en el video:
https://www.youtube.com/watch?v=7BIrwFbIvho&list=PLRM7PpbqqStK55TlSFBreCHRYqVXtomYs
*/