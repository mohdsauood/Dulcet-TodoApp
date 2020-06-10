import { checkError } from "./errorHandlers";
import {format} from './index.js';
const priorityElement=document.querySelector('#priority');
const duedateElement=document.querySelector('#duedate');
const hourElement=document.querySelector('#hour');
const minuteElement=document.querySelector('#minute');
const ampmElement=document.querySelector('#ampm');
const titleElement=document.querySelector('#title');
const descriptionElement=document.querySelector('#description');

//create a createtask function that has check condition then create obj then set it in local storage
//set object in local storage
//,then call display


const checkTasksCondition=()=>{
    if(titleElement.value!=null ||descriptionElement.value!=null)
    {
        return true;
    }
    return false;
}

const taskFactory=(timeCreatedinMillis,{timeCreated,priority,duedate,duetime,title,descritpion})=>{

    return{
        timeCreatedinMillis:{
                                timeCreated,
                                priority,
                                duedate,
                                duetime,
                                tiltle,
                                descritpion
                            },
    }

}
const createTask=()=>{
    if(checkTasksCondition)
    {
        let currentDate=format(new Date(),'T');
        let timeCreated;
        let timeCreatedinMillis=format(new Date(),)
        currentDate=taskFactory(timeCreatedinMillis,{timeCreated:timeCreated,priority:priority,duedate:duedate,duetime:duetime,title:title,descritpion:descritpion})
    }
}

// let march25={
//     milliseconds:{
//                     timeCreated:'time',
//                     priority:'low',
//                     duedate:'egegegege',
//                     title:'sleeping',
//                     descritpion:'etetetet',
//                  },
    
// }