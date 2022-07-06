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
    //console.log(task.getTaskId());
    //console.log(getCurrentTask(0));
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
    //console.log(currentTask);
    return currentTask[0];
}

export function getProjectIndex(projectName) {
    const projectIndex = Project.projects.map(project => project.getName()).indexOf(projectName);
    return projectIndex;
}

export function deleteTaskFromProject(currentTask, projectIndex) {
    console.log(`delete ${currentTask.getTitle()} from ${Project.projects[projectIndex].getName()}`);
    const taskIndex = Project.projects[projectIndex].getTasks().map(task => task.getTaskId()).indexOf(currentTask.getTaskId());
    //console.log(taskIndex);
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
   
   //console.log(task);
   
}

export function changeDescriptionField(taskId, priority){
    const descriptionField = document.querySelector(`span[priority-id="${taskId}"]`);
    descriptionField.innerHTML = priority;
}

export function popUpActivator(e, activator){
    const isCLosest = e.target.closest(activator);
        const changePriorityForms = Array.from(document.querySelectorAll(activator));
        if(!isCLosest){
            //console.log("hid")
            changePriorityForms.forEach((form) => {
                form.classList.add("hidden");
            })
        }
}

// export function addProjectOption(name) {
//     const projectOption = document.createElement("option");
//     projectOption.value = name.toLowerCase();
//     projectOption.innerHTML = name;
//     domElements.projectSelectList.appendChild(projectOption);
// }