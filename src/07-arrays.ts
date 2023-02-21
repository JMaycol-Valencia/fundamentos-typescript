(()=>{
  //DECLARAMOS, TIPAMOS E INICIALIZAMOS LA LISTA/ARRAY
  let lista : string[] = ["maycol", "vanesa", "camila", "alison"];
  let listaCombinada : (string | number | boolean)[] =  ["maycol", 25, true];    //TENEMOS LISTAS COMBINADAS EN SU TIPADO, SIEMPRE Y CUANDO NOSOTROS LO DEFINAMOS
  let listaNumeros: number[] = [12,13,41];


  //RPODEMOS RECORRER LOS ARRAYS CON LOS METODOS COMUNES EN JS
  for(let lis of lista){
    console.log(lis);
  }

  for (let lis of listaCombinada){
    console.log(lis);
  }

  for(let lis of listaNumeros){
    console.log(lis);
  }

  listaNumeros.map(item => item + 2);

  for(let lis of listaNumeros){
    console.log(lis);
  }

  //USAMOS LOS METODOS COMUNES EN JS QUE SON FUNCIONALES EN TS
  lista.push("jheanet","carlos","carlitos");
  console.log(lista);

  listaCombinada.pop();
  console.log(listaCombinada);
  listaCombinada.shift();
  console.log(listaCombinada);
  listaCombinada.unshift("reinicio");
  console.log(listaCombinada);
})();
