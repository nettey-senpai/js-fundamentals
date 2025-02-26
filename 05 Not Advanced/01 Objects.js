// Recommended to use uppercase letter first when creating prototypes
var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

// new keyword creates a unique instance of the object and prevents the this from pointing towards the window object because it is no longer a regular funnction call 
var jeffrey = new User("jeffrey", 2);
console.log(jeffrey);

var sam = new User("sam", 1);
console.log(sam);
