/*
FUNCTIONS

A lot of the values provided in the default environment have the type function. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. […]
Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value. Usually, you´ll directly use the name of the binding that holds the function. The values between the parentheses are given to the program inside the function. […]. Values given to functions are called arguments.

FRAGMENTO TOMADO DEL LIBRO “Eloquent JavaScript”

*/

/*
EJERCICIO 1
Crear dos funciones, sumar3puntos()  y  quitar1puntos() y se suman o restan de la variable: mis puntos
Llamamos la funcion y nos debe arrojar 10 puntos
*/


let misPuntos=3

function sumar3puntos(){
  misPuntos=misPuntos+3
  console.log(misPuntos)
}

function quitar1punto(){
  misPuntos=misPuntos-1
  console.log(misPuntos)
}

sumar3puntos()
sumar3puntos()
sumar3puntos()
quitar1punto()
quitar1punto()

/*
EJERCICIO 2
Crear dos funciones, sumar5puntos()  y  quitar2puntos() y se suman o restan de la variable: mis puntos
Llamamos la funcion y nos debe arrojar 20 puntos
*/
