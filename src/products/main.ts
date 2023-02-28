import { agregarProductos, productos, calPeso } from "./product.service";

agregarProductos({nombre: 'Coca-cola cero',peso: 2000, empaque: 'Grande', fechaCaducidad : new Date('2023-06-12'),dietetico: true});
agregarProductos({nombre: 'Paneton',peso: 400, empaque: 'Pequeño', fechaCaducidad : new Date('2023-01-15')});
console.log(productos);
const total = calPeso();
console.log(total)

