var User = {
  name: "",
  getUsername: function () {
    console.log(`User name is: ${this.name}`);
  },
};

var jeffrey = Object.create(User);
console.log(jeffrey);
jeffrey.name = "jeffrey";
jeffrey.getUsername();

var sam = Object.create(User, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
});

sam.getUsername();
