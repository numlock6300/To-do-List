export class Project {
    constructor(name){
        this.name = name;
        this.container = [];
    }

    getName() {
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.container.push(task);
    }
}