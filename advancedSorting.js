var students = [{
  id: 1,
  name: "bruce",
  age: 40
}, {
  id: 2,
  name: "zoidberg",
  age: 22
}, {
  id: 3,
  name: "alex",
  age: 22
}, {
  id: 4,
  name: "alex",
  age: 30
}];
students.sort(function(a, b) {
  //return a.age - b.age;
  var nameA = a.name;
  var nameB = b.name;
  var ageA = a.age;
  var ageB = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return b.age - a.age;
});

console.log(students);