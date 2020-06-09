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
    dateEventForAddTaskPage,backButtonEventForAddTaskPage
} from './addTaskpageEventListeners.js'


dateEventForAddTaskPage(checkError,parse,isPast);
backButtonEventForAddTaskPage(checkError,parse,isPast);


