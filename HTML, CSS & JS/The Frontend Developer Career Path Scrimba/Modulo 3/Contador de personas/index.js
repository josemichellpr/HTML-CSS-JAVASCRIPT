let saveEl = document.getElementById("saveEl")
let welcomeEl = document.getElementById("welcomeEl")
let cuenta = document.getElementById("cuenta");
/* En la línea de arriba se establece la igualdad (y relación)
 entre una variable aqui en JS con el id en HTML*/
let contador = 0;
let username = "Michell";
let greeting = "Hi, my name is ";
let messageToUser = greeting + username;
let myPoints = 3;
welcomeEL.textContent = messageToUser;

function incremento_btn (){
    contador +=1 ;
    cuenta.textContent=contador;
    /* En la línea de arriba se dice: el texto de 
    "cuenta" en HTML, será igual a "contador"*/
}

/* Como se mandan a llamar FUNCIONES, podemos separarlas
aqui sin ningun problema */

function vis_contador () {
    cuenta_reg = contador + " - "
   saveEl.textContent += cuenta_reg;
   contador = 0;
   cuenta.textContent=contador
};
