// Function Exercise

function sumNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNum(5));

let str = ["hi", "hello", "by", "!"];

let concatination = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
};

console.log(concatination(str));

function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

multipleGreet(greet, 10);
