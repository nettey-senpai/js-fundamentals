// Allow user to  access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = false;

// shit version
if (email) {
    console.log("Login successful");
}

if (facebook) {
    console.log("Login successful");
}

if (google) {
    console.log("Login successful");
}

// refactored version
if (email || facebook || google ) {
    console.log("Login successful");
}