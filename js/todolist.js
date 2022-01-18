const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

// const toDos = [];
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    //path를통해 위치를 확인할 수 있다.
    // console.log("..");
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    // console.log("i will paint ", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value; 
    // console.log(toDoInput.value);
    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value);
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("hello", item); //아래와 같음
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(saveToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(paredTodo);
    toDos = parsedToDos;
    parsedToDos.forEach(
        // (item) => console.log("this is the turn of ", item) //위와같음
        paintToDo
    );
}

function sexyFilter(){

}