const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // just array to be pushed newToDO
// if it is just empty array like [], then 새로고침하고 새로운 입력값 있을때마다 저장된 정보 사라져.
// 그래서 empty로 fix 하지않고 업데이트 하게끔 let으로 바꾸기.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify()는 js object, array -> string으로 바꿔준다.
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // X를 클릭한 li.id와 다른 toDo들은 남겨두고 싶다.
  // toDo.id: number  li.id: string. (console.log(typeof li.id)로 확인가능) 그래서 일단 숫자로 만들어야돼.
  saveToDos(); // 이거 실행하는 거 잊지말기.
}

function paintToDo(newToDO) {
  const li = document.createElement("li");
  li.id = newToDO.id;
  const span = document.createElement("span");
  span.innerText = newToDO.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // to stop default behavior(submit, refresh)
  const newToDO = toDoInput.value; // 입력값 저장하기
  toDoInput.value = ""; // enter치면 입력값 사라지게 만들기
  const newTodoObj = {
    // 어떤게 지워졌는지 알고싶기때문에 id 부여
    text: newToDO,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos array에 newToDo 넣기 (-> newTodoObj로 변경)
  paintToDo(newTodoObj); // 여기에서 paintToDo function 실행 (-> newTodoObj로 변경)
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string coming from local storage change to js object array
  toDos = parsedToDos; // 새로고침하고 새로운 입력값 있을때마다 저장된 정보 사라지지않고 저장된 것으로 업데이트됨.
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => console.log("this is turn of", item)); // 각각의 item에 대해 arrow function을 실행할 수 있게한다.
}
