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

function groupGender(students, gender) {
  return students.reduce(function(acc, obj) {
    var key = obj[gender];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupStudents = groupGender(students, "gender");

ale = groupStudents.male.length;

emale = groupStudents.female.length;

console.log(groupStudents);
console.log("Numbers of male students is: " + ale);
console.log("Numbers of female students is: " + emale);
