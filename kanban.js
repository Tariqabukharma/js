// get references to the input field, button, and list
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// add event listener to the button to handle adding new tasks
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    span.textContent = taskText;
    deleteButton.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });
  }
});
