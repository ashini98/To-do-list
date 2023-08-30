const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <div class="task-text">${taskText}</div>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
  }
});
