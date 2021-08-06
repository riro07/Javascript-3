import miNombre, {sumar, Calculadora} from "./Modulos.js" 
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

// Objeto Date ----------------------------------------------------------------------------------

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

// objeto Math -----------------------------------------------------------------------------------

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

// Operador de Cortocircuito -----------------------------------------------------------------------

//    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true,
//    es el valor que se cargará por defecto

//    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false,
//    es el valor que se cargará por defecto (si es true carga la derecha)


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

NUMEROALEATORIO(165);


function valorLogico(a){
    if(isNaN(a)){
        console.log("Hubo un error");    
    }else{
        let numero = a;
        let logicaSign = Math.sign(a);
        console.log(`El numero ingresado es ${numero}: Math.sign => ${logicaSign}`)
    }
}

valorLogico(10);

// Cortocicuito or y and

function pedidos(a){

    let validacion = a == undefined ? false : "Llevar pedido: "+b;
    let pedidoCliente = validacion || "Llevarle la carta al cliente";
    console.log(pedidoCliente);

}

pedidos();

function pedidoNoHay(a){
    let pedidoCliente = a == "sprite" && "7UP";
    console.log("ofrecer: "+pedidoCliente); 
}

pedidoNoHay("sprite");

console.log("------------------------------------------------------------")

//alert, confirm, prompt ----------------------------------------------------------------------------

//let alerta = alert("Hola esto es una alerta"), 
//confirmacion = confirm("Hola esto es una confirmacion"), 
//avisoPrompt = prompt("Ingrese un valor");

//console.log(alerta);
//console.log(confirmacion);
//console.log(avisoPrompt);

// EXPRECIONES REGULARES --------------------------------------------------------------------------


//    Expresiones Regulares 
//        Son una secuencia de caracteres que forma un patrón de busqueda, principalmente utilizada 
//        para la busqueda de patrones de cadenas de caracteres.
//        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
//        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions


let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore lorem eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// lorem es la palabra que esta buscando. ig(comodines): la i indica que en su busqueda ignore las mayusculas. la g busca el siguiente lorem, ignora el primero
let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

//{} => rango de repetición
let expReg2 = /lorem{1}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

console.log("------------------------------------------------------------")

*/

// FUNCIONES ANÓNIMAS AUTOEJECUTABLES --------------------------------------------------------------

// Encapsula una función anonima que se auto ejecuta. Esta encapsulación protege el codigo de acciones
// externas

(function(){
    console.log("Mi primer IIFE");
})();

(function(d, w, c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document, window, console);

//Formas de escribir las funciones anónimas autoejecutables 

(function(){
    console.log("Versión Clásica");
})();

//La Clockford (javascript the good parts) libro

((function(){
    console.log("versíon Clockford")
})());

// Unaria
+function (){
    console.log("versíon Unaria");
}();

//Facebook
!function (){
    console.log("versíon Facebook");
}();


// Módulos ( import / export )

// Para poder exportar modulos hay que comenzar especificando en el index.html el "type="module"" 
// en la parte donde se importa el archivo.js. Esto avisa al navegador que va a tener que ejecutar
// codigo ES6 y los navegadores que no lo soporten no cargen el archivo en vano. Sino ejecuten otro 
// archivo con el js previo a ES6 puro. En este caso ese archivo debe llevar "nomodule" en ves de 
// "type="module"".

sumar(3, 5);

let restar = new Calculadora(5, 3);

restar;

console.log(miNombre);