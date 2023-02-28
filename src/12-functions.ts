(()=>{
  type  Size = "S" | "M" | "L" |"XL" | "XLL";
  function crearProductoToJson(titulo: string, creado: Date, stock: number, tamanio: Size){
    return {
      titulo,
      creado,
      stock,
      tamanio
    }
  }


  const crearProductoToJsonV2 = (titulo: string, creado: Date, stock: number, tamanio?: Size) => {
    return {
      titulo,
      creado,
      stock,
      tamanio
    }
  }

  const producto1 = crearProductoToJson('cepillo', new Date(),5, "L");
  const producto2 = crearProductoToJsonV2("polera", new Date(), 25, "XL");
  const producto3 = crearProductoToJsonV2("lentes", new Date(), 23);

  console.log(producto1);
  console.log(producto1.creado);

  console.log(producto2);
  console.log(producto2.stock);

  console.log(producto3);
  console.log(producto3.tamanio);

})();
