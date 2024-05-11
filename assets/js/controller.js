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
    document.querySelector('.RM-contaner .RM-body').appendChild(pairant);
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
        document.querySelector(".cards .task-read .task-members").style.position = 'initial';
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
    else {
        document.querySelector(".cards .task-read .task-members").style.position = 'absolute';
        document.querySelector(".cards .task-read .task-members").style.visibility = 'hidden';
    }

    // DateTime
    document.querySelector(".cards .task-read .task-deadline span:not(.status)").innerHTML = obj.due;
    let spStatus = document.querySelector(".cards .task-read .task-deadline .status");
    if (obj.due < Date.now()) {
        spStatus.innerHTML = "Due soon";
        spStatus.style.background = "#ffbc57";
    }
    else {
        spStatus.innerHTML = "Pasted";
        spStatus.style.background = "red";
    }

    // Matrials
    let matrialsContainer = document.createElement('div');
    obj.matirials.forEach((m, inx) => {
        let divmaterial = document.createElement('div');
        divmaterial.classList.add("material");
        divmaterial.id = `mt-${inx}`;

        let divText = document.createElement('div');
        divText.classList.add("text-titles");

        let title = document.createElement('a');
        title.classList.add("title");
        title.target = "_blank";
        title.innerHTML = m.matName;
        title.href = m.matURL;

        let supTitle = document.createElement('div');
        supTitle.classList.add("suptitle");
        supTitle.innerHTML = "Word";

        let thumbnail = document.createElement('img');
        thumbnail.classList.add("thumbnail");
        thumbnail.src = m.matIcon;

        divText.appendChild(title);
        divText.appendChild(supTitle);

        divmaterial.appendChild(divText);
        divmaterial.appendChild(thumbnail);


        matrialsContainer.appendChild(divmaterial);
    });
    document.querySelector("#task-write > div.task-matrials > div").innerHTML = "";
    document.querySelector("#task-write > div.task-matrials > div").appendChild(matrialsContainer);

    document.querySelector("#task-read > div.task-matrials > div").innerHTML = "";
    document.querySelector("#task-read > div.task-matrials > div").appendChild(matrialsContainer);
}
var currentPhaseID = -1;
function getDetails() {
    const RMoptions = document.querySelectorAll('.cd-accordion__label');

    RMoptions.forEach((option, inx) => {
        option.addEventListener("click", () => {
            currentPhaseID = option.id;
            appendDetails(getTargetPhase(currentPhaseID));
        });
    });
}
function addNewPhase() {
    document.getElementById('done-btn').addEventListener("click", (event) => {
        let obj = {
            phaseName: document.getElementById("input-phaseName").value,
            phaseDescription: document.getElementById("input-phaseDesc").value,
            due: document.getElementById("task-date-time").value,
            matirials: [
                {
                    matName: "Portofolio",
                    matURL: "https://google.com",
                    matIcon: "assets/img/107,70.png",
                },
            ],
            supPhase: [],
            tasks: [],
        }
        User.projects[0].project_roadMap.push(obj);
        document.querySelector('.RM-contaner .RM-body').innerHTML = "";
        generateRM();
        getDetails();
    })
}
function deletePhase() {
    if (currentPhaseID != -1) {
        let phToDel = getTargetPhase(currentPhaseID);
        const check = (ph) => {
            return ph.phaseName != phToDel.phaseName;
        };

        currentPhaseID.split('-').forEach((e, i) => {
                User.projects[0].project_roadMap = User.projects[0].project_roadMap.filter(check);
            if (User.projects[0].project_roadMap.length != e)
                User.projects[0].project_roadMap[e].supPhase = User.projects[0].project_roadMap[e].supPhase.filter(check);
        });
        currentPhaseID = -1;
    }
    else
        window.alert("Please Select phase To Delete");

    document.querySelector('.RM-contaner .RM-body').innerHTML = "";
    generateRM();
    getDetails();
}
window.onload = function () {
    generateRM();
    // generateTaskGrid();
    getDetails();
    addNewPhase();
}