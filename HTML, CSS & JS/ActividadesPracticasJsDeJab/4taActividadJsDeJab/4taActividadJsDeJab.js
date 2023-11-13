
const div = document.querySelector(".caja") //Un alias
document.querySelectorAll("button")[0].addEventListener("click",agregarRojo)
document.querySelectorAll("button")[1].addEventListener("click",agregarCuatroAzules)
document.querySelectorAll("button")[2].addEventListener("click",reemplazarImagenesAzulesPorRojas)
document.querySelectorAll("button")[3].addEventListener("click",eliminarRojos)
document.querySelectorAll("button")[4].addEventListener("click",borrarTodo)

function agregarRojo(){
    div.insertAdjacentHTML("beforeend",`<img class="rojo" src="./images/rojo.png" alt="">`) //Va poniendo las imágenes hacia la derecha
}

function agregarCuatroAzules(){
    for(i=1;i<5;i++){
        div.insertAdjacentHTML("beforeend",`<img class="azul" src="./images/azul.png" alt="">`)
    }  
}

function reemplazarImagenesAzulesPorRojas(){
    for(j=0;j<div.childElementCount;j++){/* div.childElementCount como límite para ir ahondando en las diferentes opciones de la sintaxis que ofrece JS |  div.childElementCount lo que hace es contar los hijos del padre, es decir cada hijo EQUIVALE a cualquier imagen. */
        if(div.children[j].className ==`azul`){
            var img =  document.createElement("img")//Si esta línea la pongo fuera del condicional, simple y sencillamente, no funciona como quiero.
            img.setAttribute("src","./images/rojo.png")//Lo mismo que la línea de arriba.
            img.setAttribute("class","rojo") //Tuve que poner esta línea porque en la función eliminarRojos, el argumento del condicional se basa en que si tiene la clase "rojo". Entonces sin esta línea no lo detectaba. 
            div.children[j].replaceWith(img)// Recuerda que div es el alias del padre que contiene a todos las imágenes que se desplegan en el DOM
        }
    }
}

function eliminarRojos(){ 
    for(k=0;k<div.childElementCount;k++){/* div.childElementCount lo que hace es contar los hijos del padre, es decir, cada hijo EQUIVALE a cualquier imagen. */
        if(div.children[k].className == `rojo`){
           div.children[k].remove()
           eliminarRojos() // Aquí aplicamos el bello concepto de la recursividad. Sucede que con cualquiera de las tres líneas anteriores, que están comentadas, por ejemplo, si había seis imágenes al primer clic borraba tres, al segundo clic dos y hasta el tercer clic es como se borraban las seis imágenes rojas. Eso no me servía, yo quiero que se borren con un solo clic. PUES APLICANDO LA FUNCIÓN RECURSIVA, SE RESUELVE EL PROBLEMA. 
        }
    }
}

function borrarTodo(){
    for(m=0;m<div.childElementCount;m++){
        if(div.children[m].className == `rojo` || div.children[m].className == `azul`){
           div.children[m].remove()
           borrarTodo() // Aquí aplicamos el bello concepto de la recursividad. 
        }
    }
}


/*
13 de NOVIEMBRE DE 2023
Bueno voy a narrar en orden, como fui creando este programa de JS.
Todo el programa, tanto el HTML como el JS es ingenio de un servidor. En ningún momento me apoye de como resolvía la actividad JAB. 
ENLACE A LA ACTIVIDAD: https://www.youtube.com/watch?v=89lllg-Ot5w&t=437s

1. Es de destacar que no fue necesario poner alguna clase en los botones, porque con element.querySelectorAll(), aquello no es necesario. Nuestro código se vuelve más sencillo.

2. La función agregarRojo() al principio quería ponerlo en el div.container pero me percate de que de ninguna manera se podía acoplar a como lo pedía la actividad, es decir, que las imágenes se fueran acoplando hacía la derecha de forma armoniosa. Cosa distinta si a las imágenes le habilitamos su div.caja, busque en google insertAdjacentHTML(), para que con simples imágenes me explicara la diferencia con respecto al primer argumento (lo de beforeend, afterend, etcétera). Listo. Algo sencillo.

3. La función agregarCuatroAzules() de la misma forma que la función anterior, sencillo. 

4. La función reemplazarImagenesAzulesPorRojas(), ahí comenzo el verdadero reto ya que desde qué poner en el argumento del condicional para que discriminara las imágenes de color azul (y despues convertirlas a rojas, eso en un momento lo explico). Desde luego que hay que ir haciendo pruebas con la consola para ver que es lo que esta sucediendo, una vez solucionado esto, el siguiente problema a resolver es cómo reemplazar la imagen azul por la roja. Veamos, me gusta buscar en la documentación de Mozilla porque aunque es un poco dificil para principiantes, es PRECISA. Veamos: div.children[j].replaceWith(img) --> comienza citando al padre y despues al hijo en ESPECÍFICO, NO SE SALTA AL PADRE. Ok
No fue tan sencillo, en cuanto me percate que cambiaba las imágenes por botones con la siguiente línea de código: div.children[j].replaceWith(document.create("button")) fue cuando pense, "perfecto, ya solo necesito poner correctamente el argumento de la función replaceWith, todo lo demás funciona como quiero". Tuve más dificultades de las que pense, hasta que puse las líneas img.setAttribute() DENTRO DEL CONDICIONAL, porque las estaba poniendo con var, incluso con const, pero al principio del programa. CREO QUE SE DEBE A UNA EVENTUALIDAD EXTRAÑA DE JS CON EL SCOPE, es delicado el alcance de las variables, dentro de una función, dentro de un bucle y despues de todo eso, dentro de un condicional. EL SCOPE DE LA VARIABLE, NO ALCANZA HASTA ALLÁ. En cuanto lo puse como se aprecia, funcionó de maravilla, sin problemas.

5. La función eliminarRojos(), con esta función tambien batallé. Pondré alguno de mis intentos a continuación, para remover:

  //div.removeChild(div.children[k]) -- Si las borro pero de más a menos.
    //document.querySelector(".caja").removeChild(div.children[k])
    //document.querySelector(".rojo").parentNode.removeChild(document.querySelectorAll(".rojo")[k])

Sucede que con cualquiera de las tres líneas anteriores, que están comentadas, por ejemplo, si había seis imágenes al primer clic borraba tres, al segundo clic dos y hasta el tercer clic es como se borraban las seis imágenes rojas. Eso no me servía, yo quiero que se borren con un solo clic TODAS. PUES APLICANDO LA FUNCIÓN RECURSIVA, SE RESUELVE EL PROBLEMA. Pensé bueno, si lo hace por partes, pues que la función se llame a sí misma hasta borrar todas, pero dentro del condicional, para que funcione de forma armoniosa y se borren la totalidad de imágenes sin mandar errores la consola. JAB explica (en el enlace del video que está más arriba) lo que ya sospechaba, al borrarse la primera imagen roja que encontraba el programa, se recorren las imágenes a la izquierda (todas las restantes) y si seguía una imagen roja ya no la borra porque el iterador del bucle avanza mientras las imágenes se recorren. JAB lo resuelve comenzando a eliminar desde el final hasta el inicio. Las dos formas de resolver el problema son bellas, sin embargo la de JAB debe ser más eficiente, teniendo en cuenta billones o trillones de datos, se pierde eficiencia repitiendo la cuenta cada vez que encuentre un dato que satisfaga el argumento del condicional. Pero lo que importa es que uno haga hasta lo imposible por resolver los problemas por sus propios méritos, su propia investigación. 

6. La función eliminarTodo() es la misma lógica que la función anterior. 

*/