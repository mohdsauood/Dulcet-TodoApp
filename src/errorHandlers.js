

const setError=(text)=>{
    const span=document.querySelector('#errorSpan');
    span.textContent=text;
}
const clearError=()=>{
    const span=document.querySelector('#errorSpan');
    span.textContent="";
}




export {setError,clearError}