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
    steve
} from './homePageEventListeners.js'
import {
    setQuote,setCurrentDate
} from './quotesGenerator.js'





setQuote(format(new Date(), 'eee'));
setCurrentDate();
generateHomepageContent();
steve(parse,isPast);