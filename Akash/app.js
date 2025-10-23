// Arrays

// slice
let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'voilate'];
// colors = colors.slice(2);
// colors = colors.slice(2,5);
console.log (colors);


colors = colors.slice(-5);
console.log (colors);

// concatination
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "voilate"];

let main = primary.concat(secondary);
console.log(main);

console.log (main.reverse());

let students = ["aman", "shradha", "rajat"];
console.log(students);

let reversed = students.toReversed();
console.log(reversed);

// join
let ans = students.join(" % ");
console.log(ans);

let marks = [99, 98, "ak", 3.14];
console.log(marks);

// Arrays

let info = ["Akash", 20, 6.2];
console.log(info);

let empArr = [];
console.log(empArr);

console.log(info.length);

console.log(info[0][0]);

console.log(info[0].length);

let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
console.log(fruits);

fruits[1] = "orange";

console.log(fruits);

let car = ["audi", "bmw", "maruti", "xuv"];

console.log(car);

// shift  unshift push pop

// let newCar = car.push ("farari");
// console.log (newCar);

// Note: push("farari") adds "farari" to the end of car.
// But push() returns the new length of the array — not the updated arra

car.push("farari");
console.log(car);

car.pop();
console.log(car);

car.unshift("lamborgini");
console.log(car);

car.shift();
console.log(car);





