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
import {
    checkError
} from './errorHandlers.js'




setQuote(format(new Date(), 'eee'));
setCurrentDate();
generateHomepageContent();
generateHomepageEvents(parse,isPast);