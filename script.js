// Reference elements using the defined Nomenclatures
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Main function as defined in SDLC Design
function addNewTask() {
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Add to the taskList
    taskList.appendChild(li);

    // Clear input for next use
    taskInput.value = "";
}

// Event listener
addTaskBtn.addEventListener('click', addNewTask);
