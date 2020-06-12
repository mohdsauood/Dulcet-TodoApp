import {updateLocalStorage} from './localStorage.js'
import { generateHomepageContent } from './dynamicHomePage.js';
import { generateHomepageEvents } from './homePageEventListeners.js';

let checkChangeObj={
    inputChange:false,
    textChange:false,
}

const inputChangeEvent=()=>{
    let inputElement=document.querySelector('form input');
    inputElement.addEventListener('change',(e)=>{
        checkChangeObj.inputChange=true;
    })
}
const textChangeEvent=()=>{
    let textareaElement=document.querySelector('form textarea');
    textareaElement.addEventListener('change',(e)=>{
        checkChangeObj.textChange=true;
    });
}

const viewPageBackButtonEvent=()=>{
    let backButton=document.querySelector('#viewTaskBack');
    backButton.addEventListener('click',(e)=>{
        if(checkChangeObj.inputChange==true || checkChangeObj.textChange==true)
        {
            let inputElement=document.querySelector('form input');
            let textareaElement=document.querySelector('form textarea');
            let updatedTitle=inputElement.value;
            let updatedDescription=textareaElement.value;
            let millis=document.querySelector('.viewingTask').dataset.mil;
            updateLocalStorage(millis,updatedTitle,updatedDescription);
        }
        generateHomepageContent();
        generateHomepageEvents();
    })
}



const generateViewTaskEvents=()=>{
    inputChangeEvent();
    textChangeEvent();
    viewPageBackButtonEvent();
}



export {generateViewTaskEvents}