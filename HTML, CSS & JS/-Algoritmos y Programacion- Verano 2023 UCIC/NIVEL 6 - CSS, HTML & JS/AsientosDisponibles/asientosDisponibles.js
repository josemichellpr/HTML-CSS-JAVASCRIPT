document.querySelector(".container").innerHTML = 
`
<h1>¿Hay asientos disponibles?</h1>
<p>40 son los asientos totales</p>
<input type="number"  id="asientosOcupados" placeholder="Asientos ocupados"><!--MUY IMPORTANTE QUE SEA type="number" -->
<br>
<br>
<input type="number"  id="asientosReservados" placeholder="Asientos reservados">
<br>
<p id="output"></p><!--id="" es el "puente" entre HTML y JS-->
<button class="calc1" onclick="calcular_asientos_disponibles()">Calcular</button><!--" calcular_asientos_disponibles()" es la función JS-->
`

/* Definir como constantes los elementos de entrada y salida */

const ASIENTOS_OCUPADOS = document.getElementById("asientosOcupados")
const ASIENTOS_RESERVADOS = document.getElementById("asientosReservados") 
const OUTPUT = document.getElementById("output")
const ASIENTOS_TOTALES = 40

/* Definir como constantes los elementos de entrada y salida */


function calcular_asientos_disponibles(){/* Cuando en <button> se utiliza el método onclick, con declarar la función de esta manera basta. SI SE USA UN ID ENTONCES SI ES DE LA OTRA MANERA */

   let asientos_ocupados=Math.floor(ASIENTOS_OCUPADOS.value) /* He hecho el experimento con la aplicación que corre JS en mi celular y Math.floor() "mata dos pajaros de un tiro". Convierte de string a int y le quita los decimales al entero con el que vamos a trabajar. De esa manera tenemos más rigor matemático y no hacemos entrar en bucles infinitos a nuestro algoritmo */
   let asientos_reservados=Math.floor(ASIENTOS_RESERVADOS.value)
  if(asientos_ocupados<0 || asientos_reservados<0 ){/*Para que no se puedan poner números negativos y el algoritmo muestre más asientos de los que hay*/
      OUTPUT.innerText="Error.Vuelve a capturar los datos"
  }
  else{
    if(asientos_ocupados>ASIENTOS_TOTALES){
    OUTPUT.innerText="Error.Vuelve a capturar los datos"
  }
    else{
      if(asientos_reservados>ASIENTOS_TOTALES){
        OUTPUT.innerText="Error.Vuelve a capturar los datos"
      }
      else{
        if((asientos_reservados+asientos_ocupados)>ASIENTOS_TOTALES){
          OUTPUT.innerText="Error.Vuelve a capturar los datos"
        }
        else{
            let asientos_disponibles=ASIENTOS_TOTALES-(asientos_reservados+asientos_ocupados)
            OUTPUT.innerText=`Existen ${asientos_disponibles} asientos disponibles.`
        }
      }
      }
    }
 
}/*termina calcular [...] */

/* FUNCIONA MUY BIEN */
