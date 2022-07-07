export class Project {

    static lastId = 0;

    constructor(name){
        this.id =  Project.lastId++;
        this.name = name;
        this.container = [];
    }

    static projects = [];

    getName() {
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.container.push(task);
    }

    deleteTask(taskIndex) {
        this.container.splice(taskIndex, 1);
    }

    getTasks(){
        return this.container;
    }

    getProjectId(){
        return this.id;
    }
}