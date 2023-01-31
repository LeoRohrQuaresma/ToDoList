// Selecting the elements
let buttonAddTask = document.querySelector(".button-add-task");
let tasksContainer = document.querySelector("#tasks");
let todoInput = document.querySelector("#todo-input");

// Array for storing the tasks
const toDoList = [];

// When clicked in the button it store the value to the variable inputValue and pass as parameter to addTask
buttonAddTask.addEventListener("click", () => {
    // Get the input value
    let inputValue = todoInput.value;

    // Create a new element for the task
    let taskElement = document.createElement("p");
    taskElement.classList.add("todo-result");


    // Add the task to the toDoList array and append the task element to the tasks container
    addTask(inputValue, taskElement);

    // Clear the value of the todoInput element
    todoInput.value = "";

    // Add a delete event listener to the task element

    taskElement.addEventListener("click", () => deleteTask(inputValue, taskElement));

});

// Add the task to the toDoList array and append the task element to the tasks container
function addTask(inputValueArgument, taskElement) {
    // Add the task to the toDoList array
    toDoList.push(inputValueArgument);

    // Set the inner HTML of the task element to be the input value
    taskElement.innerHTML = inputValueArgument;

    // Append the task element to the tasks container
    tasksContainer.appendChild(taskElement);
}

function deleteTask(inputValue, taskElement) {

    tasksContainer.removeChild(taskElement);

    let index = toDoList.indexOf(inputValue);

    toDoList.splice(index, 1);
}




// Função pra pesquisar

var campoPesquisa = document.querySelector("#pesquisar-tabela")

campoPesquisa.addEventListener("input", function () {
    var todoResults = document.querySelectorAll(".todo-result");

    if (this.value.length > 0) {
        for (var i = 0; i < todoResults.length; i++) {
            var todoResult = todoResults[i];
            var todoResultTextContent = todoResult.textContent
            if (todoResultTextContent != this.value) {
                todoResult.classList.add("invisivel");
            } else {
                todoResult.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < todoResults.length; i++) {
            var todoResult = todoResults[i];
            todoResult.classList.remove("invisivel");

        }
    }
})



