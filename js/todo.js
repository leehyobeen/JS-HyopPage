const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = document.querySelector(".todo-form input");

let toDos= [];

 
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerText = newTodo.text;
    btn.innerText="☑";
    

    btn.addEventListener("click", deleteTodo);
    li.append(span);
    li.append(btn);
    toDoList.appendChild(li);
}

function handle(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}


toDoForm.addEventListener("submit", handle);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

