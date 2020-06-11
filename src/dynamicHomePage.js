import {
    format
} from './index.js'
const displayTasks = (millis,title, dueDate, priority) => {
    let mainTasksSection = document.querySelector('.tasks');
    let newSection=document.createElement('section');
    newSection.classList.add('task');
    newSection.dataset.mil=millis;
    let circleColor=(priority=='No Rush')?'yellow':(priority=='Hurry Up')?'orange':(priority=='Very Urgent')?'red':'';
    newSection.innerHTML=`<div id="task">
    <p>${title}</p>
    <p><i class="im im-circle-o ${circleColor}"></i>
    </p>
    <p>${dueDate}</p>

    </div>
    <button><i class="im im-x-mark"></i>
    </button>`
    mainTasksSection.appendChild(newSection);

}
const generateHomepageContent = () => {
    const dynamicContent = document.querySelector('#dynamicContent');
    dynamicContent.innerHTML = `<section class="navButtons">
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Previous Day</button>
    </div>
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Next Day</button>
    </div>
    </section>
    <section class="tasks">
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
   
    </section>
    <section class="uiButtons">
    <button id="addButton"> <i class="im im-plus"></i></button>
    <button>clear list</button>
    </section>`;
    const tasksObject = (localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {});
    const currentDate = format(new Date(), 'MMMMd');
    if (tasksObject[currentDate]) {
        const dynamicContent = document.querySelector('#dynamicContent');
        dynamicContent.innerHTML = '';
        dynamicContent.innerHTML = `<section class="navButtons">
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Previous Day</button>
    </div>
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Next Day</button>
    </div>
    </section>
    <section class="tasks">
    </section>
    <section class="uiButtons">
    <button id="addButton"> <i class="im im-plus"></i></button>
    <button>clear list</button>
    </section>`;
        let TasksArr = tasksObject[currentDate];
        for (let [key, value] of Object.entries(TasksArr)) {
            let millis = key;
            let taskObj = value;
            let taskTitle = (value['title'] == "") ? "title not defined" : value['title'];
            let taskDueDate = value['mainDueDate'];
            let taskPriority = value['priority'];
            displayTasks(millis,taskTitle, taskDueDate, taskPriority);
        }

    }

}

//get the current date , see if task object has such date
// then get all the tasks and add them to the dom
//while adding to the dom add the data attribute of milliseconds to the div of each respective tasks
//so it will be handy when used to view the task on view task page

export {
    generateHomepageContent
}