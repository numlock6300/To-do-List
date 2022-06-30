import { Task } from "./Tasks";
import { Project } from "./projects";
import * as domElements from "./domElements";

export function createProject(name){
    const project = new Project(name);
    Project.projects.push(project);
}

export function toggleProjectForm() {
    domElements.createProjectForm.classList.toggle("hidden");
}

function addTaskToProject(task){
    for( const project of Project.projects){
        if(project.getName() === task.getProject()){
            project.addTask(task);
            break;
        }
    }
}

export function createTask(title, dueDate, description, priority, project){
    const task  = new Task(title.value, dueDate.value, description.value, priority.value, project.value);
    addTaskToProject(task);   
}

// export function addProjectOption(name) {
//     const projectOption = document.createElement("option");
//     projectOption.value = name.toLowerCase();
//     projectOption.innerHTML = name;
//     domElements.projectSelectList.appendChild(projectOption);
// }