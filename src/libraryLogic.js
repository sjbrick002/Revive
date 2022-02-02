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

export { returnProjectLibrary, returnTaskList };