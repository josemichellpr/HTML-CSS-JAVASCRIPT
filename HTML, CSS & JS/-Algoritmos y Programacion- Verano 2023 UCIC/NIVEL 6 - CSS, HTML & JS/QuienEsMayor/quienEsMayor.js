document.querySelector(".container").innerHTML=
`
<h1>Quien es mayor?</h1>
<br>
<input type="number"  id="mi_edad" placeholder="Escribe tu edad"></input>
<input type="number"  id="edad_amigo" placeholder="Escribe la edad de tu amigo"></input>
<br>
<p id ="output"></p>
<button  onclick="calcular()">Calcular</button><!--"" es la función JS-->

`

const MI_EDAD = document.getElementById("mi_edad")
const EDAD_AMIGO = document.getElementById("edad_amigo")
const OUTPUT = document.getElementById("output") /* Donde se renderizaba mi diálogo */

function calcular(){/* Cuando en <button> se utiliza el método onclick, con declarar la función de esta manera basta. SI SE USA UN ID ENTONCES SI ES DE LA OTRA MANERA */
let miEdad = Math.floor(MI_EDAD.value)
let edadAmigo = Math.floor(EDAD_AMIGO.value)
if(miEdad<=0 || edadAmigo<=0){
    OUTPUT.innerText= "Error.Vuelve a capturar los datos"
}
else{
    if(miEdad>edadAmigo){
        OUTPUT.innerText="Eres mayor que tu amigo"
        }
        else if(miEdad===edadAmigo){
        OUTPUT.innerText="Tienen la misma edad"
        }
        else{
        OUTPUT.innerText="Tu amigo es mayor que tu"
        }
}
}/*termina calcular */

/*FUNCIONA BIEN */