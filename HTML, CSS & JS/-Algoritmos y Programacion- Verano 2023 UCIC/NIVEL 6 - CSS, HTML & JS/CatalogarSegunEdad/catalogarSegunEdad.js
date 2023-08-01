document.querySelector(".container").innerHTML=
`
<h1>Catálogo según edad</h1>
<p>Introduce tu edad y el programa te dirá a que clase de edad perteneces</p>
<input type="number" placeholder="Tu edad" id="tu_edad" >
<br>
<br>
<button class="calc1" onclick="calcularClaseDeEdad()">Calcular</button>
<p id="output"></p>
`


/* Definir como constantes los elementos de entrada y salida */
const TU_EDAD = document.getElementById("tu_edad")
const OUTPUT = document.getElementById("output")
/* Definir como constantes los elementos de entrada y salida */

function calcularClaseDeEdad(){
  let tuEdad = Math.floor(TU_EDAD.value)/* He hecho el experimento con la aplicación que corre JS en mi celular y Math.floor() "mata dos pajaros de un tiro". Convierte de string a int y le quita los decimales al entero con el que vamos a trabajar. De esa manera tenemos más rigor matemático y no hacemos entrar en bucles infinitos a nuestro algoritmo */

  if (0<tuEdad && tuEdad<14){
    OUTPUT.innerText = "Eres un niño/a"
  }
  else if(14<=tuEdad && tuEdad<25){
    OUTPUT.innerText = "Eres un joven"
  }
  else if(25<=tuEdad && tuEdad<70){
    OUTPUT.innerText = "Eres un adulto/a"
  }
  else if(70<=tuEdad && tuEdad<125){
    OUTPUT.innerText = "Eres un anciano/a"
  }
  else{
    OUTPUT.innerText = "Nadie tiene edad negativa o ha vivido tanto tiempo"
  }
}

/*FUNCIONA BIEN */