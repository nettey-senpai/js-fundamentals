// import User from "./06classjs";

const User = require("./06classjs");

const jeffrey = new User("jeffrey", "jeffrey@lco.dev");

console.log(jeffrey.getInfo());
jeffrey.enrollCourse("React Crash Course");
jeffrey.enrollCourse("NextJS Crash Course");

console.log(jeffrey.getCourseList());

let courses = jeffrey.getCourseList();

courses.forEach((c) => console.log(c));
