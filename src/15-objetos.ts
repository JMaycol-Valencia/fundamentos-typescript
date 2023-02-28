(()=>{
  /*
    Dentro de Ts podemos definir typos de objetos como un conjunto de
    datos predeterminados y nuestras funciones que usan objetos
    solo acepten esos tipos de objetos
  */
  type Empaque = `Grande`| 'Mediano' | 'Pequeño';

  /*
    Tipo de objeto creado para ser aceptado con solo
    los atributos definidos
  */
  type Producto = {
    nombre : string,
    peso : number,
    bajoEnGrasa: boolean,
    empaque : Empaque,
    fechaCaducidad : Date
  }

  const productos : Producto[] = [];

  const agregarProductos = ((data : Producto)=>{
    productos.push(data);
  });

  const resultado = (data : Producto): void => {
    agregarProductos(data);
    console.log(productos);
  }

  resultado({nombre:"Oreo", peso: 200,bajoEnGrasa: true, empaque: 'Pequeño',fechaCaducidad: new Date('2023-05-12')});
  resultado({nombre:"Cerveza", peso: 500,bajoEnGrasa: false, empaque: 'Mediano',fechaCaducidad: new Date('2023-01-05')});
})();
