/*
*/
console.time("time");

if(2+2 == 4){
    console.log("Funciona");
}

console.timeEnd("time");

let array1 = [1,2,3,4,5,6,7,8,9,0]

console.table(array1);


console.log("---------------------------------------------------------")

//document.body.addEventListener("dblclick", ()=>console.log("Hola addeventlistener!!"));

// Objeto Date

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

console.log("------------------------------------------------------------")

// objeto Math

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

console.log("------------------------------------------------------------")

// Operador de Cortocircuito
/*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true,
    es el valor que se cargará por defecto

    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false,
    es el valor que se cargará por defecto (si es true carga la derecha)
*/

function saludar (nombre){
    nombre = nombre || "Desconocido";
    console.log("Hola "+nombre);
}

saludar("Gabriel");
saludar();

console.log(true||"Valor de la derecha");
console.log(10||"Valor de la derecha");
console.log(-10||"Valor de la derecha");
console.log("Valor izquierda"||"Valor de la derecha");
console.log([]||"Valor de la derecha");
console.log({}||"Valor de la derecha");
console.log("------------------------------------------------------------")
console.log(false||"Valor de la derecha");
console.log(0||"Valor de la derecha");
console.log(undefined||"Valor de la derecha");
console.log(null||"Valor de la derecha");
console.log(""||"Valor de la derecha");
console.log("------------------------------------------------------------")
console.log(true&&"Valor de la derecha");
console.log(10&&"Valor de la derecha");
console.log(-10&&"Valor de la derecha");
console.log("Valor izquierda"&&"Valor de la derecha");
console.log([]&&"Valor de la derecha");
console.log({}&&"Valor de la derecha");
console.log("------------------------------------------------------------")
console.log(false&&"Valor de la derecha");
console.log(0&&"Valor de la derecha");
console.log(undefined&&"Valor de la derecha");
console.log(null&&"Valor de la derecha");
console.log(""&&"Valor de la derecha");

console.log("------------------------------------------------------------")

// Practicas

function pedirHora (){
    let hora = new Date();
    
    console.log(`la hora es: ${hora.toLocaleTimeString()}`);
}

pedirHora();

function pedirFecha (){
    let fecha = new Date();
    console.log("La fecha es: "+fecha.toLocaleDateString());
}

pedirFecha();

const NUMEROALEATORIO = a =>{
    if(isNaN(a)){
        console.log("Hubo un error");
    }else{        
        console.log(`El numero aleatorio entre 0 y ${a}: ${Math.round(Math.random()*a)}`);
    }
}

NUMEROALEATORIO(165)