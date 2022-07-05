import { Project } from "./projects";
import { Task } from "./Tasks";
import * as domElements from "./domElements";
import * as events from "./eventListeners";

export function renderProject(){
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    Project.projects.forEach((project)=> {
        const projectContainer = document.createElement("li")
        projectContainer.innerHTML = project.getName();
        projectsContainer.appendChild(projectContainer);
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

export function renderTasks(){
    domElements.mainContent.innerHTML = "";
    Project.projects.forEach((project) => {
        for (let task of project.getTasks()) {
            // console.log(task.keys);
            const taskContainer = domElements.createElement("div", "task-container", domElements.mainContent);
            const taskOverview = domElements.createElement("div", "task-overview", taskContainer);
            const taskDescription = domElements.createElement("div", "task-description", taskContainer);
            taskDescription.classList.add("hidden");
            const taskName = domElements.createElement("div", "task-name", taskOverview);
            taskName.innerHTML = task.getTitle();
            const taskButtons = domElements.createElement("div", "task-buttons", taskOverview);

            for (let [key, value] of Task.buttonImages) {
                const taskButton = domElements.createElement("button", "task-button", taskButtons);
                taskButton.setAttribute("id", task.getTaskId());
                const buttonImage = domElements.createElementWithoutClass("img", taskButton);
                //const buttonImage = new Image();
                buttonImage.src = value;
                buttonImage.alt = key;
                switch(key) {
                    case Array.from(Task.buttonImages.keys())[0]:
                        events.OpenEditTaskForm(taskButton);
                        break;
                    case Array.from(Task.buttonImages.keys())[1]:
                        console.log("priority");
                        break;
                    case Array.from(Task.buttonImages.keys())[2]:
                        console.log("move");
                        break;
                    case Array.from(Task.buttonImages.keys())[3]:
                        events.RemoveTask(taskButton);
                        break;
                    default: break;
                }
                // console.log(Array.from(Task.buttonImages.keys())[2])
                
                //taskButton.appendChild(buttonImage);
            }

            for (let field of Task.descriptionFields) {
                const spanContainer = domElements.createElementWithoutClass("div", taskDescription);
                const fieldName = domElements.createElementWithoutClass("span",spanContainer);
                fieldName.innerHTML = field;
                const fieldValue = domElements.createElementWithoutClass("span", spanContainer);
                switch(field) {
                    case Task.descriptionFields[0]:
                        fieldValue.innerHTML = task.getTitle();
                        break;
                    case Task.descriptionFields[1]:
                        fieldValue.innerHTML = task.getDueDate();
                        break;
                    case Task.descriptionFields[2]:
                        fieldValue.innerHTML = task.getDescription();
                        break;
                    case Task.descriptionFields[3]:
                        fieldValue.innerHTML = task.getPriority();
                        break;
                    default: break;
                }
                

            }





        }
        //console.log(project);
    })
}