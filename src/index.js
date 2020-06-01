// datefns library
import {lightFormat} from 'date-fns'

const div=document.querySelector('#nike');
div.textContent=lightFormat(new Date(),'d/M/y');