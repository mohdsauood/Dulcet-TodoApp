import {format,presentDate} from './index.js';
const generateViewTaskpageContent = (millis) => {
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
        <p class="${(task.priority=='No Rush')?'yellow':(task.priority=='Hurry Up')?'orange':(task.priority=='Very Urgent')?'red':''}"><span>priority :  </span>${(task.priority!='')?task.priority:'not defined'}<i class="im im-circle-o ${(task.priority=='No Rush')?'yellow':(task.priority=='Hurry Up')?'orange':(task.priority=='Very Urgent')?'red':''}"></i></p>
        <p><span>due date :  </span>${(task.mainDueDate!='')?task.mainDueDate:'not defined'}</p>
    </section>`;
}

export {generateViewTaskpageContent}