(()=>{
  /**
   *Funcion para sumar una array
   * @param precios
   * @returns la suma en un numero
   *Debemos agregar un tipo de dato para agregar el tipo de
   dato que nos retornara nuestra funcion
   */
  const calculando = (precios: number[]):number => {
    let total = 0;
    precios.forEach((item) => {
      total +=  item;
    });
    return total;
  }


  /**
   *Funcion que resta numeros y nos devuelve el resutaldo
   en un ripo de dato string
   * @param lista
   * @returns resultado en un string
   */

  let funcionRestar = ((lista: number[]):string=>{
    let res : number = 0;
    lista.forEach((numero)=>{
      res -= numero;
    })
    return res.toString();
  });

/**
 * Creamos una funcion que no retorna un valor
 * pero si se ejecuta y realiza algo en el codigo
 * esta funciones se concen con el tipo void
 * llamamos a una funcion dentro de la misma y solo
 * mandamospor consola el resultado
 * @param lista
 */
  const funcionTotal = ((lista:number[]):void=>{
    let rta = calculando(lista);
    console.log(`El resultado es ${rta}`);
  });

  const rta = calculando([1,3,45,67,7123,21]);
  let resta = funcionRestar([8,9,7,52,1,5456,564,213]);
  funcionTotal([89,65,47,21,38,10]);

  console.log(rta);
  console.log(typeof rta);

  console.log(resta);
  console.log(typeof resta)
})();
