console.log("Hello world");

console.log("Apna College");

let a = 10;
let b = 5;
console.log("Sum is " + a + b);

// template litterals

// they are used to add embeded expression in a string

console.log(`Your pay ${a + b} rupees`);
 firstName = "Akash";
 lastName = "Dwivedi";

console.log(`Your Full Name is ${firstName + lastName}`);

let sum = a + b;
let giver = "Ramesh";
let buyer = "Kartik";

// console.log(`${"Mr. tyagi" + ramesh + " gives" + sum + " to" + buyer}`);

console.log(`${giver + sum + buyer}`);

console.log(`${"Mr. tyagi " + giver + " gives " + sum + " to " + buyer}`);

console.log("Some Code before if: ");
let age = 23;
if (age > 18) {
  console.log("You Can Drive");
} else {
  console.log("Can't Drive");
}

console.log(5 * age);

firstName = "Shradha";
if (firstName == "Shradha") {
  console.log(`Welcome ${firstName}`);
}





let color = prompt("Enter the Signal Color(red green yellow)");

if (color == "red") {
  console.log(`Signal is ${color} Stop`);
} else if (color == "yellow") {
  console.log(`Signal is ${color} Slow Down`);
} else if (color == "green") {
  console.log(`Signal is ${color} Go`);
} else {
  console.log("Enter correct signal");
}

let day = 1;
switch (day) {
    case 1: (console.log ("Monday")); break;
    case 2: (console.log ("Tuesday")); break;
    
}

let day = Number(prompt("Enter week number"));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
}


let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");

let fullName = `Your Full Name is ${firstName} ${lastName}`;
alert(fullName);

// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");

// let fullName = `Your Full Name is ${firstName} ${lastName}`;
// alert(fullName);

let str = "appnacollege is best institute";
console.log(str);

str = str.replace("best", "good"); // ← store the replaced string
console.log(str);

console.log(str.indexOf("ap"));
console.log(str.indexOf("ll"));
console.log(str.indexOf("naco"));

console.log(str.indexOf("nacp"));
