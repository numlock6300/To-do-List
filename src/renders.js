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

            const changePriorityContainer = domElements.createElement("form", "change-priority-container", taskButtons);
            const selectPriority = domElements.createElement("select", "select-priority", changePriorityContainer);
            changePriorityContainer.classList.add("hidden");
            selectPriority.size = 3;
            selectPriority.setAttribute("id", task.getTaskId());
            renderTaskPriorities(selectPriority);
            events.PrioritySelect(selectPriority);

            const changeProjectContainer = domElements.createElement("form", "change-project-container", taskButtons);
            const selectProject = domElements.createElement("select", "select-project", changeProjectContainer);
            changeProjectContainer.classList.add("hidden");
            selectProject.size = 3;
            selectProject.setAttribute("id", task.getTaskId());
            renderProjectOptions(selectProject);
            events.ProjectSelect(selectProject);

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
                        events.ShowChangeForm(taskButton, changePriorityContainer);
                        break;
                    case Array.from(Task.buttonImages.keys())[2]:
                        events.ShowChangeForm(taskButton, changeProjectContainer);
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
                        fieldValue.setAttribute("priority-id", task.getTaskId())
                        break;
                    default: break;
                }
                

            }





        }
        //console.log(project);
    })
}