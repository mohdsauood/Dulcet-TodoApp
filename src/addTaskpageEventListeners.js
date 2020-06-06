const eventsForAddTaskPage=(fn)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',fn);
    dateElement.addEventListener('keyup',fn);
}

export{eventsForAddTaskPage}