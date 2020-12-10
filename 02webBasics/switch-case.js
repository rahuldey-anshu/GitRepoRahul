var user = "testprp" ;

switch(user)
{
    case "admin" :
        console.log("Admin will get full access");
    break ;
    case "subadmin" : 
        console.log("Subadmin will get access to create and delete course");
    break ;
    case "testprep" :
        console.log("get access to Create/delete test");
    break ;
    case "user" :
        console.log("get access to consume the course");
        default :
        console.log("Trail user");
}