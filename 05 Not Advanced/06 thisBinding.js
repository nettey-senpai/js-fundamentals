const jeffrey = {
  firstName: "Jeffrey",
  lastName: "Nettey",
  role: "Admin",
  courseCount: 5,
  getInfo: function () {
    console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            He is studying ${this.courseCount} courses
            `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// jeffrey.getInfo();
// dj.getInfo();

// var djInfo = jeffrey.getInfo.bind(dj); //bind only gives you a referrence back so you have to call it
// djInfo()

jeffrey.getInfo.call(dj);
