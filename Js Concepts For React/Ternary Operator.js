let returnAge = true;

function getAgeInfo(age) {
  return `This person is ${age} years old`;
}

function getCity() {
  return "This person is from USA";
}

// normal if else(kinda old way)
// if (returnAge) {
//     console.log(getAgeInfo(20));
// } else {
//     console.log(getCity());
// }

// ternary is a shorter way to write it
// condition ? statementforTrue : statementforFalse
returnAge ? console.log(getAgeInfo(20)) : console.log(getCity());

