import { Project } from "./projects";
import * as domElements from "./domElements";

export function createProject(name){
    const project = new Project(name);
    Project.projects.push(project);
}

export function toggleProjectForm() {
    domElements.createProjectForm.classList.toggle("hidden");
}

// export function addProjectOption(name) {
//     const projectOption = document.createElement("option");
//     projectOption.value = name.toLowerCase();
//     projectOption.innerHTML = name;
//     domElements.projectSelectList.appendChild(projectOption);
// }