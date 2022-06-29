import { Project } from "./projects";
import * as domElements from "./domElements";

export function renderProject(){
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    Project.projects.forEach((project)=> {
        const projectContainer = document.createElement("li")
        projectContainer.innerHTML = project.getName();
        projectsContainer.appendChild(projectContainer);
    })   
}

export function renderProjectOptions(){
    domElements.projectSelectList.innerHTML = "";
    Project.projects.forEach((project) => {
        const projectOption = document.createElement("option");
        projectOption.value = project.getName();
        console.log(project.getName());
        projectOption.innerHTML = project.getName();
        domElements.projectSelectList.appendChild(projectOption);
    })
}