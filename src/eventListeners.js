import { Project } from "./projects";
import { createProject } from "./functions";
import { toggleProjectForm } from "./functions";
import { createTask, populateEditForm, updateValues, getCurrentTask, getProjectIndex, deleteTaskFromProject, changeDescriptionField, popUpActivator, moveTask} from "./functions";
import { renderProjectOptions, renderTasks, renderProjectTasks, renderTodayTasks } from "./renders";
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
        createTask(domElements.taskFormTitle.value, domElements.taskFormDueDate.value,
            domElements.taskFormDescription.value, domElements.taskFormPriority.value, domElements.projectSelectList.value);
        renderTasks();
        showDescription();
        localStorage.setItem("data",JSON.stringify(Project.projects));
    })
}

export function OpenEditTaskForm(button) {
    button.addEventListener("click", (e) => {
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


function renderAll() {
    console.log("1");
    updateValues();
    renderTasks();
    showDescription();
    localStorage.setItem("data",JSON.stringify(Project.projects));
}

function renderToday() {
    console.log("2");
    updateValues();
    renderTodayTasks();
    showDescription();
    localStorage.setItem("data",JSON.stringify(Project.projects));
}

function renderByProject() {
    console.log("3");
    const task = getCurrentTask(parseInt(domElements.editTaskForm.getAttribute("id")));
    const projectIndex = getProjectIndex(task.getProject());
    updateValues();
    renderProjectTasks(Project.projects[projectIndex]);
    showDescription();
    localStorage.setItem("data",JSON.stringify(Project.projects));
}

export function UpdateTask(renderFunction) {

    switch(renderFunction){
        case "renderTasks":
            domElements.updateEditTaskButton.removeEventListener("click", renderToday);
            domElements.updateEditTaskButton.removeEventListener("click", renderByProject);
            domElements.updateEditTaskButton.addEventListener("click", renderAll);
            break;
        case "renderTodayTasks":
            domElements.updateEditTaskButton.removeEventListener("click", renderAll);
            domElements.updateEditTaskButton.removeEventListener("click", renderByProject);
            domElements.updateEditTaskButton.addEventListener("click", renderToday);
            break;
        case "renderProjectTasks":
            domElements.updateEditTaskButton.removeEventListener("click", renderAll);
            domElements.updateEditTaskButton.removeEventListener("click", renderToday);
            domElements.updateEditTaskButton.addEventListener("click", renderByProject);
            break;
    }

    //domElements.updateEditTaskButton.addEventListener("click", () => {

        //const task = getCurrentTask(parseInt(domElements.editTaskForm.getAttribute("id")));
        //const projectIndex = getProjectIndex(task.getProject());
    
        //updateValues();
        //renderTasks();
        //showDescription();
        // switch(renderFunction) {
        //     case "renderTasks":
        //         renderTasks();
        //         break;
        //     case "renderTodayTasks":
        //         renderTodayTasks();
        //         break;
        //     case "renderProjectTasks":
        //         renderProjectTasks(Project.projects[projectIndex]);
        //         break;
        // }
        // showDescription();
        
        
    //})

}

export function ShowChangeForm(button, form) {
    button.addEventListener("click", () => {
        form.classList.remove("hidden");
    })
}

export function PrioritySelect(select) {
    select.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(select.value);
        const task = getCurrentTask(parseInt(select.getAttribute("id")));
        task.setPriority(select.value);
        changeDescriptionField(parseInt(select.getAttribute("id")), task.getPriority(), "priority-id");
        localStorage.setItem("data",JSON.stringify(Project.projects));
    })
    

}

export function ProjectSelect(select, renderFunction){
    select.classList.add("overflow-on");
    select.addEventListener("click", (e) => {
        const task = getCurrentTask(parseInt(select.getAttribute("id")));
        const projectIndex = getProjectIndex(task.getProject());
        moveTask(task, task.getProject(), select.value);
        task.setProject(select.value);
        switch(renderFunction) {
            case "renderTasks":
                renderTasks();
                break;
            case "renderTodayTasks":
                renderTodayTasks();
                break;
            case "renderProjectTasks":
                renderProjectTasks(Project.projects[projectIndex]);
                break;
        }
        showDescription();
        localStorage.setItem("data",JSON.stringify(Project.projects));

    })
}

export function RemoveTask(button, renderFunction) {
    button.addEventListener("click", (e) => {
        const targetTask = getCurrentTask(parseInt(e.target.getAttribute("id")));
        const projectIndex = getProjectIndex(targetTask.getProject());
        deleteTaskFromProject(targetTask, projectIndex);
        //renderTasks();
        switch(renderFunction) {
            case "renderTasks":
                renderTasks();
                break;
            case "renderTodayTasks":
                renderTodayTasks();
                break;
            case "renderProjectTasks":
                renderProjectTasks(Project.projects[projectIndex]);
                break;
        }
        showDescription(); 
        localStorage.setItem("data",JSON.stringify(Project.projects));   
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
        const selectProject = Array.from(document.querySelectorAll(".select-project"));
        selectProject.forEach((project) => {
            renderProjectOptions(project);
        }) 
        toggleProjectForm();
        localStorage.setItem("data",JSON.stringify(Project.projects));
    })
}

export function showDescription() {
    const taskOverview = Array.from(document.querySelectorAll(".task-overview"));
    taskOverview.forEach(task => task.addEventListener("click", (e) => {
        if(e.target === e.currentTarget){      
        e.target.nextElementSibling.classList.toggle("hidden")
        }
    }), true)
}

export function ShowProjecTasks(projectElement, project){
    projectElement.addEventListener("click", () => {
        console.log(project.getName());
        renderProjectTasks(project);
        showDescription();
        UpdateTask("renderProjectTasks");

    })
}

export function ShowAllTasks(){
    domElements.inbox.addEventListener("click", ()=> {
        renderTasks();
        showDescription();
        UpdateTask("renderTasks");
    })
}

export function ShowTodayTasks(){
    domElements.today.addEventListener("click", ()=> {
        console.log("today");
        renderTodayTasks();
        showDescription();
        UpdateTask("renderTodayTasks");
        
    })
}

export function CheckTask(checkbox, container, overview){
    checkbox.addEventListener("change", () => {
        if(checkbox.checked){
            console.log("Checked");
            container.classList.add("checked");
            overview.classList.remove("task-overview");
            overview.classList.add("task-overview-checked");
        }
        else{
            console.log("Unchecked");
            container.classList.remove("checked");
            overview.classList.add("task-overview");
            overview.classList.remove("task-overview-checked");
        }
    })
}

export function Test() {
    document.querySelector(".logo-title").addEventListener("click", () => {
        console.log(Project.projects)
    })
}

export function BodyEvents() {
    document.addEventListener("click", (e) => {
        popUpActivator(e, ".change-priority-container");
        popUpActivator(e, ".change-project-container");
    }, true) 
}
