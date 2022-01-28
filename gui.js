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



function renderHomeLibrayBox() {
    homeLibraryBox.classList.add("library-box");

    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome, User";
    homeLibraryBox.appendChild(welcomeText);

    projectLibrary.classList.add("project-library");
    for (let i = 0; i < 10; i++) {
        const project = document.createElement("li");
        project.addEventListener("click", renderTaskLibraryBox);
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

function renderTaskLibraryBox() {
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
            task.textContent = `${[i + 3]}`;
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

renderHomeLibrayBox();