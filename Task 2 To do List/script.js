const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") return;
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    li.querySelector(".delete").addEventListener("click", () => {
        taskList.removeChild(li);
    });
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
