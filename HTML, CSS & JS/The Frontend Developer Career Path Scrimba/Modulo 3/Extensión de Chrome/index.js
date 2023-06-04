let myLeads = []
//(arriba) son las guías
const inputEl = document.getElementById("inputEl")
//(arriba) es donde se escribe texto en HTML
const saveB = document.getElementById("saveB")
//(arriba) es para el botón en HTML
const ulEl = document.getElementById("ulEl")
//(arriba) es para la lista


saveB.addEventListener("click", function(){
    /* Recuerda que aquí (línea 11) estamos creando una función, 
    cada vez que se haga clic en el botón, se corren las 
    líneas de código más abajo */
   myLeads.push(inputEl.value)
   /* línea 15, estamos introduciendo (el valor intro-
   ducido en el espacio de texto), en el array myLeads */
    inputEl.value = " "
    /* La línea 18, es para que despues de hacer clic en el 
    botón, se borre lo que sea que se haya puesto en el espacio
    para texto y se tenga una mejor experiencia */
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads) //Antes era renderLeads(), le pusimos argumento.
    /*Línea 22, se manda a traer las lineas de código que son
    iguales a renderLeads */
})


function render(leads){ /*Antes era renderLeads(), como ya pusimos
  el argumento cuando invocamos la función (línea 23 y otras), en 
  este argumento ponemos algo que tenga relación semántica. Pero el
  argumento importante es el que ponemos cuando llamamos la función,
  no tanto aquí.En vez de leads como argumento, podriamos poner 
  "yolo", pero deberiamos hacer el cambio en las demas líneas de esta
   función.Donde esta el bucle for por ejemplo y en $ (pistas).
  Ya no es tan necesario el Leads, despues de render, ya que ya
  dimos un argumento en la linea 23 y en otras líneas donde llamamos
  de la misma forma la función.*/
  let listItems = ""
 /* línea 30, creamos un caracter vacio, para despues emplearlo
 en la línea 34 */
 for (let i = 0;i < leads.length; i++){
   listItems += 
   `<li>
      <a href = '#' target ='_blank' >
      ${leads[i]}
      </a>
    </li>`
     /* Cargamos a listItems, la información del bucle, con la 
     codificación de HTML, estamos manipulando HTML desde JS */
 }
 
 ulEl.innerHTML = listItems
 /*De esta forma manipulamos el DOM, lo
 menos posible. El profesor hizo lo mismo.*/   
}

/* Hay que sustraer la información de localStorage y 
guardarla en una variable, pero antes hay que volver 
localStorage en caracter. */
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
/*El argumento de getItem, myLeads (línea 52), NO funciona sin las comillas */
console.log(leadsFromLocalStorage)//Para ver si funciona
 
 if(leadsFromLocalStorage){
     myLeads = leadsFromLocalStorage
     render(myLeads) //Antes era renderLeads(), le pusimos argumento.
     /*Tengase presente que myLeads es un ARRAY */
     /*Aqui estamos haciendo uso de los truthy y falsy values, si 
     leadsFrom...Storage es undefined o null, lo cual significa que
     no existen guías guardadas, no hará nada. Pero si es true, porque
     existen guías va a correr el if y pasará lo programado en las
      líneas 57 y 58 */
 }

 awesomeB.addEventListener('dblclick',function(){
   localStorage.clear()//Para formatear/borrar localStorage
   ulEl.innerHTML = "" //Para que "borren" las guías de HTML, de la vista.
 }
 )

 tabButton.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 /*La verdad a esta parte del código no le entendí muy bien, pero espero
    con más práctica y estudio, entenderla y utilizarla como segunda naturaleza */
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads",JSON.stringify(myLeads))
      render(myLeads)
})
 })


