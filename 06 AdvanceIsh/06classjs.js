class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com")
console.log(rock.getInfo);
rock.enrollCourse("ReactJS Bootcamp")
console.log(rock.getCourseList());
console.log(rock.courseList);



