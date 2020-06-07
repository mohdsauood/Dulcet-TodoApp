const dateEventForAddTaskPage=(fn,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        fn(e,parse,isPast);
    });
    dateElement.addEventListener('keyup',(e)=>{
        fn(e,parse,isPast);
    });
}


const backButtonEventForAddTaskPage=()=>{

}

export{dateEventForAddTaskPage,backButtonEventForAddTaskPage}