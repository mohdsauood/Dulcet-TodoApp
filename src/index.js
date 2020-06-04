// datefns library
import {lightFormat} from 'date-fns'
import {generateHomepageContent} from './dynamicHomePage.js'
import {generateAddTaskContent} from './addTaskPage.js'
// var result = parse('23 march 6am', 'd MMMM ha', new Date());
// console.log(result);
const addEventss=()=>{
    //event for add task button
    const addButton=document.querySelector('#addButton');
    addButton.addEventListener('click',generateAddTaskContent);
}

window.addEventListener('load',()=>{
generateHomepageContent();
addEventss();
});
