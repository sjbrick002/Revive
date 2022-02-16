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
        essentialTasks: [
            {
                title: "Have cake!",
                dueDate: "No due date",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        majorTasks: [
            {
                title: "Vacuum room",
                dueDate: "No due date",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        minorTasks: [
            {
                title: "Read your book",
                dueDate: "No due date",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }
];

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
};

function editTask(targetTaskList, targetTask, targetTaskIndex) {
    const revisedTask = Task(
        prompt("Enter task's name:", `${targetTask.title}`),
        prompt("Enter task's due date:", `${targetTask.DueDate}`),
        prompt("Enter task's description:", `${targetTask.description}`)
    );
    targetTaskList.splice(targetTaskIndex, 1, revisedTask);
    console.log(targetTaskList);
};

export { returnProjectLibrary, returnTaskList, addProject, addTask, editTask };