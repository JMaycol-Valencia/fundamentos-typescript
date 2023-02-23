(()=>{
  //VEMOS COMO ACORTAMOS EL CODIGO CREANDO
  //NUESTROS PROPIOS TIPOS Y LOS PODEMOS USARLOS
  type UserID = string | number | boolean;
  let user: UserID
  user = "como estas amigo mio";


  //LITERAL TYPES
  //TAMBIEN PODEMOS CREAR NUESTROS TIPOS LITERALES
  type Tallas = 'S' | 'M' | 'L' | 'XL' | 24;
  let orden: Tallas;
  orden = 'S';
  orden = 'M';
  orden = 'L';
  orden = 'XL';
  orden = 24;
  //orden = 'XS'; NOS RETORNA ERROR PORQUE NO ES EL TIPO DE
  //DATO ESPECIFICO QUE SE SOLICITA


  function saludar(user: UserID, talla : Tallas){
    if(typeof user === 'string'){
      console.log(user.toUpperCase(), ` como estas tu talla es ${talla}`);
    }
  }



  saludar("maycol","S");
})();
