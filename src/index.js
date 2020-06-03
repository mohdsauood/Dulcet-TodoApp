// datefns library
import {lightFormat,parse} from 'date-fns'

var result = parse('23 march 6am', 'd MMMM ha', new Date());
console.log(result);