// datefns library
import {lightFormat} from 'date-fns'
import {generateHomepageContent} from './dynamicHomePage.js'
// var result = parse('23 march 6am', 'd MMMM ha', new Date());
// console.log(result);



window.addEventListener('load',()=>{
generateHomepageContent();
});
