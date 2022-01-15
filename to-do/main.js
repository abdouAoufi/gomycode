const todoInput = document.getElementById("todo-input");
const todoBtn = document.querySelector("#todo-btn");
const todoContainer = document.querySelector(".todo-container");

todoBtn.addEventListener("click", function() {
    process();
});

todoInput.addEventListener("keypress", function(btn) {
    if (btn.keyCode === 13) {
        process();
    }
});

function process() {
    const parent = document.createElement("div"); // create div
    const todo = document.createElement("span"); // create paragraph
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "check";
    removeBtn.style.marginLeft = "20px";

    let text = todoInput.value;
    text = text.replace(/\s+/g, '');

    if (text.length > 0) {
        removeBtn.addEventListener("click", function() {
            const mySpan = removeBtn.parentNode.children[0]; // <div> .... </di> .... => [. , . , . ]
            mySpan.style.textDecoration = "line-through";
        });
        todo.innerText = todoInput.value; // give text to paragraph
        parent.append(todo);
        parent.append(removeBtn);
        todoContainer.append(parent);
        todoInput.value = "";
    } else {
        alert("Please enter some text");
    }
}