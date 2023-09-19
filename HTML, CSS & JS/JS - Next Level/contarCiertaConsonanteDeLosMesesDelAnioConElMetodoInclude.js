/*
Tenemos un array con los meses del año. Queremos saber qué meses tienen en su nombre la letra "b".
*/

MESES =["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto", "Septiembre","Octubre","Noviembre","Diciembre"]

for (entry of MESES) {
    if(entry.includes(`b`)) {console.log(entry)}
}

/*
18 de septiembre de 2023
 Pues ahí esta papa, facil y sencillo. Recordemos que entry es igual a MESES[i] (entry=MESES[i]). El bucle for of, ya te incluye todo el argumento que tienes que declarar en el bucle for (normal).
 */

 /*
for(i=0;i<MESES.length;i++){
    if(MESES[i].includes("b")){console.log(MESES[i])}
}
*/