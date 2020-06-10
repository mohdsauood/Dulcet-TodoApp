const generateAddTaskContent = () => {
    const dynamicContent = document.querySelector('#dynamicContent');
    dynamicContent.innerHTML = ` <form novalidate>
    <button id="backButton" class="backButton"><i class="im im-angle-left"></i></button>
    <br>
    <label for="priority">Set a Priority</label>
    <select  id="priority">
        <option default value="" selected disabled hidden>priority level</option>
        <option value="No Rush">No Rush</option>
        <option value="Hurry Up">Hurry Up</option>
        <option value="Very Urgent">Very Urgent</option>
    </select>
    <br>
<span>Set a DueDate</span>
<input id="duedate" type="date" >
<br>
<span>Time</span>
<select id="hour">
    <option default value="" selected disabled hidden>Hour</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
</select>
<select  id="minute">
    <option default value="" selected disabled hidden>minutes</option>
    <option value="00">00</option>
    <option value="15">15</option>
    <option value="30">30</option>
    <option value="45">45</option>
</select>
<select  id="ampm">
    <option default value="" selected disabled hidden>am/pm</option>
    <option value="AM">AM</option>
    <option value="PM">PM</option>
</select>
    <input type="text" placeholder="title" id="title"  maxlength="20" >
    <textarea placeholder="description" id="description" cols="30" rows="10"></textarea>
   <br>
    <span id="errorSpan"></span>
</form>`;

}
export {
    generateAddTaskContent
}