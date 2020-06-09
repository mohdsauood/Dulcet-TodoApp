import {
    generateAddTaskContent
} from './addTaskPage.js'
import {
    generateAddTaskPageEvents
} from './addTaskpageEventListeners.js'
import {
    generateViewTaskpageContent
} from './viewTaskPage.js'

const addButtonEvent = (parse,isPast) => {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
        generateAddTaskContent();
        generateAddTaskPageEvents(parse,isPast);
    });
}

const viewTaskButtonEvent = () => {
    const tasks = document.querySelectorAll('#task');
    tasks.forEach((item) => {
        item.addEventListener('click', () => {
            generateViewTaskpageContent();
        });
    })
}

const  generateHomepageEvents=(parse,isPast)=>{
    addButtonEvent(parse,isPast);
    viewTaskButtonEvent();
}






















 export {generateHomepageEvents}