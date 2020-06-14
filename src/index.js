// datefns library
import {
    lightFormat,
    format,
    parse,
    isPast,isTomorrow
} from 'date-fns'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateHomepageEvents
} from './homePageEventListeners.js'
import {
    setQuote,setCurrentDate
} from './quotesGenerator.js'

// new issue when choosing old date then task doesnt get added
//above issue is solved i guess
//later add little cute animation
//add feature when hovered over circle show the priority and its meaning
//on clearlist make an absolute position middle of screen button , to confirm delete all ! if yes then delete all .
//see wordpress or shopify tuts to create a food order app
//somehow make the maindue date into march 1st 2nd etc
//fix the logo
//i'll try cleaning stuffs

setQuote(format(new Date(), 'eee'));
setCurrentDate(format);
generateHomepageContent();
generateHomepageEvents();
// i can keep a default parameter value of newdate but when passed a date i'll pass it
//i'll have to change the date dynamically too
//and handle previous and next day 
//no matter what the day is previous or next just update all with the current date simple
// when time and date is empty let user submit task


export{format,parse,isPast,isTomorrow}