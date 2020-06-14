import {format} from './index.js';
const generateViewTaskpageContent = (millis,presentDate=format(new Date(), 'MMMMd')) => {
    let tasksObj=JSON.parse(localStorage.getItem('tasks'));
    let task=tasksObj[presentDate][millis];

    const dynamicContent = document.querySelector('#dynamicContent');
    dynamicContent.innerHTML = `<button id="viewTaskBack" class="backButton"><i class="im im-angle-left"></i></button>
    <section data-mil="${millis}" class="viewingTask">
        <p>${task.timeCreated}</p>
        <form>
            <input type="text" placeholder="title" id="title" value="${task.title}">
            
            <textarea placeholder="description" id="description" cols="30" rows="10" value="">${task.description}</textarea>
        </form>
        <p ><span>priority :  </span>${task.priority}</p>
        <p><span>due date :  </span>${task.mainDueDate}</p>
    </section>`;
}

export {generateViewTaskpageContent}