var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access` 
            
        case "subadmin":
            return `${name} is a sub-admin with access to create and delete courses` 

        case "testprep":
            return `${name} is a testprep with access to create and delete tests` 
            
        case "user":
            return `${name} is a user to consume content` 

    
        default:
            return `${name} is a trial user`
            
    }
}

console.log(getUserRole("Jeffrey", "admin"));

var getRole = getUserRole("Jeff", "user")

console.log(getRole);
