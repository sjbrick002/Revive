const Project = title => {
    let essentialTasks = [];
    let majorTasks = [];
    let minorTasks = [];
    return {title, essentialTasks, majorTasks, minorTasks};
};

const Task = (title, enteredDueDate, description) => {
    let dueDate = new Date(enteredDueDate);
    return {title, enteredDueDate, description, dueDate};
};

let projectLibrary = [
    {
        title: "Default",
        essentialTasks: [],
        majorTasks: [],
        minorTasks: []
    }
];




if (localStorage.getItem("projectLibrary")) {
    projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
};


// updates localStorage's version of the user's projectLibrary
////// localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);



function orderByDueDate(targetTaskList) {
    targetTaskList.sort((a, b) => a["dueDate"].getTime() - b["dueDate"].getTime())
}

function returnProjectLibrary() {
    return projectLibrary;
};

function returnTaskList(targetProjectTitle, targetTaskList) {
    const projectIndex = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    const targetProject = returnProjectLibrary()[projectIndex];
    return targetProject[targetTaskList];
};

function addProject() {
    projectLibrary.push(Project(prompt("Name new project:")));
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
};

function eraseProject(targetProjectTitle) {
    const index = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    projectLibrary.splice(index, 1);
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
}

function renameProject(targetProjectTitle) {
    const index = projectLibrary.findIndex((project) => project.title === targetProjectTitle);
    projectLibrary[index].title = prompt("Enter project's name:", `${targetProjectTitle}`);
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
}

function addTask(targetTaskList) {
    const newTask = Task(prompt("Enter task's name:"), prompt("Enter task's due date:", "MM/DD/YYYY"), prompt("Enter task's description:"));
    targetTaskList.push(newTask);
    orderByDueDate(targetTaskList);
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
};

function eraseTask(targetTaskList, targetTaskTitle) {
    console.log(targetTaskList);
    const index = targetTaskList.findIndex((task) => task.title === targetTaskTitle);
    targetTaskList.splice(index, 1);
    console.log(targetTaskList);
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
};

function editTask(targetTaskList, targetTask, targetTaskIndex) {
    const revisedTask = Task(
        prompt("Enter task's name:", `${targetTask.title}`),
        prompt("Enter task's due date:", `${targetTask.enteredDueDate}`),
        prompt("Enter task's description:", `${targetTask.description}`)
    );
    targetTaskList.splice(targetTaskIndex, 1, revisedTask);
    orderByDueDate(targetTaskList);
    localStorage.setItem("projectLibrary", `${JSON.stringify(projectLibrary)}`);
};

export { returnProjectLibrary, returnTaskList, addProject, eraseProject, renameProject, addTask, eraseTask, editTask };