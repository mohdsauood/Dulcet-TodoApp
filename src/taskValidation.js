const dateElement=document.querySelector('#duedate');


const checkError=()=>{
    let datevalue=dateElement.value;

}


dateElement.addEventListener('input',checkError);
dateElement.addEventListener('keyup',checkError);

export {checkError}