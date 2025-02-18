// For all regular function calls, this points to window object

console.log(this);

var user = {
  firstName: "Jeffrey",
  courseCount: 4,
  getcourseCount: function () {
    console.log("LINE 9", this);
    function sayHello(){
        console.log("Hello");
        console.log("LINE 12", this);
        
    }
    sayHello();
  },
};

user.getcourseCount();