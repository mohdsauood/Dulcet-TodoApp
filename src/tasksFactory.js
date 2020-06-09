

const titleElement=document.querySelector('#title');
const descriptionElement=document.querySelector('#description');


//import is working 
// so clear the complexity and reduce the imports and passing the functions as parameteres except the datefns one as they require bundling and only be used my index js. cut and chop the rest of the parameters and provided access to everybody and make the code clean and use imports everywhere 
// for now im learning data structures 
// or create layout for desktop
// or add logo man


















//create e createtask function that has check condition then create obj then set it in local storage,then call display
//set object in local storage

const checkTasksCondition=()=>{
    if(titleElement.value!=null ||descriptionElement.value!=null)
    {
        return true;
    }
    return false;
}

