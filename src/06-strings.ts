(()=>{
  let producto = "mi libro";
  let producto2 : string = 'mi libro cambiado';
  const producto3 : string = "el libro de todos";
  const sumary = `
  titulo : ${producto},
  descipcion : ${producto2},
  gestion : ${producto3}
  `;


  console.log(producto, "- producto")
  /*
    EL USO DE LAS COMILLAS SIMPLES O DOBLES , SE DEBERA A LA REDACCION QUE
    SE DARA AL CONTENIDO , EL IDIOMA INGLES ACOSTUMBRA TENER
    APOSTOFRES SIMPLES POR LO TANTO ES ACONSEJABLE USAR COMILLAS DOBLES
   */
  console.log(producto2, '- producto 2')
  console.log(producto3, '- producto, libro para todos')
  console.log(sumary);
})();
