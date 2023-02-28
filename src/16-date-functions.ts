import {subDays, format} from 'date-fns';

const fecha = new Date(1998,1,28);
const rta = subDays(fecha, 22);
console.log(rta);
const str = format(rta, 'yyyy/MM/dd');
console.log(str);