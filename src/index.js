// datefns library
import {
    isToday,
    format,
    parse,
    isPast,
    isTomorrow,
    sub,
} from 'date-fns'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateHomepageEvents
} from './homePageEventListeners.js'
import {
    setQuote,
    setCurrentDate
} from './quotesGenerator.js';

let presentDate=format(new Date(), 'MMMMd');
let presentFullDate=format(new Date(), 'do MMMM yyy');

//later add little cute animation
//add feature when hovered over circle show the priority and its meaning
//on clearlist make an absolute position middle of screen button , to confirm delete all ! if yes then delete all .
//fix the logo
//i'll try cleaning stuffs
//bydefault presentDate is Today
//viewtask only works on title and duedate not when clicked on other parts of div
setQuote();
setCurrentDate();
generateHomepageContent();
generateHomepageEvents();
// i can keep a default parameter value of newdate but when passed a date i'll pass it
//i'll have to change the date dynamically too
//and handle previous and next day 
//no matter what the day is previous or next just update all with the current date simple
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
}