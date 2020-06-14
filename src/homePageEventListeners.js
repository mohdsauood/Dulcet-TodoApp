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
import {
    sub,format
} from './index.js'
import { generateHomepageContent } from './dynamicHomePage.js'
import { generateViewTaskEvents } from './viewTaskPageEventListeners.js'


const addButtonEvent = () => {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
        generateAddTaskContent();
        generateAddTaskPageEvents();
    });
}

const viewTaskButtonEvent = () => {
    const tasks = document.querySelectorAll('#task');
    tasks.forEach((item) => {
        item.addEventListener('click', (e) => {
            let taskToShow=e.path[2].dataset.mil;
            generateViewTaskpageContent(taskToShow);
            generateViewTaskEvents();
        });
    })
}
const yesterDayEvent= ()=>{
    let yesterdayButton=document.querySelector('#yesterday');
    yesterdayButton.addEventListener('click',(e)=>{
        let newDatetest=sub(new Date(),{
            days:1,
        });
        let newDateFullFormat=format(newDatetest,'do MMMM yyy');
        let newDate=format(newDatetest,'MMMMd');
        console.log(`newDate fullformat : ${newDateFullFormat}`);
        console.log(`newDate : ${newDate}`);
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

const generateHomepageEvents = ()=>{
    addButtonEvent();
    viewTaskButtonEvent();
    deleteTaskButtonEvent();
    storageChangeEvent();
    yesterDayEvent();
}
export {generateHomepageEvents}
