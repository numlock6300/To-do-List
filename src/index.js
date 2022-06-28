import "./styles/style.css";
import "./styles/taskForm.css";
import "./styles/tasks.css";
import "./img/logo.jpg";
import "./img/edit.png";
import "./img/projects.png";
import "./img/today.png";
import "./img/inbox.png";
import "./img/home.png";
import "./img/menu.png";
import "./img/priority.png";
import "./img/move.png";
import "./img/delete.png";

import { Task } from "./Tasks";
import { Project } from "./projects";
import { format } from "date-fns";


const task1 = new Task("Task","some task", " 12.12.2022", "Low", "Default");
console.log(task1.getTitle());

const project1 = new Project("New Project");
console.log(project1.getName());

console.log(format(new Date(2014, 1,11), "yyyy-MM-dd"));

const addTaskButton = document.querySelector(".add-task-button");
const createTaskform = document.querySelector(".create-task");
addTaskButton.addEventListener("click", () => {
    createTaskform.classList.toggle("hidden");
})

const addProjectButton = document.querySelector(".project-button");
const createProjectForm = document.querySelector(".add-project-form");
addProjectButton.addEventListener("click", () => {
    createProjectForm.classList.toggle("hidden");
})