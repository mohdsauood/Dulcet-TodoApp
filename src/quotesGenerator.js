
const quotesObj={
    Mon:{
        quote:"Focus on being productive instead of busy.",
        author:"Tim Ferriss"
    },
    Tue:{
        quote:"Until we can manage time, we can manage nothing else.",
        author:"Peter Drucker"
    },
    Wed:{
        quote:"You miss 100% of the shots you don’t take.",
        author:"Wayne Gretzky"
    },
    Thu:{
        quote:"Strive not to be a success, but rather to be of value.",
        author:"Albert Einstein"
    },
    Fri:{
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    Sat:{
        quote:"Lost time is never found again.",
        author:"Benjamin Franklin"
    },
    Sun:{
        quote:"We have a strategic plan. It’s called doing things",
        author:"Herb Kelleher"
    },
}

const setQuote=(day)=>{
    const quote=quotesObj[day].quote;
    const author=quotesObj[day].author;

    const quoteElement=document.querySelector('.quoteText');
    quoteElement.textContent=`"${quote}"`;

    const authorElement=document.querySelector('.quoteAuthor');
    authorElement.textContent=`-${author}`
}
const setCurrentDate = () => {
    const dateElement = document.querySelector('#homePageDate');
    dateElement.textContent = format(new Date(), 'do MMMM yyy');
}

export {setQuote,setCurrentDate}

