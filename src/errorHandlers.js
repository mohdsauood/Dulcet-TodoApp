import {parse,isPast,isToday} from './index.js'

const setError=(text)=>{
    const span=document.querySelector('#errorSpan');
    span.textContent=text;
}

const clearError=()=>{
    const span=document.querySelector('#errorSpan');
    span.textContent="";
}

const checkError=(event)=>{
    const dateElement=document.querySelector('#duedate');
    clearError();
    let dateValue=parse(dateElement.value,'yyyy-MM-dd',new Date());
    let dateArr=dateElement.value.split('-');
    if(isPast(dateValue)&&!isToday(new Date(dateArr[0],dateArr[1]-1,dateArr[2])))
    {
        event.preventDefault();
        setError('Due date already passed ,set new date');
        return false;
    }
    return true;
}





export {checkError}