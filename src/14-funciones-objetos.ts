(()=>{
  type Edicion = 'Nueva'| 'Vieja';
  /*
    Para poder trabajar con objetos y sus atributos
    debemos especificar en nuestra funcion un nombre
    para el objeto seguido del tipo de dato agrupando
    a todos los atributos que necesita
  */
  const productos: any[] = [];
  const agregarObjetos = (data : {titulo : string, paginas: number, fecha: Date, autor:string, disponible:boolean, edicion?: Edicion}) => {
    productos.push(data);
  };


  /*
    Ahora podemos usar nuestra lista de objetos
    para ello agregamos objetos a nuestra lista y los
    llamamos segun el indice ysi atributo que llamaremos
    o si es necesario el objeto entero
  */
  agregarObjetos({titulo : "movidick",paginas : 200,fecha : new Date("1997-05-06"),autor : "algun autor", disponible : true});
  agregarObjetos({titulo : "dota2",paginas : 10,fecha : new Date("2010-05-06"),autor : "gabe newell", disponible : true, edicion: 'Nueva'});
  console.log(productos);
  console.log(productos[0].titulo);
  console.log(productos[0].fecha);
  console.log(productos[0]);
  console.log(productos[1]);
})();
