const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = [];

function createTask(event: SubmitEvent) {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false
        };
        // add task to list
        addTask(task);
        // render tasks
        renderTask(task)
        // update local storage
        console.log(taskDescription);

        formInput.value = "";
        return;
    }
    alert("please enter a task description");
}

taskForm?.addEventListener("submit", createTask);


function addTask(task: Task): void {
    tasks.push(task);
    console.log(tasks);

}

function renderTask(task: Task): void {
    const taskElement = document.createElement("li")
    taskElement.textContent = task.description
    taskListElement?.appendChild(taskElement)
}
