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





setQuote(format(new Date(), 'eee'));
setCurrentDate(format);
generateHomepageContent();
generateHomepageEvents(parse,isPast);