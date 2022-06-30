import { Project } from "./projects";
import { createProject } from "./functions";
import { toggleProjectForm } from "./functions";
import { createTask } from "./functions";
import { renderProjectOptions, renderTasks } from "./renders";
import { renderProject } from "./renders";
import * as domElements from "./domElements";

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
        renderProjectOptions();
        toggleProjectForm();
    })
}