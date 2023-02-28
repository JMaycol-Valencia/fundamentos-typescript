export type Empaque = 'Grande'| 'Mediano'| 'Pequeño';
export type Producto = {
  nombre : string,
  peso: number,
  empaque : Empaque,
  fechaCaducidad : Date,
  dietetico?: boolean
}

