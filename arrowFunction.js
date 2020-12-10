////this is simple function,we know all this
const name = function(name1) {
    return `hey! i am ${name1}` ; 
}

console.log(name('Rahul'));
//-------------------------------------------------------
//this is called arrow function (new concept)
const firstName = (name1) => {
    return "Hey there is, " +name1 + "!"
}
console.log(firstName('Rahul Dey')) ;
//-----------------------------------------------------
//this is called arrow function in single line (new concept) 
const lastName = (name2) => `i am from ${name2} family` ;

console.log(lastName('Dey'));
//------------------------------------------------------
//mytodos is an array of objects (concept of arrow function)
const myTodos = [{
    title : 'Buy Bread',
    isDone : true ,
} , { 
     title : 'Go to gym' ,
     isDone : false ,
} , {
    title  : 'Studying js',
    isDone : true,
} , {
    title  : 'taking lunch',
    isDone : false,
}]

const thingsDone = myTodos.filter((todo)=>{
    return todo.isDone === true ;  // it returns those properties of the objects which are true
}) ;
console.log(thingsDone);

//  just do the same above things in a single line using arrow function
const thingsDone1 = myTodos.filter((todo)=> todo.isDone === false) ; // it returns those properties of the object which are false

console.log(thingsDone1);
console.log("--------------------------------------------------------------");
//-------------------------------------------------------------------------
//Assignments

const myTodoList = [{
    title : 'TakeBreakfast',
    isDone : true,
} , {
     title : 'Charging the Mobile',
     isDone : false,

} ,{
     title : 'Studying js',
     isDone : true,
} ,{
     title : 'take medicine',
     isDone : false,
} ,{
     title : 'take bath',
     isDone : true,
} ,{
    title : 'taking lunch',
    isDone : false,

}]

const thingsNotDone = myTodoList.filter((todo) => todo.isDone === false) 

// there are two ways to print the properties of the objects which is not done

thingsNotDone.filter((todo1) => console.log(todo1.title)); // one way

// let notDone = thingsNotDone.forEach(function(title){     // another way
//     console.log(title.title)
// });


const camera = {
    price : 600 ,
    brand : 'canon',
    weight : '500g',
    mydesk : function(){
        return `this ${this.brand} camera  price is ${this.price} $ and weight is ${this.weight} `
    }

}
console.log(camera.mydesk());



//arrow function with rest parameter

let arrow = (a, ...args) => {
    console.log(a + " " + args);
    
}
arrow(10,20,30,40,50,60,70,80,90,100);
//e.g of shorter arrow function 
let arrow1 = b => b ;
console.log("Hii Rahul");


//anonymous function
function show(d,e)  {
    return (d+e);
}
console.log( show(2,8) ) ;
///arrow fun

var add=(d,e)=> d+e;
console.log(add(20,20));






