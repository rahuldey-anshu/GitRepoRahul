//    function getUserRole(name , role) {
    //OR
var getUserRole = function (name , role) {
    switch (role) {
        case "admin" :
            return `${name} is an ADMIN with all access.` ;
            break ;

        case "subAdmin" :
               return `${name} with access to create/delete courses.` ;
               break ;
               
        case "testPrep" :
            return `${name} with access to create/delete tests .` ;
            break ;      
            
        case "user" :
            return `${name} consume all content .` ;
            break ;

            default:
                return `${name} is a trail user .` ;
                break;
    }
}

console.log(getUserRole("Hitesh" , "admin"));
var user1 = getUserRole("RAHUL" , "user");
console.log(user1);
console.log(getUserRole("Madhav" , "subAdmin"));