//Object Literals
///////////////////Object of object

const classInfo = {
  aman: {
    name: "Aman",
    grade: "A",
    city: "Delhi",
  },

  shradha: {
    grade: "A+",
    city: "Pune",
  },

  rajat: {
    grade: "A+",
    city: "Bareli",
  },
};

// console.log(classInfo);
// console.log(classInfo.aman);
console.log(classInfo[0]);

let delhi = {
  latitude: "28.704 N",
  longitude: "77.1025 S",
};

const student = {
  name: "Akash",
  age: 23,
  marks: 94.4,
  city: "Delhi",
};

const items = {
  price: 100,
  discount: 50,
  color: ["red", "green"],
};

console.log(items);
console.log(student);
console.log(delhi);

const post = {
  username: "@Akash Dwivedi",
  content: "This is my first post",
  like: 50,
  repost: 5,
  tage: ["@apnacollege", "@delta"],
};

console.log(post);

console.log(post["username"]);

console.log(post.username);
