(()=>{
  let user: string | number;
  user = 25;
  user = "maycol";


  /**
   *Funcion Saludar
   * @param txt {saludo}
   * @return resultado por consola
   */
  function saludar(txt: string | number): void{
    console.log(`Hola ${txt} ${user}`)
  }

  function saludarDos(txt: string | number){
    if(typeof txt === 'string'){
      console.log(txt.toUpperCase());
    }else{
      console.log(txt.toFixed(2));
    }
  }

  saludar("buenos dias");
  saludar(25);
  saludar("buenas noches")
  saludarDos("maycol valencia");
  saludarDos(123);
})();
