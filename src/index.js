// datefns library
import {
    lightFormat,
    parse,
    isPast
} from 'date-fns'

import{
setError,clearError
} from './errorHandlers.js'

import{
    eventsForAddTaskPage
} from './addTaskpageEventListeners.js'


const backButtonEvent=()=>{
    checkError();
console.log('saiyo nara oni chan');
}

const checkError=(e)=>{
    const dateElement=document.querySelector('#duedate');
    clearError();
    let dateValue=parse(dateElement.value,'yyyy-MM-dd',new Date());
    if(isPast(dateValue))
    {
        e.preventDefault();
        setError('Due date already passed ,set new date');
    }
    else if(x){
        //make backbutton a form submit button
        //check if required etc etc
    }
}

eventsForAddTaskPage(checkError);

const backButton=document.querySelector('.backButton');
backButton.addEventListener('click',backButtonEvent);

