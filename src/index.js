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
import * as events from "./eventListeners";
import { createProject } from "./functions";
import { renderProject, renderProjectOptions, renderTaskPriorities } from "./renders";
import * as domElements from "./domElements";


// const task1 = new Task("Task","some task", " 12.12.2022", "Low", "Default");
// console.log(task1.getTitle());

// const project1 = new Project("New Project");
// console.log(project1.getName());

// console.log(format(new Date(2014, 1,11), "yyyy-MM-dd"));
createProject("My project");
// createProject("My project2");
// createProject("My project3");
 events.OpenAddTaskForm();
 events.CloseAddTaskForm();
 events.OpenAddProjectForm();
 events.CloseAddProjectForm();
 events.AddProject();
 events.AddTask();
 events.showDescription();
 events.CloseEditTaskForm();
 events.UpdateTask();
 renderProject();
 renderProjectOptions(domElements.projectSelectList);
 renderProjectOptions(domElements.editTaskFormProject);
 renderTaskPriorities(domElements.taskFormPriority);
 renderTaskPriorities(domElements.editTaskFormPriority);

 events.Test();
 










