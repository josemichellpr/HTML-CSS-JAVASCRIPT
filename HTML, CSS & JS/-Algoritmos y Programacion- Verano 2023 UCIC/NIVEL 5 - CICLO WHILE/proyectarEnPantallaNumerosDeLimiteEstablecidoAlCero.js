/*
Hacer un programa que vaya del 20 al 0, con salto de uno. Empleando bucle while
NOTA: Según las convenciones del "CLEAN CODE" es válido usar (i) como iterador, ya que el código es muy pequeño y su alcance se limita únicamente a un bucle muy pequeño.
*/


let i=20
let limite=0
while(!(i+1===limite)){
  console.log(i)
  i-=1/*Es lo mismo que i=i-1*/
}
