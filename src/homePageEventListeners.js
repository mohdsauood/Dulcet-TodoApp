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
    sub,
    format,
    presentDate,
    parse,
    presentFullDate,
    setPresentDate,
    setPresentFullDate,
    add,
} from './index.js'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateViewTaskEvents
} from './viewTaskPageEventListeners.js'
import {
    setDisplayDate
} from './quotesGenerator.js'


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
            let taskToShow = e.path[2].dataset.mil;
            generateViewTaskpageContent(taskToShow);
            generateViewTaskEvents();
        });
    })
}
const yesterDayEvent = () => {
    let yesterdayButton = document.querySelector('#yesterday');
    yesterdayButton.addEventListener('click', (e) => {
        let newDatetest = sub(parse(presentDate, 'MMMMd', new Date()), {
            days: 1,
        });
        setPresentDate(format(newDatetest, 'MMMMd'));
        setPresentFullDate(format(newDatetest, 'do MMMM yyy'));
        console.log(`${format(newDatetest,'MMMMd')} is the updated Date`);
        console.log(`${format(newDatetest,'do MMMM yyy')} is the updated FullDate`);
        window.dispatchEvent(new Event('storage'));
        
    });
}
const tomorrowEvent = () => {
    let tomorrowButton = document.querySelector('#tomorrow');
    tomorrowButton.addEventListener('click', (e) => {
        let newDatetest = add(parse(presentDate, 'MMMMd', new Date()), {
            days: 1,
        });
        setPresentDate(format(newDatetest, 'MMMMd'));
        setPresentFullDate(format(newDatetest, 'do MMMM yyy'));
        console.log(`${format(newDatetest,'MMMMd')} is the updated Date`);
        console.log(`${format(newDatetest,'do MMMM yyy')} is the updated FullDate`);
        window.dispatchEvent(new Event('storage'));
        
    });
}
const deleteTaskButtonEvent = () => {
    const deleteButtons = document.querySelectorAll('.task button');
    deleteButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let taskToDelete = e.path[1].dataset.mil;
            deleteTaskFromLocalStorage(taskToDelete);
        });
    });
}


const storageChangeEvent = () => {
    window.addEventListener('storage', () => {
        generateHomepageContent();
        generateHomepageEvents();
        setDisplayDate();
    });
}

const generateHomepageEvents = () => {
    addButtonEvent();
    viewTaskButtonEvent();
    deleteTaskButtonEvent();
    storageChangeEvent();
    yesterDayEvent();
    tomorrowEvent();
}
export {
    generateHomepageEvents
}