import {
    generateAddTaskContent
} from './addTaskPage.js'
import {
    generateAddTaskPageEvents
} from './addTaskpageEventListeners.js'
import {
    generateViewTaskpageContent
} from './viewTaskPage.js'
import {
    deleteTaskFromLocalStorage
} from './localStorage.js'
import { generateHomepageContent } from './dynamicHomePage.js'

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
        item.addEventListener('click', (e) => {
            let taskToShow=e.path[2].dataset.mil;
            generateViewTaskpageContent(taskToShow);
        });
    })
}

const deleteTaskButtonEvent =()=>{
    const deleteButtons=document.querySelectorAll('.task button');
    deleteButtons.forEach((item)=>{
        item.addEventListener('click',(e)=>{
                let taskToDelete=e.path[1].dataset.mil;
                deleteTaskFromLocalStorage(taskToDelete);
           });
        });
    }


const storageChangeEvent=()=>{
    window.addEventListener('storage',()=>{
        generateHomepageContent()
        generateHomepageEvents();
    });
}

const generateHomepageEvents = (parse,isPast)=>{
    addButtonEvent(parse,isPast);
    viewTaskButtonEvent();
    deleteTaskButtonEvent();
    storageChangeEvent();
}
export {generateHomepageEvents}
