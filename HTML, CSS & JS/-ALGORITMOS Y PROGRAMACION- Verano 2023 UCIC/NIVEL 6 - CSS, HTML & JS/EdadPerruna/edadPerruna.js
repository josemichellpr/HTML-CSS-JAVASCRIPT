document.querySelector(".container").innerHTML=
`
<h1>Conversor de edades</h1>
<br>
<input type="text"  id="mi_edad" placeholder="Escribe tu edad"></input>
<br>
<br>
<button class="calc1" onclick="calcularEdadPerruna()">Calcular</button><!--"calc" es la función JS-->
<p id ="output"></p><!--id="cuenta" es el "puente" entre HTML y JS-->
`

const MI_EDAD = (document.getElementById("mi_edad"))
const OUTPUT = document.getElementById("output") /* Donde se renderizaba mi diálogo */

function calcularEdadPerruna(){/* Cuando en <button> se utiliza el método onclick, con declarar la función de esta manera basta. SI SE USA UN ID ENTONCES SI ES DE LA OTRA MANERA */
let miEdad = Math.floor(MI_EDAD.value)
multiplicador_edad_perro=7; //Definido un coeficiente
primer_anio_perruno=4;
if(miEdad<=0){
    OUTPUT.innerText="Error.Vuelve a ingresar los datos"
}
else{
    mi_edad_perruna=primer_anio_perruno+(miEdad-1)*multiplicador_edad_perro;//Asignado a una variable la multiplicación. OJO como se utilizo mi_edad.value para recoger el valor de mi_edad del <input>
    OUTPUT.innerText=mi_edad_perruna
}

console.log(typeof(miEdad))/* Si ponemos esta línea fuera de la función, manda un "undefined", porque la declaración "let" no tiene un alcance fuera de la función en la que fue declarada */

}/*termina calc*/

/*FUNCIONA MUY BIEN */