(()=>{
  let miNumero: number = 25;
  let miString: string = "hola";
  //SI DECLRAMOS NULL O UNDIFINED SIN SU TIPO
  //ESTARIAMOS USANDO VARIABLES DE TIPO ANY PARA UNDEFINED
  //Y DE UN OBJETO PARA NULL
  let uno = null;
  let dos = undefined;

  console.log(typeof(uno));
  console.log(typeof(dos));

  //PODEMOS TIPAR NULL Y UNDEFINED PARA NO CAMBIAR
  //SUS VALORES
  let miNull: null = null;
  let miIndefinido: undefined = undefined

  //Tenemos la posibilidad de mantener nullo nuestro valor
  //inicial de nuestra variable
  let numero : number | null ;
  numero = 123;

  let frase : string | null;
  frase = 'Iniciamos la frase';

  console.log(`${numero} ${frase}`);

  function hi(name : string | null){
    let hola : string = "Hola ";
    if(name){
      hola += name.toUpperCase();
    }else{
      hola += "invitado";
    }
    console.log(hola);
  }

  function hiV2(name : string | null){
    let hola :string = "Hola "
    hola += name?.toUpperCase() || "invitada";
    console.log(hola);
  }

  hi("maycol");
  hi(null);

  hiV2("vanesa");
  hiV2(null);

})();
