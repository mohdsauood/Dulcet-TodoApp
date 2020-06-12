// datefns library
import {
    lightFormat,
    format,
    parse,
    isPast
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

// to fix the issue when adding 2nd task try removing the button outside the form and then see if the issue persists
//need to implement view task feature
//later add little cute animation
//add feature when hovered over circle show the priority and its meaning
//on clearlist make an absolute position middle of screen button , to confirm delete all ! if yes then delete all .
setQuote(format(new Date(), 'eee'));
setCurrentDate(format);
generateHomepageContent();
generateHomepageEvents(parse,isPast);



export{format,parse,isPast}