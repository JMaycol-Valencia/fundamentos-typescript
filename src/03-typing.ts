//PARA PODER AISLAR EL SCOPE EN TS DEBEMOS USAR LA SIG ESTRUCTURA
(() => {

//DELCARAMOS NUESTRAS VARIABLES Y TS INFERIRA LOS TIPOS DE DATOS
let myProductName = "PRODUCTO 1";
let myProductPrice = 1245;
const myConstAnios = 25;

//PODEMOS EXPLORAR LOS METODOS QUE TIENEN POR DEFECTO LOS TIPOS DE DATOS
console.log(myProductName.toLowerCase());
myProductPrice.toFixed();

//CON LAS VARIABLES DECLARADAS COMO CONSTANTES SIEMPRE NOS RETORNARAN
//COMO TIPO DE DATO, EL DATO ASIGNADO DESDE EL PRINCIPIO
// myConstAnios = 20;

//COMO VEREMOS TS INFERIO LOS TIPOS DE DATOS Y NO NOS MUESTRA NINGUN ERROR
//SIN EMBARGO ESTO ES UNA MALA PRACTICA SIEMPRE DEBEMOS DEFINRI NUESTROS TIPOS
console.log(typeof(myProductName));
console.log(typeof(myProductPrice));
console.log(typeof(myConstAnios));
console.log(myProductName);
console.log(myProductPrice);
console.log(myConstAnios);

})();
