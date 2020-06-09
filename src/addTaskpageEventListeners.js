const dateEventForAddTaskPage=(fn,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        fn(e,parse,isPast);
    });
    dateElement.addEventListener('keyup',(e)=>{
        fn(e,parse,isPast);
    });
}
//if met objectCreation coniditions i.e either title or descirption not null
// then pass values through factory function

const backButtonEventForAddTaskPage=(fn,parse,isPast,Ghomepage,Ehomepage)=>{
    const backButton=document.querySelector('#backButton');
    backButton.addEventListener('click',(e)=>{
        fn(e,parse,isPast);
        if( fn(e,parse,isPast))
        {
           Ghomepage();
           Ehomepage();
        }
    })
}

const generateAddTaskPageEvents=(fn,parse,isPast,Ghomepage,Ehomepage)=>{
    dateEventForAddTaskPage(fn,parse,isPast);
    backButtonEventForAddTaskPage(fn,parse,isPast,Ghomepage,Ehomepage);
}

export {generateAddTaskPageEvents}