function createUL(isSup = false, l) {
    let ul = document.createElement("ul");
    if (isSup)
        ul.classList.add("cd-accordion__sub", `cd-accordion__sub--l${l}`);
    else
        ul.classList.add(`cd-accordion`, "cd-accordion--animated", "w-100", "h-100");
    return ul;
}
function createLI(ph, id) {
    let li = document.createElement("li");
    li.classList.add("cd-accordion__item");
    if (ph.supPhase.length > 0) {
        li.classList.add("cd-accordion__item--has-children");

        let inpu = document.createElement('input');
        let lap = document.createElement('label');
        let sp = document.createElement('span');

        inpu.classList.add("cd-accordion__input");
        inpu.type = "checkbox";
        inpu.name = id;
        inpu.id = id;

        lap.classList.add("cd-accordion__label", "cd-accordion__label--icon-folder");
        lap.htmlFor = id;
        lap.id = id;
        // console.log(id);

        sp.innerHTML = ph.phaseName;

        lap.appendChild(sp);

        li.appendChild(inpu);
        li.appendChild(lap);

        level = id.split('-').length;
        let supPrt = createUL(true, level);
        ph.supPhase.forEach((step, inx) => {
            let supLI = createLI(step, `${id}-${inx}`);
            supPrt.appendChild(supLI);
        });
        li.appendChild(supPrt);
    } else {
        let _btn = document.createElement('a');
        _btn.classList.add("cd-accordion__label", "cd-accordion__label--icon-img", "w-100", "h-100");
        _btn.id = id;
        let _span = document.createElement('span');

        _span.innerHTML = ph.phaseName;
        _btn.appendChild(_span);

        li.appendChild(_btn);
    }

    return li;
}

function generateRM() {
    let pairant = createUL(false);
    User.projects[0].project_roadMap.forEach((phase, inx) => {
        let children = createLI(phase, `${inx}`);
        pairant.appendChild(children);
    });
    document.querySelector('.RM-contaner').appendChild(pairant);
}
function getTargetPhase(selecteID) {
    let targetPhase = User.projects[0].project_roadMap;
    let result;
    selecteID.split('-').forEach((e, i) => {
        // console.log(parseInt(e));
        if (i == 0)
            targetPhase = targetPhase[e];
        else
            targetPhase = targetPhase.supPhase[parseInt(e)];

        result = targetPhase;
    });
    return result;
}
function appendDetails(obj, type = "phase") {
    //info
    document.querySelector(".cards .task-read .info-name").innerHTML = obj[`${type}Name`];
    document.querySelector(".cards .task-read .info-desc").innerHTML = obj[`${type}Description`];

    // members
    if (type == "task") {
        document.querySelector(".cards .task-read .task-members").style.visibility = 'visible';
        let membersBox = document.querySelector(".cards .task-read .task-members .matiralBox");
        obj["members"].forEach((e, inx) => {
            let divMem = document.createElement('div');
            divMem.classList.add("member");
            divMem.id = `m${inx}`;

            let imgIco = document.createElement('img');
            imgIco.src = e.profileIcon;

            let spMemName = document.createElement('span');
            spMemName.innerHTML = e.userName;
            spMemName.classList.add("member-name");

            divMem.appendChild(imgIco);
            divMem.appendChild(spMemName);
            membersBox.appendChild(divMem);
        });
    }
    else
        document.querySelector(".cards .task-read .task-members").style.visibility = 'hidden';

    // DateTime
    document.querySelector(".cards .task-read .task-deadline span:not(.status)").innerHTML = obj.due;
    let spStatus = document.querySelector(".cards .task-read .task-deadline .status");
    if (obj.due < Date.now()){
        spStatus.innerHTML = "Due soon";
        spStatus.style.background = "#ffbc57";
    }
    else{
        spStatus.innerHTML = "Pasted";
        spStatus.style.background = "red";
    }

}
function getDetails() {
    const RMoptions = document.querySelectorAll('.cd-accordion__label');

    RMoptions.forEach((option, inx) => {
        option.addEventListener("click", () => {
            appendDetails(getTargetPhase(option.id));
        });
    });
}

window.onload = function () {
    generateRM();
    // generateTaskGrid();
    getDetails();

}