const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function toggleCheckBoxValue(toDo,id){
    if (toDo.id === id) {
        toDo.checkbox = toDo.checkbox? false : true;
    }    
}

function handleToDoCheckbox(event){
    const li = event.target.parentElement;
    li.classList.toggle("line-through");
    toDos.forEach(toDo => toggleCheckBoxValue(toDo, parseInt(li.id)));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (newTodo.checkbox === true){
        checkbox.setAttribute("checked",true);
        li.classList.add("line-through");
    }else{
        li.classList.remove("line-through")
    }
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    checkbox.addEventListener("change",handleToDoCheckbox); 

    const button = document.createElement("button");    
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);     
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        checkbox:false,
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
