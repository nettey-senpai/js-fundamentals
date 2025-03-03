const user = ["jeffrey", 3, "admin"];
// var role = user[2]
// var name = user[0]

// var [name, courseCount, role] = user;

// console.log(role);

const myUser = {
  name: "jeffrey",
  courseCount: 3,
  role: "admin",
};

console.log(myUser.courseCount);

const { name, myCourseCount, role } = myUser;
console.log(role)