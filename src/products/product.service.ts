import { Producto } from "./product.model";

export const productos: Producto[] = [];
export const agregarProductos = (data : Producto) => {
  productos.push(data);
};

export const calPeso = () : number => {
  let res = 0;
  productos.forEach((item)=>{
    res += item.peso;
  });
  return res;
}


