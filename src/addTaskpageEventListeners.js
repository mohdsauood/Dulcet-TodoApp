const dateEventForAddTaskPage=(fn,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    dateElement.addEventListener('input',(e)=>{
        fn(e,parse,isPast);
    });
    dateElement.addEventListener('keyup',(e)=>{
        fn(e,parse,isPast);
    });
}


const backButtonEventForAddTaskPage=(fn,parse,isPast)=>{
    const backButton=document.querySelector('#backButton');
    backButton.addEventListener('click',(e)=>{
        fn(e,parse,isPast);
        if( fn(e,parse,isPast))
        {
            console.log('ab hum nikalenge yahan se');
        }
    })
}



export{dateEventForAddTaskPage,backButtonEventForAddTaskPage}