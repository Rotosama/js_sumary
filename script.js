const codigoVariables = `
var nombre = "Juan";
let edad = 30;
const ciudad = "Madrid";
`;

const codigoDeclaracionInicializacion = `
var nombre = "Juan"; // Declaración e inicialización
let edad; // Solo declaración
edad = 30; // Inicialización posterior
const ciudad = "Madrid"; // Declaración e inicialización
`;

const codigoScope = `
var globalVar = "Soy global";

function miFuncion() {
    let localVar = "Soy local";
    console.log(globalVar); // Accede a la variable global
    console.log(localVar); // Accede a la variable local
}

miFuncion();
console.log(globalVar); // Accede a la variable global
// console.log(localVar); // Error: localVar no está definida en el scope global
`;

const codigoBucles = `
for (let i = 0; i < 5; i++) {
    console.log("Bucle for, iteración número " + i);
}

let j = 0;
while (j < 5) {
    console.log("Bucle while, iteración número " + j);
    j++;
}

let k = 0;
do {
    console.log("Bucle do...while, iteración número " + k);
    k++;
} while (k < 5);
`;

const codigoCondicionales = `
let numero = 10;

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
`;

const codigoFunciones = `
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("Juan"));
`;

const codigoArrays = `
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log("Posición " + i + ": " + numeros[i]);
}
`;

const codigoTiposDatos = `
let cadena = "Hola, mundo"; // String
let numero = 42; // Number
let booleano = true; // Boolean
let indefinido; // Undefined
let nulo = null; // Null
let objeto = { nombre: "Juan", edad: 30 }; // Object
let simbolo = Symbol("simbolo"); // Symbol
`;

const codigoMetodos = `
// Métodos de cadenas
let texto = "Hola, mundo";
console.log(texto.length); // Longitud de la cadena
console.log(texto.toUpperCase()); // Convertir a mayúsculas
console.log(texto.toLowerCase()); // Convertir a minúsculas
console.log(texto.includes("mundo")); // Verificar si incluye una subcadena

// Métodos de arrays
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.push(6)); // Añadir un elemento al final
console.log(numeros.pop()); // Eliminar el último elemento
console.log(numeros.shift()); // Eliminar el primer elemento
console.log(numeros.unshift(0)); // Añadir un elemento al principio
console.log(numeros.slice(1, 3)); // Obtener una porción del array
console.log(numeros.indexOf(3)); // Obtener el índice de un elemento
`;

document.getElementById("codigo-variables").textContent = codigoVariables;
document.getElementById("codigo-declaracion-inicializacion").textContent =
	codigoDeclaracionInicializacion;
document.getElementById("codigo-scope").textContent = codigoScope;
document.getElementById("codigo-bucles").textContent = codigoBucles;
document.getElementById("codigo-condicionales").textContent =
	codigoCondicionales;
document.getElementById("codigo-funciones").textContent = codigoFunciones;
document.getElementById("codigo-arrays").textContent = codigoArrays;
document.getElementById("codigo-tipos-datos").textContent = codigoTiposDatos;
document.getElementById("codigo-metodos").textContent = codigoMetodos;
