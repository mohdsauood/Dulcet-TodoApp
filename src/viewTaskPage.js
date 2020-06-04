const generateViewTaskpageContent = () => {
    const dynamicContent = document.querySelector('#dynamicContent');
    dynamicContent.innerHTML = `<button id="AddTaskBack" class="backButton"><i class="im im-angle-left"></i></button>
    <section class="viewingTask">
        <p>time written on</p>
        <form>
            <input type="text" placeholder="title" id="title" value="workout man">
            
            <textarea placeholder="description" id="description" cols="30" rows="10"></textarea>
        </form>
        <p ><span>priority :  </span>very urgent</p>
        <p><span>due date :  </span>tomorow 5pm</p>
    </section>`;
}

export {generateViewTaskpageContent}