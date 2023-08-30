const addNewButton = document.getElementById("addNewButton");
const todoListButton = document.getElementById("todoListButton");
const boardButton = document.getElementById("boardButton");
const contentArea = document.querySelector(".content");

const taskForm = document.getElementById("taskForm");
const taskTitleInput = document.getElementById("taskTitle");
const taskContentInput = document.getElementById("taskContent");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
const taskList = document.getElementById("taskList");

addNewButton.addEventListener("click", () => {
  contentArea.innerHTML = "<h2>Add New View</h2>";
});

todoListButton.addEventListener("click", () => {
  contentArea.innerHTML = "<h2>To Do List View</h2>";
});

boardButton.addEventListener("click", () => {
  contentArea.innerHTML = "<h2>Board View</h2>";
});


taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskTitleInput.value.trim();
  const taskContent = taskContentInput.value.trim();
  if (taskTitle !== "" && taskContent !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <div class="task-text">
        <h3>${taskTitle}</h3>
        <p>${taskContent}</p>
      </div>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskTitleInput.value = "";
    taskContentInput.value = "";
  }
});

cancelButton.addEventListener("click", () => {
  taskTitleInput.value = "";
  taskContentInput.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
  }
});
