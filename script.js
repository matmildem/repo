class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.tasks = [];
    }

    addTask(description){
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTask();
    }

    removeTask(index){
        this.tasks.splice(index, 1);
        this.displayTask();
    }

    toggleTaskCompletion(index){
        this.tasks[index].toggleComplete();
        this.displayTask();
    }

    displayTask(){
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';
            const taskDescription = document.createElement('span')
            taskDescription.textContent = taskDescription;
            taskDescription.addEventListener('click', () => this.removeTask (index))

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
            
        })
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    const TaskManager = new TaskManager();
    const addTAskBtn = 
})