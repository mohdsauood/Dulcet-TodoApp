import { checkError } from "./errorHandlers";
import {format,parse} from './index.js';


//create a createtask function that has check condition then create obj then set it in local storage
//set object in local storage
//,then call display


const checkTasksCondition=()=>{
    const titleElement=document.querySelector('#title');
    const descriptionElement=document.querySelector('#description');
    if(titleElement.value!=null ||descriptionElement.value!=null)
    {
        return true;
    }
    return false;
}

const taskFactory=(timeCreatedinMillis,{timeCreated,priority,duedate,title,descritpion})=>{

    return{
        timeCreatedinMillis:{
                                timeCreated,
                                priority,
                                duedate,
                                tiltle,
                                descritpion
                            },
    }

}

const createTask=()=>{
    if(checkTasksCondition)
    {
        const priorityElement=document.querySelector('#priority');
        const duedateElement=document.querySelector('#duedate');
        const hourElement=document.querySelector('#hour');
        const minuteElement=document.querySelector('#minute');
        const ampmElement=document.querySelector('#ampm');
        const titleElement=document.querySelector('#title');
        const descriptionElement=document.querySelector('#description');
        let currentDate=format(new Date(), 'MMMMd');
        let timeCreatedinMillis=format(new Date(),'T');
        let timeCreated=format(new Date(),'h:mm a');
        let priority=priorityElement.value;
        let dueDate=duedateElement.value;
        let dueHour=hourElement.value;
        let dueMinute=minuteElement.value;
        let dueAmPm=ampmElement.value;
        let mainDueDate=`${dueDate} ${dueHour}:${dueMinute} ${dueAmPm}`;
        let title=titleElement.value;
        let descritpion=descriptionElement.value;
        
        let testObj={currentDate,timeCreatedinMillis,timeCreated,priority,mainDueDate,title,descritpion}
        console.log(testObj);
        // const tasksObject={};
        // const tasksObject[currentDate]=taskFactory(timeCreatedinMillis,{timeCreated:timeCreated,priority:priority,duedate:duedate,duetime:duetime,title:title,descritpion:descritpion})
    }
}

// let mainObject={
    //  march25:{
    //     milliseconds:{
    //                     timeCreated:'time',
    //                     priority:'low',
    //                     duedate:'egegegege',
    //                     title:'sleeping',
    //                     descritpion:'etetetet',
    //                  },
    //          },
    // }

export { createTask}