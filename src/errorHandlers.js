

const setError=(text)=>{
    const span=document.querySelector('#errorSpan');
    span.textContent=text;
}
const clearError=()=>{
    const span=document.querySelector('#errorSpan');
    span.textContent="";
}

const checkError=(e,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    clearError();
    let dateValue=parse(dateElement.value,'yyyy-MM-dd',new Date());
    if(isPast(dateValue))
    {
        e.preventDefault();
        setError('Due date already passed ,set new date');
    }
    else if(x){
        //make backbutton a form submit button
        //check if required etc etc
    }
}



export {setError,clearError,checkError}