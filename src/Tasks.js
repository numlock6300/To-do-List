export class Task {
    constructor(title, dueDate, description, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    static descriptions = ["Low", "Medium", "High"];
    static buttonImages = new Map([
        ["edit", "./img/edit.png"],
        ["priority", "./img/priority.png"],
        ["move", "./img/move.png"],
        ["delete", "./img/delete.png"],
    ])
    static descriptionFields = ["Title: ", "Due Date: ", "Description: ", "Priority: "]

    getTitle(){
        return this.title;
    }
    
    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getProject() {
        return this.project;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setProject(project){
        this.project = project;
    }
    
}