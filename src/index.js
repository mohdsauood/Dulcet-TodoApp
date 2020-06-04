// datefns library
import {
    lightFormat
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
// var result = parse('23 march 6am', 'd MMMM ha', new Date());
// console.log(result);

// functions for adding events to respective buttons
const backButtonEvent = () => {
    const backButton = document.querySelector('#AddTaskBack');
    backButton.addEventListener('click', () => {
        generateHomepageContent();
        addHomePageEvents();
    });
}
const addButtonEvent = () => {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
        generateAddTaskContent();
        backButtonEvent();
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

window.addEventListener('load', () => {
    generateHomepageContent();
    addHomePageEvents();
});