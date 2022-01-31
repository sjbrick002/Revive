const body = document.querySelector("body");


const homeLibraryBox = document.createElement("div");
const welcomeText = document.createElement("p");
const projectLibrary = document.createElement("ul");
const projectControls = document.createElement("div");
const newProjectBtn = document.createElement("button");
const renameProjectBtn = document.createElement("button");
const finishProjectBtn = document.createElement("button");

const taskLibraryBox = document.createElement("div");
const essentialTaskBar = document.createElement("div");
const majorTaskBar = document.createElement("div");
const minorTaskBar = document.createElement("div");

const taskInfoBox = document.createElement("div");
const dueDateDisplay = document.createElement("p");
const descriptionDisplay = document.createElement("p");
const editBtn = document.createElement("button");


function clearTaskInfoBox() {
    while (taskInfoBox.firstChild) {
        taskInfoBox.removeChild(taskInfoBox.firstChild);
    };
    body.removeChild(taskInfoBox);
};

function renderTaskInfoBox() {
    if (taskInfoBox.firstChild) {clearTaskInfoBox()};
    taskInfoBox.classList.add("task-info-box");

    dueDateDisplay.classList.add("due-date-display");
    dueDateDisplay.textContent = "Due Date: 6:00AM XX/XX/XXXX";
    taskInfoBox.appendChild(dueDateDisplay);

    descriptionDisplay.classList.add("description-display");
    descriptionDisplay.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum iusto distinctio, ex quos quo molestias molestiae? Neque accusantium culpa perferendis, non nulla aperiam eaque magnam omnis ipsam beatae, deleniti porro? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat repudiandae quam iure. Voluptatum omnis eveniet iste, dolor adipisci culpa obcaecati placeat veniam aspernatur tempore aliquid nemo dicta magnam, est reprehenderit?";
    taskInfoBox.appendChild(descriptionDisplay);

    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    taskInfoBox.appendChild(editBtn);

    body.appendChild(taskInfoBox);
};


function clearTaskLibraryBox() {
    while (essentialTaskBar.firstChild) {
        essentialTaskBar.removeChild(essentialTaskBar.firstChild);
    };
    while (majorTaskBar.firstChild) {
        majorTaskBar.removeChild(majorTaskBar.firstChild);
    };
    while (minorTaskBar.firstChild) {
        minorTaskBar.removeChild(minorTaskBar.firstChild);
    };
    while (taskLibraryBox.firstChild) {
        taskLibraryBox.removeChild(taskLibraryBox.firstChild);
    };
    body.removeChild(taskLibraryBox);
};

function renderTaskLibraryBox() {
    if (taskLibraryBox.firstChild) {clearTaskLibraryBox()};
    
    taskLibraryBox.classList.add("library-box", "task-library");

    const taskBarArrays = [essentialTaskBar, majorTaskBar, minorTaskBar, "Essential", "Major", "Minor"];
    for (let i = 0; i < 3; i++) {
        taskBarArrays[i].classList.add("priority-box");
        const taskRank = document.createElement("p");
        taskRank.textContent =  `${taskBarArrays[i + 3]}`;
        taskBarArrays[i].appendChild(taskRank);
        const addTaskBtn = document.createElement("button");
        addTaskBtn.classList.add("add-task-btn");
        addTaskBtn.textContent = "+";
        taskBarArrays[i].appendChild(addTaskBtn);
        taskLibraryBox.appendChild(taskBarArrays[i]);

        const taskLibrary = document.createElement("ul");
        taskLibrary.classList.add(`${taskBarArrays[i + 3].toLowerCase()}-library`);
        for (let i = 0; i < 3; i++) {
            const task = document.createElement("li");
            task.textContent = `${[i + 1]}`;
            task.addEventListener("click", () => {
                renderTaskInfoBox();
            });
            const bigCircle = document.createElement("div");
            bigCircle.classList.add("big-circle");
            const smallCircle = document.createElement("div");
            smallCircle.classList.add("small-circle");
            bigCircle.appendChild(smallCircle);
            task.appendChild(bigCircle);
            taskLibrary.appendChild(task);
        };
        taskLibraryBox.appendChild(taskLibrary);
    };

    body.appendChild(taskLibraryBox);
};

function renderHomeLibrayBox() {
    homeLibraryBox.classList.add("library-box");

    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome, User";
    homeLibraryBox.appendChild(welcomeText);

    projectLibrary.classList.add("project-library");
    for (let i = 0; i < 10; i++) {
        const project = document.createElement("li");
        project.addEventListener("click", () => {
            if (taskInfoBox.firstChild) {
                clearTaskInfoBox();
            };
            renderTaskLibraryBox()
        });
        project.textContent = `Example ${[i]}`;
        projectLibrary.appendChild(project);
    };
    homeLibraryBox.appendChild(projectLibrary);

    projectControls.classList.add("project-controls");
    newProjectBtn.classList.add("project-btn");
    newProjectBtn.textContent = "New Project";
    projectControls.appendChild(newProjectBtn);
    renameProjectBtn.classList.add("project-btn");
    renameProjectBtn.textContent = "Rename Project";
    projectControls.appendChild(renameProjectBtn);
    finishProjectBtn.classList.add("project-btn");
    finishProjectBtn.textContent = "Finish Project";
    projectControls.appendChild(finishProjectBtn);
    homeLibraryBox.appendChild(projectControls);

    body.appendChild(homeLibraryBox);
};



renderHomeLibrayBox();