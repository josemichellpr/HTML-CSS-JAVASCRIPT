/*
Programa que transforma un tiempo dado en segundos, en horas, minutos o segundos correspondientes
P/E: Introducir el dato 174'452 segundos y nos tiene que dar 48 horas y 27 minutos y 32 segundos
*/

let tiempo_en_segundos=174452
let segundos_que_contiene_una_hora=3600
let segundos_que_contiene_un_minuto=60
let minutos_que_contiene_una_hora=segundos_que_contiene_un_minuto
let residuo_en_segundos= (tiempo_en_segundos%segundos_que_contiene_una_hora)
let horas=Math.floor(tiempo_en_segundos/segundos_que_contiene_una_hora)
let minutos=Math.floor(residuo_en_segundos/segundos_que_contiene_un_minuto)
let segundos=residuo_en_segundos%minutos_que_contiene_una_hora
console.log("Horas: " + horas + "; minutos: " + minutos + "; segundos: " +segundos)