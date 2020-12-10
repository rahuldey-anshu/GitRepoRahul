const student ={    // student is an object
    name : 'john' ,
    age : 23 ,
    isActive : true 
}
console.log( 'type of "student" =' +typeof student);   //o/p -> object

//convert this object into a string using JSON.stringify method to be stored in local Storage

const studentObjectToString = JSON.stringify(student) ;
console.log('type of "studentObjectToString" =' +typeof studentObjectToString); //o/p-> string

localStorage.setItem('student' ,studentObjectToString ); // it stored into localStorage as a string

//now again convert this string into JSON(Object) using JSON.parse method

const toJSONStudent = JSON.parse(studentObjectToString);

console.log(typeof studentObjectToString);  // o/p is -string
console.log(typeof toJSONStudent);    // o/p is -Object

console.log(toJSONStudent.age); // i can access all the properties of the object

