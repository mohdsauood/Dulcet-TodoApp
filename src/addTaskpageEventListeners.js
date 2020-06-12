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

const dateEventForAddTaskPage=()=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        checkError(e);
    });
    dateElement.addEventListener('keyup',(e)=>{
        checkError(e);
    });
}
//if met objectCreation coniditions i.e either title or descirption not null
// then pass values through factory function

const backButtonEventForAddTaskPage=()=>{
    const backButton=document.querySelector('#backButton');
    backButton.addEventListener('click',(e)=>{
        checkError(e);
        if( checkError(e))
        {
            createTask();
            generateHomepageContent();
            generateHomepageEvents();
        }
    })
}

const generateAddTaskPageEvents=()=>{
    dateEventForAddTaskPage();
    backButtonEventForAddTaskPage();
}

export {generateAddTaskPageEvents}