import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateHomepageEvents
} from './homePageEventListeners.js'
import {
    checkError
} from './errorHandlers.js'
import {
    createTask
} from './tasksFactory.js'


const dateEventForAddTaskPage=(parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        checkError(e,parse,isPast);
    });
    dateElement.addEventListener('keyup',(e)=>{
        checkError(e,parse,isPast);
    });
}
//if met objectCreation coniditions i.e either title or descirption not null
// then pass values through factory function

const backButtonEventForAddTaskPage=(parse,isPast)=>{
    const backButton=document.querySelector('#backButton');
    backButton.addEventListener('click',(e)=>{
        checkError(e,parse,isPast);
        if( checkError(e,parse,isPast))
        {
            createTask();
            generateHomepageContent();
            generateHomepageEvents();
        }
    })
}

const generateAddTaskPageEvents=(parse,isPast)=>{
    dateEventForAddTaskPage(parse,isPast);
    backButtonEventForAddTaskPage(parse,isPast);
}

export {generateAddTaskPageEvents}