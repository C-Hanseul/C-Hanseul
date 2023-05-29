const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);

    todoInput.value = "";
});

function createTodoItem(text) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            label.classList.add("completed");
        } 
        else {
            label.classList.remove("completed");
        }
    });

    label.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
}
