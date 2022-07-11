import { Task } from "./Tasks";
import { Project } from "./projects";
import * as domElements from "./domElements";
import { renderTaskPriorities, renderProjectOptions } from "./renders";
import * as events from "./eventListeners";
import { format, isEqual, parseISO } from "date-fns";

export function createProject(name){
    const project = new Project(checkProjectName(name));
    Project.projects.push(project);
}

function checkProjectName(projectName){
    Project.projects.forEach((project) => {
        if(projectName === project.getName()){
            projectName += "(new)";
        }
    })
    return projectName;
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
    const task  = new Task(title, dueDate, description, priority, project);
    addTaskToProject(task);   
}

export function populateEditForm(id){
    const currentTask = getCurrentTask(parseInt(id));
    //console.log(currentTask);
    domElements.editTaskFormTitle.value = currentTask.getTitle();
    domElements.edtiTaskFormDueDate.value = currentTask.getDueDate();
    domElements.editTaskFormDescription.value = currentTask.getDescription();
    domElements.editTaskFormPriority.value = currentTask.getPriority();
    domElements.editTaskFormProject.value = currentTask.getProject();


}

export function getCurrentTask(id) {
    let currentTask = ""
    //Возвращает array в которм находится определенная Task
    // currentTask = Project.projects.map((project) => project.getTasks().filter((task) => task.getTaskId() === id))

    // Возвращает определенную Task.
    for (let project of Project.projects) {
        currentTask = project.getTasks().filter((task) => task.getTaskId() === id);
        if(typeof currentTask[0] === "object") {
            break;
    }
    }
    return currentTask[0];
}

export function getProjectIndex(projectName) {
    const projectIndex = Project.projects.map(project => project.getName()).indexOf(projectName);
    return projectIndex;
}

export function deleteTaskFromProject(currentTask, projectIndex) {
    console.log(`delete ${currentTask.getTitle()} from ${Project.projects[projectIndex].getName()}`);
    const taskIndex = Project.projects[projectIndex].getTasks().map(task => task.getTaskId()).indexOf(currentTask.getTaskId());
    Project.projects[projectIndex].deleteTask(taskIndex);


}

export function moveTask(task, fromProject, toProject){
    const fromProjectIndex = getProjectIndex(fromProject)//Project.projects.map(project => project.getName()).indexOf(fromProject);
    const toProjectIndex = getProjectIndex(toProject)//.projects.map(project => project.getName()).indexOf(toProject);
    Project.projects[toProjectIndex].addTask(task);
    deleteTaskFromProject(task, fromProjectIndex);

}

export function updateValues(){
   const task = getCurrentTask(parseInt(domElements.editTaskForm.getAttribute("id")));
   task.setTitle(domElements.editTaskFormTitle.value);
   task.setDueDate(domElements.edtiTaskFormDueDate.value);
   task.setDescription(domElements.editTaskFormDescription.value);
   task.setPriority(domElements.editTaskFormPriority.value);
   if (task.getProject() !== domElements.editTaskFormProject.value) {
        const fromProject = task.getProject();
        const toProject = domElements.editTaskFormProject.value;
        task.setProject(domElements.editTaskFormProject.value);
        moveTask(task, fromProject, toProject);
   }
   changeDescriptionField(parseInt(task.getTaskId()), task.getTitle(), "title-id");
   document.querySelector(".task-name").innerHTML = task.getTitle();
   changeDescriptionField(parseInt(task.getTaskId()), task.getDueDate(), "due-date-id");
   changeDescriptionField(parseInt(task.getTaskId()), task.getDescription(), "description-id");
   changeDescriptionField(parseInt(task.getTaskId()), task.getPriority(), "priority-id");   
   
}

export function changeDescriptionField(taskId, fieldValue, selector){
    const descriptionField = document.querySelector(`span[${selector}="${taskId}"]`);
    descriptionField.innerHTML = fieldValue;
}

export function popUpActivator(e, activator){
    const isCLosest = e.target.closest(activator);
        const changePriorityForms = Array.from(document.querySelectorAll(activator));
        if(!isCLosest){
            changePriorityForms.forEach((form) => {
                form.classList.add("hidden");
            })
        }
}

export function getTodayTasks(){
    let todayTasks = [];
    const currentDate = format(new Date(), "yyyy-MM-dd");
    Project.projects.forEach((project) => {
        for(let task of project.getTasks()){
            if(isEqual(parseISO(currentDate), parseISO(task.getDueDate()))){
                todayTasks.push(task);
            }
        }
    })
    return todayTasks;
}

export function createTaskElements(tasks, renderFunction) {
    for (let task of tasks) {
        // console.log(task.keys);
        const taskContainer = domElements.createElement("div", "task-container", domElements.mainContent);
        taskContainer.setAttribute("task-container-id", task.getTaskId());
        const taskOverview = domElements.createElement("div", "task-overview", taskContainer);
        const taskDescription = domElements.createElement("div", "task-description", taskContainer);
        taskDescription.classList.add("hidden");
        const checkTask = domElements.createElement("input", "check-task", taskOverview);
        checkTask.type = "checkbox";
        checkTask.name = "check-task";
        checkTask.id = "check-task";
        checkTask.setAttribute("checkbox-task-id", task.getTaskId());
        const taskName = domElements.createElement("div", "task-name", taskOverview);
        taskName.innerHTML = task.getTitle();
        const taskButtons = domElements.createElement("div", "task-buttons", taskOverview);
        events.CheckTask(checkTask,taskContainer,taskOverview);

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
        events.ProjectSelect(selectProject, renderFunction);

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
                    events.RemoveTask(taskButton, renderFunction);
                    break;
                default: break;
            }
        }

        for (let field of Task.descriptionFields) {
            const spanContainer = domElements.createElementWithoutClass("div", taskDescription);
            const fieldName = domElements.createElementWithoutClass("span",spanContainer);
            fieldName.innerHTML = field;
            const fieldValue = domElements.createElementWithoutClass("span", spanContainer);
            switch(field) {
                case Task.descriptionFields[0]:
                    fieldValue.innerHTML = task.getTitle();
                    fieldValue.setAttribute("title-id", task.getTaskId())
                    break;
                case Task.descriptionFields[1]:
                    fieldValue.innerHTML = task.getDueDate();
                    fieldValue.setAttribute("due-date-id", task.getTaskId())
                    break;
                case Task.descriptionFields[2]:
                    fieldValue.innerHTML = task.getDescription();
                    fieldValue.setAttribute("description-id", task.getTaskId())
                    break;
                case Task.descriptionFields[3]:
                    fieldValue.innerHTML = task.getPriority();
                    fieldValue.setAttribute("priority-id", task.getTaskId())
                    break;
                default: break;
            }
            
        }

    }
}
