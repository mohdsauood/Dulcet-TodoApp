const generateHomepageContent=()=>{
    const dynamicContent=document.querySelector('#dynamicContent');
    dynamicContent.innerHTML=`<section class="navButtons">
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
        <div>
            <p>Workout</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>today 7pm</p>
    
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div>
            <p>homework</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>today 11pm</p>
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    <section class="task">
        <div>
            <p>service bike</p>
            <p><i class="im im-circle-o"></i>
            </p>
            <p>march 29th 10am</p>
        </div>
        <button><i class="im im-x-mark"></i>
        </button>
    </section>
    </section>
    <section class="uiButtons">
    <button> <i class="im im-plus"></i></button>
    <button>clear list</button>
    </section>`;
}

export {generateHomepageContent}