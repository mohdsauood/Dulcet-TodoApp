// datefns library
import {
    isToday,
    format,
    parse,
    isPast,
    isTomorrow,
    sub,
    add,
} from 'date-fns'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateHomepageEvents
} from './homePageEventListeners.js'
import {
    setQuote,
    setDisplayDate
} from './quotesGenerator.js';

let presentDate;
let presentFullDate;


const setPresentDate=(p1=format(new Date(), 'MMMMd'))=>{
    presentDate=p1;
}
const setPresentFullDate=(p1=format(new Date(), 'do MMMM yyy'))=>{
    presentFullDate=p1;
}
//later add little cute animation
//add feature when hovered over circle show the priority and its meaning
//on clearlist make an absolute position middle of screen button , to confirm delete all ! if yes then delete all .
//fix the logo
//i'll try cleaning stuffs
//viewtask only works on title and duedate not when clicked on other parts of div
//add one go to date option so user can jump to that date 
//fix css tomorrow and add hover animation for priority
//put slight arrow icon on click let it spread across and show go to date option
setPresentDate();
setPresentFullDate();
setQuote();
setDisplayDate();
generateHomepageContent();
generateHomepageEvents();
//write a guide on date fns

export {
    format,
    parse,
    isPast,
    isTomorrow,
    isToday,
    sub,
    presentDate,
    presentFullDate,
    setPresentDate,
    setPresentFullDate,
    add
}