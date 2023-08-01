document.querySelector(".container").innerHTML=
`
<h1>Conversor de edades</h1>
<br>
<input type="number"  id="mi_edad" placeholder="Escribe tu edad"></input>
<br>
<br>
<button class="calc1" onclick="calcularEdadPerruna()">Calcular</button><!--"calc" es la función JS-->
<p id ="output"></p><!--id="cuenta" es el "puente" entre HTML y JS-->
`

/* Definir como constantes los elementos de entrada y salida */
const MI_EDAD = (document.getElementById("mi_edad"))
const OUTPUT = document.getElementById("output") 
const MULTIPLICADOR_EDAD_PERRO = 7
const PRIMER_ANIO_PERRUNO = 4
/* Definir como constantes los elementos de entrada y salida */


function calcularEdadPerruna(){/* Cuando en <button> se utiliza el método onclick, con declarar la función de esta manera basta. SI SE USA UN ID ENTONCES SI ES DE LA OTRA MANERA */
    let miEdad = Math.floor(MI_EDAD.value)
    if(miEdad<=0){
        OUTPUT.innerText="Error.Vuelve a ingresar los datos"
    }
    else{
        mi_edad_perruna=PRIMER_ANIO_PERRUNO+(miEdad-1)*MULTIPLICADOR_EDAD_PERRO;//Asignado a una variable la multiplicación. OJO como se utilizo mi_edad.value para recoger el valor de mi_edad del <input>
        OUTPUT.innerText=`Tu edad perruna es ${mi_edad_perruna}`
    }

    console.log(typeof(miEdad))/* Si ponemos esta línea fuera de la función, manda un "undefined", porque la declaración "let" no tiene un alcance fuera de la función en la que fue declarada */

}/*termina calcular [...] */

/*FUNCIONA MUY BIEN */