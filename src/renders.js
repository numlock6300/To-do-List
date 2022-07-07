import { Project } from "./projects";
import { Task } from "./Tasks";
import * as domElements from "./domElements";
import * as events from "./eventListeners";
import { getTodayTasks, createTaskElements } from "./functions";

export function renderProject(){
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    Project.projects.forEach((project)=> {
        const projectContainer = document.createElement("li")
        projectContainer.setAttribute("project-id", project.getProjectId());
        projectContainer.innerHTML = project.getName();
        projectsContainer.appendChild(projectContainer);
        events.ShowProjecTasks(projectContainer, project);
    })   
}

export function renderProjectOptions(selectElement){
    selectElement.innerHTML = "";
    Project.projects.forEach((project) => {
        const projectOption = document.createElement("option");
        projectOption.value = project.getName();
        // console.log(project.getName());
        projectOption.innerHTML = project.getName();
        selectElement.appendChild(projectOption);
        //domElements.editTaskFormProject.appendChild(projectOption);
    })
}

export function renderTaskPriorities(selectElement){
    selectElement.innerHTML = "";
    Task.descriptions.forEach((description) => {
        const descriptionOption = document.createElement("option");
        descriptionOption.value = description;
        descriptionOption.innerHTML = description;
        selectElement.appendChild(descriptionOption);
    })
}

export function renderTodayTasks(){
    domElements.mainContent.innerHTML = "";
    const todayTasks = getTodayTasks();
    createTaskElements(todayTasks, "renderTodayTasks");
}

export function renderProjectTasks(project){
    domElements.mainContent.innerHTML = "";
    createTaskElements(project.getTasks(), "renderProjectTasks"); 
}

export function renderTasks(){
    domElements.mainContent.innerHTML = "";
    Project.projects.forEach((project) => {
        createTaskElements(project.getTasks(),"renderTasks");
    })
}