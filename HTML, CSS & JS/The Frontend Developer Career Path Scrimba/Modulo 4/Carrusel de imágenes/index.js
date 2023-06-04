const slides = document.getElementsByClassName('carousel-item'); /*Este lo pidío el profesor
asi, nadamás. Pero es interesante como hace el enlace por medio de la clase. Con el profe Per
siempre haciamos el enlace con "id", pero ahora se nos enseña una forma nueva.*/ 
let slidePosition = 0; /*slidePosition controla que imagen se muestra*/
const totalSlides = slides.length; /*Para usarse más adelante en el código*/


document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide); /*El profesor
 tiene un estilo de programación un poco diferente al profe Per, que fue el que me introdujo a JS (módulo 3).
 Lo que me gusta de este estilo es que procura ahorrar líneas de código, pero no dejan de ser estilos. En esta
 línea de código, se aprecia como no iguala a ninguna variable, solo hace el enlace con HTML y acto seguido 
creo el evento que al hacer clic te dirige a la función que crea más abajo*/ 

document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide); /*moveToPrevSlide
es una función que más adelante el profe declara (tiene un estilo de programación diferente al del profe Per)*/

function hideAllSlides() {
    for (let slide of slides) { /*Lo que está despues del of es el objeto y lo que está ANTES 
    del of, son los argumentos. Se le llama for of. */
        slide.classList.remove('carousel-item-visible'); /*Esta dos líneas son las que menos entiendo */
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
   hideAllSlides(); /*FUNCIÓN*/
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    } /*Los condicionales if y else que están justo arriba, sí los pude hacer solo con las
    instrucciones (sin ver el video)*/ 
    
    slides[slidePosition].classList.add("carousel-item-visible"); /* Pero esta línea honestamente 
    no se que p2. Analicemos: "slides" es un objeto (como un array pero con esteroides) y en su
    argumento tiene a "slidePosition" que es un número y que tiene como instrucción, en los condi-
    cionales, reiniciarse o aumentarse según sea el caso. Lo que necesito investigar es lo que sigue
    Creo que solo se trata de mandar a traer una clase de CSS y con add se adhieren clases. De cualquier
    manera hay documentos en Internet que explican */

} /*close moveToNextSlide*/

function moveToPrevSlide() { /*Toda esta función la logra hacer solo con las instrucciones y el 
mismo código del profesor. No vi el procedimiento, puede decirse que es lo primero que hago sin ayuda. */
     hideAllSlides();
     
     if(slidePosition === 0){
      slidePosition = totalSlides - 1   /*Esta línea es por si es VERDADERO que está en la primera imagen
(posición cero) entonces al hacer clic en la flecha (que va hacía atras) se pasa como si fuera una libreta, 
de forma ordenada y coherente*/
     }
     else{
         slidePosition = slidePosition -1
     }
      slides[slidePosition].classList.add("carousel-item-visible"); /*Esta línea me parece un poco dificil de entender*/
    }
