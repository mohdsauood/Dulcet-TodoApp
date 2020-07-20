// datefns library
import { isToday, format, parse, isPast, isTomorrow, sub, add } from 'date-fns';
import { generateHomepageContent } from './dynamicHomePage.js';
import { generateHomepageEvents } from './homePageEventListeners.js';
import { setQuote, setDisplayDate } from './quotesGenerator.js';

let presentDate;
let presentFullDate;

const setPresentDate = (p1 = format(new Date(), 'MMMMd')) => {
  presentDate = p1;
};
const setPresentFullDate = (p1 = format(new Date(), 'do MMMM yyy')) => {
  presentFullDate = p1;
};

setPresentDate();
setPresentFullDate();
setQuote();
setDisplayDate();
generateHomepageContent();
generateHomepageEvents();

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
  add,
};
