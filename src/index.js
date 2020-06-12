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
setQuote(format(new Date(), 'eee'));
setCurrentDate(format);
generateHomepageContent();
generateHomepageEvents(parse,isPast);



export{format,parse,isPast}