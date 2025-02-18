// Show user a signout button if he is authenticated,
// otherwise show him a login/signup

var authenticated = true;

// beginner solution
// if (authenticated){
//     console.log("Show signout button");
// } else {
//     console.log("Show login button");
// }

// refactored solution
authenticated ? console.log("SignOut Button") : console.log("Login Button");
