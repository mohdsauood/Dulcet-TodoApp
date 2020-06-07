// datefns library
import {
    lightFormat,
    parse,
    isPast
} from 'date-fns'

import{
setError,clearError,checkError
} from './errorHandlers.js'

import{
    dateEventForAddTaskPage,formSubmitEventForAddTaskPage
} from './addTaskpageEventListeners.js'



dateEventForAddTaskPage(checkError,parse,isPast);
formSubmitEventForAddTaskPage(checkError,parse,isPast);


