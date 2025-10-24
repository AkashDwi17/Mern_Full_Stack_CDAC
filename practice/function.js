// Function in javaScript

let num = prompt("Enter The Number: ");

function mul1to10(num) {
  let ans = 1;
  for (let i = 1; i <= 10; i++) {
    ans = num * i;
    console.log(ans);
  }
}

let marks = prompt("Enter Your Marks");
function result(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("You Got A");
  } else if (marks >= 75 && marks < 90) {
    console.log("You Got B");
  } else if (marks >= 33 && marks < 75) {
    console.log("You Got C");
  } else {
    console.log("Failed !");
  }
}

result(marks);

console.log(mul1to10(num));

// Conditional Statement

function isAdult() {
  let age = 45;
  if (age >= 18) {
    console.log("You can drive car");
  } else {
    console.log("You Can't");
  }
}

isAdult();

function print1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

print1to10();

function mul(a, b) {
  return a * b;
}

console.log(mul(5, 2));

// loop

function sum() {
  let a = 5;
  let b = 10;
  console.log(a + b);
}
sum();
