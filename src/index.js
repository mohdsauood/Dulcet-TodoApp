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
    dateEventForAddTaskPage
} from './addTaskpageEventListeners.js'



dateEventForAddTaskPage(checkError,parse,isPast);

