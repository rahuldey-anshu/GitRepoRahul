//OLD SCHOOL PROCEDURE creating class
function Trainer(name) {
    this.name = name;
    
}

  Trainer.prototype.setName = function(name){
      this.name = name ;
      console.log(this.name);
  }
  Trainer.prototype.setLastName = function(lastname) {
      this.lastname = lastname ;
  console.log(this.lastname);
  } 

  var myTrainer = new Trainer();
  myTrainer.setName('Anshu');
  myTrainer.setLastName('Dey');
  //console.log(myTr);

  //ES6 PROCEDURE
 'use strict';
  class Student {

    name = '' ;
    setName(name) {
        this.name = name ;
        console.log(name);
    }

    setLastName(name) {
    this.name = name ;
    console.log(name);
    }
    age(age)
    {
        this.age = age ;
        console.log(age);
    }
     

  }

  const  myStudent = new Student();
myStudent.setName('RAHUL');
myStudent.setLastName('Dey');
myStudent.age(25);

//anyonymous function

var user = function(){
  console.log("this is getUser anonymous function");
}

function displayUser(funcName) {
  funcName();
}
displayUser(user);
//anonymous function

let add = function(a,b) {
    console.log(a+b);
};

function disp(function1){
function1(10,22) ;
};
//call the function
disp(add);

let subtract = (a,b) => console.log(a-b) ;

function disp1(function2){
    function2(50,45) ;
};

disp1(subtract);

var getDepartments = (id) => console.log('inside the arrow function'+ id);

getDepartments(20);

//prototype



//this keyword

class College{
  collegeName = '' ;
  courseName = '' ;
    getClgName(){
        this.collegeName = 'MAKAUT' ;
        console.log(this.collegeName);
    }

    setClgName() {
        var c2 = this.collegeName ;
        c2 = 'Welcome to' + c2 ;
        this.admissionDone();
        console.log(this.c2);
        console.log(this.getClgName);


    }

    admissionDone() {
        this.courseName  = 'B.TECH' ;  
        console.log(this.courseName);
    }
}

var c = new College();
c.setClgName();




