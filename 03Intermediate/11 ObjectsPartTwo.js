var user = {
  firstName: "Jeffrey",
  lastName: "Nettey",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  info: function () {
    console.table(this);
  },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Node JS course");
console.log(user.getCourseCount());
user.info();
