
// Project elements
export const createProjectForm = document.querySelector(".add-project-form");
export const projectNameField = document.querySelector("#project-name");

// Task Form elements
export const okTaskButton = document.querySelector(".task-ok-button");
export const closeTaskButton = document.querySelector(".task-cancel-button");
export const taskFormTitle = document.querySelector("#title");
export const taskFormDueDate = document.querySelector("#due-date");
export const taskFormDescription = document.querySelector("#description");
export const taskFormPriority = document.querySelector("#priority");
export const projectSelectList = document.querySelector("#select-project");

//Task elements
export const mainContent = document.querySelector(".main-content");

export function createElement(elemType, elemClass, parentName){
    const element = document.createElement(elemType);
    element.classList.add(elemClass);
    parentName.appendChild(element);
    return element;
}

export function createElementWithoutClass(elemType, parentName){
    const element = document.createElement(elemType);
    parentName.appendChild(element);
    return element;
}
