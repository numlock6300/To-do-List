import { Project } from "./projects";
import { createProject } from "./functions";
import { toggleProjectForm } from "./functions";
import { createTask, populateEditForm, updateValues, getCurrentTask, getProjectIndex, deleteTaskFromProject } from "./functions";
import { renderProjectOptions, renderTasks } from "./renders";
import { renderProject } from "./renders";
import * as domElements from "./domElements";
import { Task } from "./Tasks";

// Task events
export function OpenAddTaskForm() {
    const addTaskButton = document.querySelector(".add-task-button");
    const createTaskform = document.querySelector(".create-task");
    addTaskButton.addEventListener("click", () => {
        createTaskform.classList.toggle("hidden");
    })
}

export function CloseAddTaskForm() {
    const createTaskform = document.querySelector(".create-task");
    domElements.closeTaskButton.addEventListener("click", () => {
        createTaskform.classList.toggle("hidden");
    })
}

export function AddTask() {
    domElements.okTaskButton.addEventListener("click", () => {
        createTask(domElements.taskFormTitle, domElements.taskFormDueDate,
            domElements.taskFormDescription, domElements.taskFormPriority, domElements.projectSelectList);
        renderTasks();
        showDescription();
        //console.log(Project.projects[0])
        

    })
}

export function OpenEditTaskForm(button) {
    button.addEventListener("click", (e) => {
        //console.log(e.target.getAttribute("id"));
        domElements.editTaskForm.classList.toggle("hidden");
        domElements.editTaskForm.setAttribute("id", e.target.getAttribute("id"));
        populateEditForm(e.target.getAttribute("id"));
    }, true) 
}

export function CloseEditTaskForm() {
    domElements.closeEditTaskButton.addEventListener("click", () => {
        domElements.editTaskForm.classList.toggle("hidden");
    })
}

export function UpdateTask() {
    domElements.updateEditTaskButton.addEventListener("click", () => {
        updateValues();
        renderTasks();
        showDescription();
        
    })

}

export function RemoveTask(button) {
    button.addEventListener("click", (e) => {
        const targetTask = getCurrentTask(parseInt(e.target.getAttribute("id")));
        const projectIndex = getProjectIndex(targetTask.getProject());
        deleteTaskFromProject(targetTask, projectIndex);
        renderTasks();
        showDescription();

        
    })
}

// Project events
export function OpenAddProjectForm() {
    const addProjectButton = document.querySelector(".project-button");
    addProjectButton.addEventListener("click", () => {
        toggleProjectForm()
        domElements.projectNameField.value = "New Project";
})
}

export function CloseAddProjectForm() {
    const closeProjectButton = document.querySelector("#project-cancel-button");
    closeProjectButton.addEventListener("click", () => {
        toggleProjectForm();
    })

}


export function AddProject() {
    const okProjectButton = document.querySelector("#project-ok-button");
    okProjectButton.addEventListener("click", () => {
        createProject(domElements.projectNameField.value);
        renderProject();
        renderProjectOptions(domElements.projectSelectList);
        renderProjectOptions(domElements.editTaskFormProject);
        toggleProjectForm();
    })
}

export function showDescription() {
    const taskOverview = Array.from(document.querySelectorAll(".task-overview"));
    //console.log(taskOverview);
    const taskDescription = document.querySelector(".task-description");
    taskOverview.forEach(task => task.addEventListener("click", (e) => {
        //console.log("click")
        if(e.target === e.currentTarget){
            
        e.target.nextElementSibling.classList.toggle("hidden")
        }
    }), true)
}

// export function editTask(button) {
//     button.addEventListener("click", (e) => {
//         console.log(e.target.getAttribute("id"));

//     }, true) 
// }

export function Test() {
    document.querySelector(".logo-title").addEventListener("click", () => {
        console.log(Project.projects)
        //let currentTask = Project.projects.map((project) => project.getTasks().filter((task) => task.getTaskId() === 0))
        //console.log(currentTask);
        let projectIndex = Project.projects.map(project => project.getName());
        console.log(projectIndex.indexOf("My project"));
        console.log(Project.projects[0].getName());
    })
}
