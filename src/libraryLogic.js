const Project = title => {
    let essentialTasks = [];
    let majorTasks = [];
    let minorTasks = [];
    return {title, essentialTasks, majorTasks, minorTasks};
};

const Task = (title, enteredDueDate, description) => {
    let dueDate = new Date(enteredDueDate);
    return {title, dueDate, description};
};

let projectLibrary = [
    {
        title: "Start Here",
        essentialTasks: [],
        majorTasks: [],
        minorTasks: []
    }
];

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
};

function addTask(targetTaskList) {
    const newTask = Task(prompt("Enter task's name:"), prompt("Enter task's due date:", "MM/DD/YYYY"), prompt("Enter task's description:"));
    targetTaskList.push(newTask);
    orderByDueDate(targetTaskList);
};

function editTask(targetTaskList, targetTask, targetTaskIndex) {
    const revisedTask = Task(
        prompt("Enter task's name:", `${targetTask.title}`),
        prompt("Enter task's due date:", `${targetTask.DueDate}`),
        prompt("Enter task's description:", `${targetTask.description}`)
    );
    targetTaskList.splice(targetTaskIndex, 1, revisedTask);
    orderByDueDate(targetTaskList);
    console.log(targetTaskList);
};

export { returnProjectLibrary, returnTaskList, addProject, addTask, editTask };