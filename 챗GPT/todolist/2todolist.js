const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value;
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = "";
    }
});
