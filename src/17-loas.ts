import _ from 'lodash';

const data = [
    {
        username: 'maycol',
        role: 'admin'
    },
    {
        username: 'vanesa',
        role: 'co-admin'
    },
    {
        username: 'alison',
        role: 'seler'
    },
    {
        username: 'camila',
        role: 'cajera'
    },
    {
        username: 'kevin',
        role: 'cajera'
    },
    {
        username: 'carla',
        role: 'seler'
    },
    {
        username: 'carlos',
        role: 'chofer'
    },
]
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);