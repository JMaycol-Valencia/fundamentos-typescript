(()=>{
  let productPrice = 100;
  let costumerAge : number = 28;
  let produtInStock : number;     //TS  NOS ALERTA QUE LA VARIABLE NO FUE INICIALIZADA
  let conversion = parseInt("123");
  let hex = 0xfff;
  let bin = 0b1010
  const nuNumber: number = 10  //USAR MINUSCULAS A LA HORA DE TIPAR

  productPrice = 12;
  produtInStock = 100;
  costumerAge = costumerAge + 1;  //TS NOS ALERTA EL ERROR


  console.log('producto Price', productPrice);
  console.log('customer age', costumerAge);
  console.log('productoInStock', produtInStock);
  console.log('conversion', conversion);
  console.log(typeof(conversion));
  console.log('hex', hex);
  console.log('binario', bin);


})();
