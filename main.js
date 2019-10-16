let todos = ["Buy milk"];

let input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    listTodos();
  } else if( input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, i) {
    console.log(`${i} : ${todo}`)
  })
  console.log("**********");
}

function addTodo() {
  let newTodo = prompt("What would you like to add?");
    todos.push(newTodo)
    console.log("Added Todo")
}

function deleteTodo() {
  let index = prompt("Which item would you like to delete");
    todos.splice(index, 1)
    console.log("Deleted Todo")
}