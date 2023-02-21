(()=>{
  let esVerdadero = true;     //DECLARACION INFERIDA
  let esFalso : boolean = false;    //DECLARACION EXPRESADA
  const random = Math.random();
  let resultado : boolean = random >= 0.5 ? true : false;
  const myBoleano : boolean = true;

  console.log(esVerdadero);
  console.log(esFalso);
  console.log('random', random);
  console.log(resultado);
  console.log(myBoleano);
})();
