const generateAddTaskContent=()=>{
    console.log('hi im generateaddtaskcontent function')
    const dynamicContent=document.querySelector('#dynamicContent');
    dynamicContent.innerHTML='';
    dynamicContent.innerHTML=` <button class="backButton"><i class="im im-angle-left"></i></button>
    <!-- validation later -->
    <form>
        <input type="text" placeholder="title" id="title">
        <textarea placeholder="description" id="description" cols="30" rows="10"></textarea>
        <label for="priority">Set a Priority</label>
            <select  id="priority">
                <option value="1">No Rush</option>
                <option value="2">Hurry Up</option>
                <option value="3">Very Urgent</option>
            </select>
            <br>
            <br>
        <label for="duedate">Enter a DueDate</label>
        <input type="text" id="duedate" placeholder="March 23 11am">
    </form>`;
}
export {generateAddTaskContent}