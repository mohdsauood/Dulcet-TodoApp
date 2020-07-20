import { generateAddTaskContent } from './addTaskPage.js';
import { generateAddTaskPageEvents } from './addTaskpageEventListeners.js';
import { generateViewTaskpageContent } from './viewTaskPage.js';
import {
  deleteTaskFromLocalStorage,
  deleteThisDateObj,
} from './localStorage.js';
import {
  sub,
  format,
  presentDate,
  parse,
  presentFullDate,
  setPresentDate,
  setPresentFullDate,
  add,
} from './index.js';
import { generateHomepageContent } from './dynamicHomePage.js';
import { generateViewTaskEvents } from './viewTaskPageEventListeners.js';
import { setDisplayDate } from './quotesGenerator.js';

const addButtonEvent = () => {
  const addButton = document.querySelector('#addButton');
  addButton.addEventListener('click', () => {
    generateAddTaskContent();
    generateAddTaskPageEvents();
  });
};

const viewTaskButtonEvent = () => {
  const tasks = document.querySelectorAll('#task');
  tasks.forEach((item) => {
    item.addEventListener('click', (e) => {
      let taskToShow = e.path[2].dataset.mil;
      generateViewTaskpageContent(taskToShow);
      generateViewTaskEvents();
    });
  });
};
const yesterDayEvent = () => {
  let yesterdayButton = document.querySelector('#yesterday');
  yesterdayButton.addEventListener('click', (e) => {
    let newDatetest = sub(parse(presentDate, 'MMMMd', new Date()), {
      days: 1,
    });
    setPresentDate(format(newDatetest, 'MMMMd'));
    setPresentFullDate(format(newDatetest, 'do MMMM yyy'));
    window.dispatchEvent(new Event('storage'));
  });
};
const tomorrowEvent = () => {
  let tomorrowButton = document.querySelector('#tomorrow');
  tomorrowButton.addEventListener('click', (e) => {
    let newDatetest = add(parse(presentDate, 'MMMMd', new Date()), {
      days: 1,
    });
    setPresentDate(format(newDatetest, 'MMMMd'));
    setPresentFullDate(format(newDatetest, 'do MMMM yyy'));
    window.dispatchEvent(new Event('storage'));
  });
};
const deleteTaskButtonEvent = () => {
  const deleteButtons = document.querySelectorAll('.task button');
  deleteButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      let taskToDelete = e.path[1].dataset.mil;
      deleteTaskFromLocalStorage(taskToDelete);
    });
  });
};
const jumpDateEvent = () => {
  let jumpButton = document.querySelector('#jumpDate');
  jumpButton.addEventListener('change', (e) => {
    let jumpDate = parse(jumpButton.value, 'yyyy-MM-dd', new Date());
    setPresentDate(format(jumpDate, 'MMMMd'));
    setPresentFullDate(format(jumpDate, 'do MMMM yyy'));
    window.dispatchEvent(new Event('storage'));
  });
};
const homeDateButtonEvent = () => {
  const menuButton = document.querySelector('.im-menu-dot-h');
  menuButton.addEventListener('click', (e) => {
    let span = document.querySelector('.goToDate span');
    let inputDate = document.querySelector('.goToDate input[type="date"]');
    span.classList.toggle('homeDate');
    inputDate.classList.toggle('homeDate');
    jumpDateEvent();
  });
};
const popUpButtonsEvent = () => {
  let yesButton = document.querySelector('#yes');
  let noButton = document.querySelector('#no');
  yesButton.addEventListener('click', () => {
    let popUp = document.querySelector('.deletePopUp');
    popUp.classList.remove('displayPopUp');
    deleteThisDateObj();
  });
  noButton.addEventListener('click', () => {
    let popUp = document.querySelector('.deletePopUp');
    popUp.classList.remove('displayPopUp');
  });
};
const clearButtonEvent = () => {
  let clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', () => {
    let popUp = document.querySelector('.deletePopUp');
    popUp.classList.add('displayPopUp');
    popUpButtonsEvent();
  });
};

const storageChangeEvent = () => {
  let flag = true;
  window.addEventListener('storage', () => {
    if (flag) {
      generateHomepageContent();
      generateHomepageEvents();
      setDisplayDate();
      flag = false;
    }
  });
};

const generateHomepageEvents = () => {
  addButtonEvent();
  viewTaskButtonEvent();
  deleteTaskButtonEvent();
  storageChangeEvent();
  yesterDayEvent();
  tomorrowEvent();
  jumpDateEvent();
  homeDateButtonEvent();
  clearButtonEvent();
};
export { generateHomepageEvents };
