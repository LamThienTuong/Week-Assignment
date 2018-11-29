const students = [
  {
    name: "Nam",
    age: 24,
    gender: "male"
  },
  {
    name: "Mai",
    age: 22,
    gender: "female"
  },
  {
    name: "Trang",
    age: 23,
    gender: "female"
  },
  {
    name: "An",
    age: 20,
    gender: "male"
  },
  {
    name: "Thien",
    age: 27,
    gender: "male"
  }
];

let newArray = students.map(obj => {
  let rObj = {};
  rObj = obj.name;
  return rObj;
});

console.log(newArray);
