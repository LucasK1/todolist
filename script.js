const ul = document.getElementById("to-do-list");

function addToDo(event) {
  event.preventDefault();

  const toDoText = document.getElementById("to-do-input").value;
  const li = document.createElement("li");
  const button = document.createElement("button");
  const buttonDone = document.createElement("button");

  buttonDone.innerText = "Done";
  buttonDone.classList.add("button-done")
  buttonDone.addEventListener("click", doneToDo);

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  
  li.innerHTML = toDoText;
  
  ul.appendChild(li);
  li.appendChild(buttonDone);
  li.appendChild(button);


  document.getElementById("to-do-input").value = "";
}

function deleteToDo(event) {
  event.preventDefault();
  ul.removeChild(event.target.parentNode);
}

function doneToDo(event) {
  event.preventDefault();
  const el = event.target.parentNode;
  el.classList.toggle("done");
}

const submitButton = document.querySelector("#to-do-submit");
submitButton.addEventListener("click", addToDo);