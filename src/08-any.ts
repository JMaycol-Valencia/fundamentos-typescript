(()=>{
  let miIndeterminado: any;
  miIndeterminado = 10;
  miIndeterminado = "hola";
  miIndeterminado = {};
  miIndeterminado = true;
  miIndeterminado = [];


  //AL TENER EL DATO ANY TS NO NOS PUEDE AYUDAR CON EL AUTOCOMMPLETADO DE LAS FUNCIONES
  //PORQUE TS NO TIENE CLARO EL TIPO DE DATO
  //miIndeterminado. ?
  miIndeterminado = "definitivo";
  let miIndeterminadoFinal = (miIndeterminado as string).toLowerCase();

  console.log(miIndeterminadoFinal);
  console.log(typeof(miIndeterminadoFinal));

  miIndeterminado = 123;
  let miIndeterminadoFinalDos = (<number>miIndeterminado).toFixed();

  console.log(miIndeterminadoFinalDos);
  console.log(typeof(miIndeterminadoFinalDos));

})();
