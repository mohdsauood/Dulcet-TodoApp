import {format} from './index.js';
const setToLocalStorage=(obj)=>{
    localStorage.setItem('tasks',JSON.stringify(obj));
    //forcing storage event to work as storage event works to sync only in other pages not the page that triggered the event
    window.dispatchEvent( new Event('storage') );
}

const deleteTaskFromLocalStorage=(taskInMillis)=>{
let tasksObj=JSON.parse(localStorage.getItem('tasks'));
let currentDate=format(new Date(), 'MMMMd');
delete tasksObj[currentDate][taskInMillis];
setToLocalStorage(tasksObj);
}












export {setToLocalStorage,deleteTaskFromLocalStorage}