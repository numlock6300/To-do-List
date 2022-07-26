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

import * as events from "./eventListeners";
import { createProject, createTask } from "./functions";
import {
	renderProject,
	renderProjectOptions,
	renderTaskPriorities,
	renderTasks,
} from "./renders";
import * as domElements from "./domElements";
import { Project } from "./projects";

//createProject("My project");

let test = localStorage.getItem("data");

function getLocalData() {
	if (test) {
		JSON.parse(test).forEach((project) => {
			createProject(project.name);
			for (let i = 0; i < project.container.length; i++) {
				console.log("Project name " + project.container[i].project);
				createTask(
					project.container[i].title,
					project.container[i].dueDate,
					project.container[i].description,
					project.container[i].priority,
					project.container[i].project
				);
			}
		});
	}
}

getLocalData();

events.BodyEvents();
events.OpenAddTaskForm();
events.CloseAddTaskForm();
events.OpenAddProjectForm();
events.CloseAddProjectForm();
events.AddProject();
events.AddTask();
events.CloseEditTaskForm();
events.UpdateTask("renderTasks");
events.ShowAllTasks();
events.ShowTodayTasks();
renderProject();
renderProjectOptions(domElements.projectSelectList);
renderProjectOptions(domElements.editTaskFormProject);
renderTaskPriorities(domElements.taskFormPriority);
renderTaskPriorities(domElements.editTaskFormPriority);
renderTasks();
events.showDescription();

events.Test();
//console.log(JSON.parse(test)[0].container[0].title);
//console.log(JSON.parse(test));
//console.log(Project.projects);
