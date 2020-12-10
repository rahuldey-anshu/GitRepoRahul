// function name(a , b) {
// return a*b;

// }
// name(1,2)

// class Name {

// }


//alert ("Hello external javascript ,How are you?")
function Batch(){
    alert("all are attending javascript classes");
}

// alert();
// confirm();
// prompt();


// document.write();
// document.innerHTML();    // property
// document.innerText();      // property
// console.log();

//alert("Hello alret how are u ?");          //  only one option is given OK

// confirm('please confirm do you like my class ?');  //2 options are given OK or CANCEL

//prompt("enter your age");   //get user information before page loading ....

//document.write('<h1 style="color:red"> 'Hello fullstack student please learn javascript & nodejs') //
// var text = "Welcome to my class";    
// document.getElementById("template").innerHTML = text ;     /*"<h1> ok good bye</h1>"*/

// var out = prompt();

// document.getElementById("template").innerHTML= text   +   out ;


//var username = "Rahul" ; // 
// var company = "Jspider";

// var designation = 'developer';

// console.log( "my name is "+ username  + "company name " + company + " Designation" +  designation);
// console.log(typrof(company));

// var name = "Rahul";
// var age = 20;
// var company = "tcs" ; 
// document.write (<h1> my name is ${name} </h1>
// <p> my age is ${age}</p> 
// <p> i work for  ${company}</p>
// );

//String
// var str1 = "user1" ; //string
// var str2 = 'user2' ;    //string
// var str3 = `user3` ;     //string
// // primitive ways of declare string

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);


// var str4 = new String (" This is an object with string value") ;
// var primitiveType = str4.valueOf();  //type conversion
// //console.log(str4);    //

// console.log(typeof str4);   // object 

// var PrimitiveData = str4.valueOf(); // conver into primitive
// console.log(typeof PrimitiveData);




// html input element



// output methods in javascript
//version of javascript
// data types  and variables


//Number
//number type
// var count = 10;    // Number
// var price = 10.7;  // Number

// var NumberWithObject = new Number(2);
// console.log(count);
// console.log(price);

// console.log(typeof count);
// console.log(typeof price);

// console.log(NumberWithObject);    //object

// var PrimitiveWithNumber = NumberWithObject.valueOf(); // type conversion

// console.log(typeof PrimitiveWithNumber); // number

// var username ;

// if(username ===  undefined)
// {
//     alert("this is undefined value") ;
// }
// else{
//     document.write(`welcometo our page <strong>${username} </strong> `);
// }

// var jspiderroom= null;
// var qspiderroom ;

// console.log(jspiderroom);
// console.log(qspiderroom);
// console.log(typeof jspiderroom);


// var username= "Rahul";
// //username = undefined ;
// username = undefined ;
// console.log(username);


// var pancard =  12345678 ;// it is const
// var voterid = 45587596;  //
// console.log(pancard);
// 14.04.2020
//using set we can delete duplicate element
/*
let data = ["java" , "python" ,  "nodejs" , "nodejs" , "nodejs"];


let setData = new Set (data);  //Array like object
console.log(data);
console.log(setData);
// The Array.from() method creates a new ,shallow copied
// Array instance from an array like or iterable object.

let ArrayData = Array.from(setData)  // Array method

console.log(ArrayData);

const Users = Array.from("Rahul");
const Users1= [];
const Users2 = new Array["Shashi"];
console.log(Users2);
*/

/*
const onemoreway = Array.of(10 , "Sashi" , 12, "Tanu");
const LastWay = Array(1000).fill("fullstack");    // fill is used for filling static values
console.log(onemoreway);
console.log(LastWay);

// Object 
let Users = {
    name:"rks"
    , company:"Capegemini",
    salary:50000,
    age:20,
}
document.write(` <h1> my name is : ${Users.name},
my age is: ${Users.age}`)

*/

/*
//-------------------------------------------------------------------------------
//|-LCO -Hitesh Chowdhury sir online course -| start in 16/04/2020
//------------------------------------------------------------------------------
let firstName= 'Rahul' ;
firstName = 'Anshu' ;
let lastName = 'Dey';

let fullName = firstName + ' ' + lastName ;
console.log(fullName);
let tempInFarenhight = 100 ;

let celcius =( tempInFarenhight-32) * 5/9 ;
console.log(celcius);

let actualMark = 7;
let myGrade =(actualMark <= 10) ;
 console.log(myGrade);

//----------------------------------------------------------------------------
if -else condition
//------------------------------------------------------------------------------
 var whoIsHere = 'teacher' ;

 if(whoIsHere === 'student')
{
    console.log("greeting message for student") ;
    console.log("Allow the student-user to access");
}

else if(whoIsHere === 'teacher')
{
    console.log("greeting message for teacher") ;
    console.log("Allow the teacher-user to access");
}
else
{
    console.log("message : please verify");
}

let marks = '100' ;
if(marks === '50')
{
    console.log("Yor are moderater");
}
else if(marks === '100')
{
    console.log("you are amezing") ;
}
else if(marks === '30')
{
console.log("you are poor");
}
else
{
    console.log("you are fail") ;
}
//concept of operators

let isVerified = false;
let isLoggedin = true;
let hasPaymentToken = true;
let isGuest = true;

if(!isVerified && isLoggedin && hasPaymentToken )
{
    console.log("GREETING TO USER") ;
    console.log("grant access to paid course");

} else if(isVerified || isGuest)
{
    console.log("allow to the free preview as a guest user");
}
else
{
    console.log("please contact admin");
}

let iAmGlobal = 'hii' ;
if(true)
{
    let iamLocal = 'hello local';
    iAmGlobal = 'hiii' ;
   console.log(iAmGlobal);
   console.log(iamLocal);
}
console.log(iAmGlobal);
//console.log(iamLocal);

//king problem
//let king = 'Jhon';

if(true)
{
  // let king = 'RAM' ;
   // console.log(king);
    if(true)
    {
        king ='Sam';
        console.log(king);
    }
}
if(true)
{
    console.log("I am second part of" + " " +king);
}
//-------------------------------------------------------------------------------------
//arrays
//---------------------------------------------------------------------------------------------
const superHeros= ['Ironman' ,'Spiderman','captAmerica'];
console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros[1]);
console.log(superHeros[2]);

console.log("Length of the String is:"+superHeros.length);
console.log(superHeros[superHeros.length-1]);
console.log(superHeros[superHeros.length - 2]);
console.log(superHeros[superHeros.length-3]);

console.log(`We have ${2+1}super Heros`);  // ( `` ) -> Backtricks sign
console.log(`We have ${superHeros.length}super Heros`);

const numbers = ['One' , 'Two' ,'Three' , 'Four' , 'Five' , 'Six'] ;
numbers[1] = 'One&HAlf' ;
numbers[6] = 'seven' ;
console.log(numbers);
//---------------------------------------------------------------------------
//Start(Element deleted at the start of the array)
//----------------------------------------------------------------------------
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);
//------------------------------------------------------------------------------
//Element inserted at the start of the array)
//---------------------------------------------------------------------------------
numbers.unshift('Zero');
console.log(numbers);
numbers.unshift('RD');
console.log(numbers);

console.log(numbers.unshift('RD1'));
console.log(numbers);
//----------------------------------------------------------------------------------
//END (Element deleted at the end of the array)
//------------------------------------------------------------------------------------
console.log("The element to be deleted is:" + numbers.pop());
console.log(numbers);

numbers.pop();
console.log("The element to be deleted is:" + numbers.pop());

console.log(numbers);
numbers.push('Four') ;
numbers.push('Five');
numbers.push('six' , 'Seven');
console.log(numbers);
//----------------------------------------------------------------------------------
//Middle(Element inserted in the middle of an array)
//-----------------------------------------------------------------------------------
numbers.splice(2, 1, 'Biswarup'); //splice(starting from arrayposition [2] ,delete 1 element, and insert "Biswarup" to that 2 position.
numbers.splice(3, 2, 'Rahul');  //starting from arrayposition 3 ,delete 2 element, and insert "Rahul".
console.log(numbers);

*/
//----------------------------------------------------------------------------------------
//Function
//---------------------------------------------------------------------------------------

/* 
// comment start here(End in line no- 511) =========================================================

let sayHello = function(name)
{
    console.log("Greeting message for user");
    console.log(`Hello ${name} How are you ?` );
}
//sayHello('Rahul Dey');   // call the sayHello() function

let fullName = function(firstName , lastName)
{
    console.log("hello");
console.log(`Happy to have you, ${firstName} ${lastName}`);  //  [ `` ] - this is called backtricks.
}
fullName('Anshu' , 'Dey'); // call the function

let adder = function(n1 ,n2)
{
    let addition = n1+n2 ;
    return addition ;
   
}

console.log("Addition of n1 & n2 is :" + adder(5,5));
let result = adder(10 , 5);
console.log("Äddition of another no :"+ result); 

let multiplier = function(a1 , a2)
{
    //let multiplication = a1*a2;
    return a1 *a2 ;
}

//let mul = multiplier(5,4);
console.log("Multiplication of a1 & a2 is:" +multiplier(5,4));

let guestUser = function(name='unName', courseCount= 0)   // default parameter is 'unName'
{
    return 'Hello' + name +'your course count is:' + courseCount ;
}

console.log(guestUser(' Rahul ' , 1) );
//--------------------------------------------------------------------
//forEach loop concept
//------------------------------------------------------------------------
const days = ['mon' , 'Tues', 'Wed','Thurs' , 'Fri', 'Sat'] ;
 
//console.log(days[0]);

// let sayHello1 = function()
// {
//     console.log("Greeting message for user");
// }
// days.forEach(sayHello1);

days.forEach( function(day) {
   // console.log("Greeting message for user");
    console.log(day); //parameter name should be same
} )

days.forEach(function (day , index)  //first parameter is element itself in the array & 2nd parameter is index//
{
    console.log(`starts with ${index+1} -- ${day}`); 
})

console.log("----------------------------------------------------------------")
const months = ['Jan', 'Feb','March' ,'April' , 'May','June', 'July','August' , 'Sep' ,'Oct','Nov', 'Dec'];

months.forEach(function(month , index)
{
    console.log(`Starts with ${index+1} -- ${month}`);
})
//-----------------------------------------------------------------------
// for loop concept
//-------------------------------------------------------------------------

const days6 = ['mon' , 'Tues', 'Wed','Thurs' , 'Fri', 'Sat'] ;

for(let index= 0 ; index<days6.length ; index++)
{
    //let element = days[index];
   // console.log(element);
    console.log(days6[index]);  //short process /save memory
}
console.log("-------------------------------------------------------------------------")
for(let index1=days6.length-1 ; index1>=0 ; index1 --)
{
    console.log(days6[index1]); 
}

//ASSIGNMENT-1
const todos = [] ;
todos.push('Buy Bread');
todos.push('open my laptop');
todos.push('start study');
todos.push('go for workout');

todos.forEach(function(todo , index)
{
    console.log(`my todo task no ${index+1} is: ${todo} `);
})

//ASSiGNMENT -2
const todos1 = [] ;
 todos1.unshift('wake up 6 AM');
 todos1.unshift('Buy Bread');
 todos1.unshift('start stydyig');
 todos1.unshift('taken bath');
 todos1.unshift('taken lunch');
 todos1.unshift('working out at 6:30 pm');

 for(let index2=todos1.length-1; index2>=0 ; index2-- )
 {
     console.log(todos1[index2]);
 }
//----------------------------------------------------------------------------------------------
 //Grading System
//-----------------------------------------------------------------------------------------------
let getMyGrade = function(currentMarks , totalMarks) 
{
    let myPercent = (currentMarks/totalMarks)*100 ;
    let myGrade = '' ;
    if(myPercent >= 90 )
    {
        myGrade = 'A';
    }
    else if(myPercent >= 80)
    {
        myGrade ='B';
    }
    else if(myPercent >= 70)
    {
        myGrade ='C';
    }
    else if(myPercent >= 60)
    {
        myGrade ='D';
    }
    else{
        myGrade = 'F';
    }
    return `your grade is ${myGrade} and percentage is : ${myPercent} `;

}

let yourResult = getMyGrade(92,150); 
console.log(yourResult);
//------------------------------------------------------------------------------
//  '==' vs '==='
//------------------------------------------------------------------------------------
console.log(2 === 2.0); // o/p -> true

console.log('' === '');  //o/p -> true

let myVar = '' ;
let myVarTwo = '' ;
console.log(myVar === myVarTwo) ;  // o/p -> trrue

let myVar1 = {} ;    // this is an object
let myVarTwo1 = {} ;    // this is also an object 
console.log(myVar1 === myVarTwo1) ; // object are not same //o/p -false

let myVar2 = '' ;
let myVarTwo2 = myVar2 ;
console.log(myVar2 === myVarTwo2) ; // o/p -true
*/ //comment End (Started from line no -346)====================================================================

//------------------------------------------------------------------------------------------
// Object concept
//----------------------------------------------------------------------------------------

let myYoutubeVideo = {          //myYoutubeVideo is now an object
     title : 'Loop in javascript' ,
     videoLength : 15 ,
     videoCreator : 'Hitesh Choudhary ',
     videoDescription : 'this is a video description and a long one'

}
  //  console.log(myYoutubeVideo) ;       //print the whole object value
   // console.log(`Hey my new video on ${myYoutubeVideo.title} made by ${myYoutubeVideo.videoCreator}`);
//=====================================
//Assignment-----------------------------------------------------------------------
//Object name -javascriptcourse
//values -name price descript
//print -new course coursename by author at a price and description

let javaScriptCourse = {                //javaScriptCourse is an object
    name : 'Document Object Model' ,
    coursePrice : 55 ,
    courseAuthor : 'Hitesh Choudhary' ,
    courseDescription : 'This course is based on DOM->Document Object Model'
} 
//console.log(`Hey buy  new course on ${javaScriptCourse.name} made by ${javaScriptCourse.courseAuthor} in Rs ${javaScriptCourse.coursePrice} and a brief description ${javaScriptCourse.courseDescription}`) ;

// if we change the particular property value of an object then it change the vale in the original/real object

javaScriptCourse.name = 'ReactJS Library' ; // we can change the value of an object also,
console.log(`Hey buy  new course on ${javaScriptCourse.name} made by ${javaScriptCourse.courseAuthor} in Rs ${javaScriptCourse.coursePrice} and a brief description ${javaScriptCourse.courseDescription}`) ;
console.log(javaScriptCourse);

// now we will access a Key :value or properties of any object using function or 'myVideoLength' function

let myVideoLength = function(myObject)
{
    return `the video length belongs to myYoutubeVideo object  is : ${myObject.videoLength + 2}`; //o/p -> 17->we return the value and update the value as well

   // console.log(`the video length belongs to myYoutubeVideo object  is : ${myObject.videoLength}`);
    //console.log(`course price of the course belongs to javaScriptCourse object is:${myObject.coursePrice}`);
    console.log(`author name ${myObject.courseAuthor}`);
   // console.log(`author name ${myObject.videoCreator}`);
}

console.log(myVideoLength(myYoutubeVideo));
//myVideoLength(myYoutubeVideo);
myVideoLength(javaScriptCourse);

//--------------------------------------------------------------------------------------------
//object created
let javaScriptCourse1 = {                //javaScriptCourse1 is an object,name1,course1,courseAuthor1,courseDescription1 are key
    name1 : 'Document Object Model' ,       //
    coursePrice1 : 50 ,
    courseAuthor1 : 'Hitesh Choudhary' ,
    courseDescription1 : 'This course is based on DOM->Document Object Model'
} 

/*[we hv created a function(objectFunction) ,which takes an object(javaScriptCourse1) and returns an object as well ,
  when object is being returned from a function(objectFunction) we usually might want to hold that
 into a variable(adOne) and from that variable(adOne) we can access selectively what we want to 
 access using again a dot(.) notation.] 
*/    
//function created
let objectFunction = function(myObject1)
{   return {
    
        formatOne : `course price of the course is ${myObject1.coursePrice1 + 2}` ,
        formatTwo : `course price of the course is ${myObject1.coursePrice1 + 1}` 
    }
}
let adOne = objectFunction(javaScriptCourse1); //adOne ->is a variable where we stored the object value// we hv created a function 
//                        which takes an object and returns an object  
//                        as well ,we have stored that into this adOne variable
console.log(adOne.formatOne);
console.log(adOne.formatTwo);




//---------------------------------------------------------------------------------------------------
//trello todo list
let myTodosMeeting = {
    day : 'Monday' ,
    meetingsKey : 0 ,
    meetdoneKey : 0 ,
}

let addMeetingsFunction  = function(todo , meet = 0) {

    todo.meetingsKey = todo.meetingsKey + meet ;

}

let meetDoneFunction  = function(todo , meet = 0){

    todo.meetdoneKey = todo.meetdoneKey - meet ;
    
    
}

let resetDay = function(todo ) {

    todo.meetingsKey = 0;
    todo.meetdoneKey = 0 ;
}

let getSummaryOfDayFunction = function (todo) {

    let meetLeft = todo.meetingsKey + todo.meetdoneKey ;
    return `you have ${meetLeft} meetings left for today` ; 
}

     addMeetingsFunction(myTodosMeeting , 11) ;
    addMeetingsFunction(myTodosMeeting , 6) ;
    meetDoneFunction(myTodosMeeting, 4) ;

console.log(getSummaryOfDayFunction(myTodosMeeting)) ;
//------------------------------------------------------------------------------------
//We have created method inside of the object and create a todoTask & this keyword concept
//-------------------------------------------------------------------------------------
let taskList = {            //this is an object
    day : 'Tuesday' ,
    taskno :  12,
    taskdone : 10 ,
    taskleft : 2,
    addTask : function () {
        console.log(`Hey , i am a function.`) ;
        console.log(this);          //this says what are the properties are there in current object
    }
}
taskList.addTask() ;

//-----------------------------------------------------------------------------------
let taskList1 = {
    day : 'Wednesday' ,
    taskno :  0,
    taskdone : 0 ,
    taskleft : 0,
    addTask : function (num) 
    {
        //console.log(`Hey , i am a function..`) ;
        //console.log(this);          // 'this' says what are the properties are there in current object and manipulate the objects
    this.taskno = this.taskno + num ;
    
    },
    summery : function()            // the task no is  retuned through this summery function
        {
            return `you have ${this.taskno} tasks ` ;
        } ,
        
    taskDone: function(num1)
        {
            this.taskdone = this.taskdone + num1 ;
        
        },
    taskDone1 : function()
    {
        return `you have already done ${this.taskdone} tasks ` ;
    },

    taskLeft : function()
    {
        
            this.taskleft = this.taskno - this.taskdone ;
            if(this.taskleft >0)
            {
            return `you have ${this.taskleft} tasks left` ;
            }else
            {
                return `you have no task pending` ;
            }       
    }

    }


taskList1.addTask(20) ;
taskList1.taskDone(8); 
console.log(taskList1.summery()) ;  // o/p -> you have 20 tasks
console.log(taskList1.taskDone1()) ; // you have already done 8 tasks
console.log(taskList1.taskLeft());      //you have 12 tasks left

//------------------------------------------------------------------------------------
//check Username & password
//also check mdn documentation in GooGle
/* --Comment Start
let userEmail = 'rd90963' ;
let userPassword = 'Rdey1996@#' ;

let userCheker = function (myString) {
    
    if((myString.includes(90963)) && (myString.length > 6) )
    {
        return true ;
    }
    else
    return false ;
}

console.log(userCheker(userEmail)) ;  // o/p-> true

let passCheker = function(myString1){
    if((myString1.includes('Rdey1996@#')) && (myString1.length > 8))
    {
        return true ;
    }
    else
    return false ;
}

console.log(passCheker(userPassword)); // o/p ->true
//------------------------------------------------------------------------------

let numOne = 22 ;
let numTwo = 7 ;
let result = 22/7 ;
console.log(result);  //3.142857142857143
// console.log(result.toFixed(2)); // o/p -> 3.14
let floatRes = result.toFixed(2) ;
console.log(Math.floor(floatRes)); // o/p -> 3
console.log(Math.ceil(floatRes));  // o/p -> 4

console.log(Math.random()) ;  //getting random no between (0 and 1)
//console.log(Math.random()) ;
console.log(Math.random() * 20 +1) ;
// using this concept build a dice-roller which give (1-6) posibilities
//Comment End 
*/ 
let upper = 6 ;
let lower = 1 ;

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower; // random no will generate between 1 to 6

console.log(myRandom);
//--------------------------------------------------------------------------------


//Search from Array of Objects 
const myTodos = ['Buy Bread' , 'Go to Gym' , 'Studying'] ; // myTodos is an array
console.log('line no 753' + "-> " +myTodos.indexOf('Buy Bread')) ;  // o/p -> 0
console.log('line no 754' + "-> " +myTodos[myTodos.indexOf('Go to Gym')]) ; // o/p ->Go to Gym
//--------------------------------------------------------------------------------
//Array of Objects
const newTodos = [{            // newTodos is an array filled up with objects
    title : 'Buy Bread',
    isDone : false ,
} ,
 {
     title : 'Go to Gym',
     isDone : false ,
 } ,
  {
      title : 'Studying' ,
      isDone : true ,
  }] ; 

  const index = newTodos.findIndex(function(todo , index){
    
   // console.log(todo);
    return todo.title === 'Studying' ;

  })

// console.log(index) ;
 

  const findTodo = function(anyTodos , title){
      const index = anyTodos.findIndex(function(todo, index){
          return todo.title.toLowerCase() === title.toLowerCase() ;
      })
      return anyTodos[index] ;
    }

    let printMe = findTodo(newTodos , 'Go To Gym')
    console.log(printMe);











