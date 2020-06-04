const generateHomepageContent = () => {
    const dynamicContent = document.querySelector('#dynamicContent');
    dynamicContent.innerHTML = `<section class="navButtons">
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Previous Day</button>
    </div>
    <div>
        <button><i class="im im-calendar"></i></button>
        <button>Next Day</button>
    </div>
    </section>
    <section class="tasks">
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div id="task">
            <p>Title</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>due date</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
   
    </section>
    <section class="uiButtons">
    <button id="addButton"> <i class="im im-plus"></i></button>
    <button>clear list</button>
    </section>`;
}

export {
    generateHomepageContent
}