import { Project } from "./projects";
import { createProject } from "./functions";
import { toggleProjectForm } from "./functions";
import { renderProjectOptions } from "./renders";
import { renderProject } from "./renders";
import * as domElements from "./domElements";

export function OpenAddTaskForm() {
    const addTaskButton = document.querySelector(".add-task-button");
    const createTaskform = document.querySelector(".create-task");
    addTaskButton.addEventListener("click", () => {
        createTaskform.classList.toggle("hidden");
    })
}

export function OpenAddProjectForm() {
    const addProjectButton = document.querySelector(".project-button");
    addProjectButton.addEventListener("click", () => {
        // domElements.createProjectForm.classList.toggle("hidden");
        toggleProjectForm()
        domElements.projectNameField.value = "New Project";
})
}

export function CloseAddProjectForm() {
    const closeProjectButton = document.querySelector("#project-cancel-button");
    closeProjectButton.addEventListener("click", () => {
        // domElements.createProjectForm.classList.add("hidden");
        toggleProjectForm();
    })

}


export function AddProject() {
    const okProjectButton = document.querySelector("#project-ok-button");
    okProjectButton.addEventListener("click", () => {
        createProject(domElements.projectNameField.value);
        renderProject();
        // domElements.createProjectForm.classList.add("hidden");
        renderProjectOptions();
        toggleProjectForm();
    })
}