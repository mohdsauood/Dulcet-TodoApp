import { format, presentDate } from './index.js';
const setToLocalStorage = (obj) => {
  console.log('im called settolocalstorager');
  localStorage.setItem('tasks', JSON.stringify(obj));
  //forcing storage event to work as storage event works to sync only in other pages not the page that triggered the event
  window.dispatchEvent(new Event('storage'));
};

const deleteTaskFromLocalStorage = (taskInMillis) => {
  console.log('i run when date change imdeleteaskfromlocalsorate');
  let tasksObj = JSON.parse(localStorage.getItem('tasks'));
  delete tasksObj[presentDate][taskInMillis];
  setToLocalStorage(tasksObj);
};

const updateLocalStorage = (millis, updatedTitle, updatedDescription) => {
  console.log('i run when date change im updatelocalstorage');

  let tasksObj = JSON.parse(localStorage.getItem('tasks'));
  let updatedTimeCreated = format(new Date(), 'h:mm a');
  tasksObj[presentDate][millis].title = updatedTitle;
  tasksObj[presentDate][millis].description = updatedDescription;
  tasksObj[presentDate][millis].timeCreated = updatedTimeCreated;
  setToLocalStorage(tasksObj);
};

const deleteThisDateObj = () => {
  console.log('i run when date change im deletethisdateobj');
  let tasksObj = JSON.parse(localStorage.getItem('tasks'));
  delete tasksObj[presentDate];
  setToLocalStorage(tasksObj);
};

export {
  setToLocalStorage,
  deleteTaskFromLocalStorage,
  updateLocalStorage,
  deleteThisDateObj,
};
