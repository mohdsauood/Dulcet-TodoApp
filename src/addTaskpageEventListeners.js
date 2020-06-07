const dateEventForAddTaskPage=(fn,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        fn(e,parse,isPast);
    });
    dateElement.addEventListener('keyup',(e)=>{
        fn(e,parse,isPast);
    });
}


const formSubmitEventForAddTaskPage=(fn,parse,isPast)=>{
    const form=document.querySelector('form');
    form.addEventListener('submit',(e)=>{
        fn(e,parse,isPast);
    })
}

export{dateEventForAddTaskPage,formSubmitEventForAddTaskPage}