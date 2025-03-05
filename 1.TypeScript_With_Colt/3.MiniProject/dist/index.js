"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput"); // Here "as HTMLInputElement" is a Type Assertions, means I manually said that what is the exact type of the input.
const form = document.querySelector("form");
const list = document.getElementById("todolist");
form?.addEventListener("submit", handleSubmit);
const todos = readAllTodos();
/**
 * When page will open it will show all todos on the page
 *
 * @One_Line_Solve
 * todos.forEach(createTodo);
 *
 */
function showTodos(allTodos) {
    for (let i = 0; i < allTodos.length; i++) {
        createTodo(allTodos[i]);
    }
}
showTodos(todos);
//|| This function will find all todos from the localstorage. ||
function readAllTodos() {
    let todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
}
//|| This function will save todos in the localstorage. ||
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
//|| This function will handle the form and call createTodo function and save todo on the localeStorage ||
function handleSubmit(e) {
    e.preventDefault(); //Prevent, the default form behavior
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    // Save todos into the localestorage
    saveTodos();
    // Clear the input box
    input.value = "";
}
//|| This function will create new todo & show it on the web page and it also has delete todo functionality. ||
function createTodo(todo) {
    // Create a new li element
    const newLI = document.createElement("li");
    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    // Create a delete button
    const delBTN = document.createElement("button");
    delBTN.textContent = "Delete";
    //|| When user will click checkbox to checked then todo completed property will be true. ||
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos(); //save to the localStorage
    });
    //|| Delete Element ||
    delBTN.addEventListener("click", () => {
        const elementIndex = todos.indexOf(todo);
        todos.splice(elementIndex, 1);
        saveTodos();
        list?.removeChild(newLI); //Instant remove from the page
    });
    // Add the input value, checkbox and delete button into the newly created li
    newLI.prepend(delBTN);
    newLI.append(` ${todo.text}`);
    newLI.append(checkbox);
    // Add newly created li to the ul
    list?.appendChild(newLI);
}
