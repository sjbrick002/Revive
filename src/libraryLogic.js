const Project = title => {
    let essentialTasks = [];
    let majorTasks = [];
    let minorTasks = [];
    return {title, essentialTasks, majorTasks, minorTasks};
};

const Task = title => {
    let dueDate;
    let description;
    return {title, dueDate, description};
};

let projectLibrary = [
    {
        title: "Start Here",
        essentialTasks: [
            {
                title: "Have cake!"
            }
        ],
        majorTasks: [
            {
                title: "Vacuum room"
            }
        ],
        minorTasks: [
            {
                title: "Read your book"
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
    projectLibrary.push(Project(prompt("Name new project")));
};

function addTask(targetTaskList) {
    const newTask = Task(prompt("Name new task"));
    targetTaskList.push(newTask);

};

export { returnProjectLibrary, returnTaskList, addProject, addTask };