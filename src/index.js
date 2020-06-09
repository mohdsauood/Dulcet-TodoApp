// datefns library
import {
    lightFormat,
    format,
    parse,
    isPast
} from 'date-fns'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateAddTaskContent
} from './addTaskPage.js'
import {
    generateViewTaskpageContent
} from './viewTaskPage.js'
import {
    setQuote
} from './quotesGenerator.js'
import {
    checkError
} from './errorHandlers.js'

import {
    generateAddTaskPageEvents
} from './addTaskpageEventListeners.js'


// Event listeners for home page

const addButtonEvent = () => {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
        generateAddTaskContent();
        generateAddTaskPageEvents(checkError,parse,isPast,generateHomepageContent,addHomePageEvents);
    });
}
const viewTaskButtonEvent = () => {
    const tasks = document.querySelectorAll('#task');
    tasks.forEach((item) => {
        item.addEventListener('click', () => {
            generateViewTaskpageContent();
            backButtonEvent();
        });
    })
}
const addHomePageEvents = () => {
    addButtonEvent();
    viewTaskButtonEvent();
}

//setting date everyday

const setCurrentDate = () => {
    const dateElement = document.querySelector('#homePageDate');
    dateElement.textContent = format(new Date(), 'do MMMM yyy');
}



setQuote(format(new Date(), 'eee'));
setCurrentDate();
generateHomepageContent();
addHomePageEvents();