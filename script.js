/*

console.time("time");

if(2+2 == 4){
    console.log("Funciona");
}

console.timeEnd("time");

let array1 = [1,2,3,4,5,6,7,8,9,0]

console.table(array1);


console.log("---------------------------------------------------------")

//document.body.addEventListener("dblclick", ()=>console.log("Hola addeventlistener!!"));


console.log(Date());

let fecha = new Date();

console.log(fecha);

//Dia del mes
console.log(fecha.getDate());
//Dia de la semana D L M MI J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//Mes igual a los dias pero con los meses
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());

let cumpleanios = new Date(1997, 1, 07);
console.log(cumpleanios);
*/

console.log(Math);
console.log(Math.PI);
//Valor absoluto
console.log(Math.abs(-7.7));
// Redondea para arriba(cielo) siempre sin importar la cantidad despues del punto
console.log(Math.ceil(3.9));
// Redondea para abajo, lo contrario de ceil
console.log(Math.floor(3.9));
// Este redondea al que esta mas cercano
console.log(Math.round(3.2));
// Saca la raiz cuadrada del numero puesto
console.log(Math.sqrt(81));
// Hace la potencia del numero y la potencia escrita
console.log(Math.pow(2, 5));
// da como resultado -1, 0, 1 dependiedo el valor
console.log(Math.sign(-3));
console.log(Math.sign(0));
console.log(Math.sign(0.2));
// Me da un valor aleatorio entre 0 y 1
console.log(Math.random());
// Para generar un numero aleatorio entre 0 y el que quieras
// En especifico va a redondear un numero aleatorio entre 0 y 1000
console.log(Math.round(Math.random()*1000));