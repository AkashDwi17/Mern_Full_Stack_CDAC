let todo = [];

let req = prompt("Please Enter Your Request");

while (true) {
  if (req == "quit") {
    console.log("Quitting App");
    break;
  }

  if (req == "list") {
    // console.log(todo);
    console.log("_____________________________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("_____________________________");
  } else if (req == "add") {
    let entry = prompt("Please Enter What You Want To Add");
    todo.unshift(entry);
    console.log("Task Added Suscessfully");
  } else if (req == "delete") {
    let idx = prompt("Enter The Task Index To Delete");
    todo.splice(idx, 1);
    console.log("Task Deleted");
  } else {
    console.log("Wrong Request");
  }
  req = prompt("Please Enter Your Request");
}
