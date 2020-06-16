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
//i'll try cleaning stuffs
//viewtask only works on title and duedate not when clicked on other parts of div
//fix css tomorrow and add hover animation for priority
//remove menu for big screens
//check what element is hidden in big screen and what element is hidden in small screen
//write features in READ ME guide
//added styles till 960px
//do the rest and animations
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