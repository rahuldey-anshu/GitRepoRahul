// we create an array of object called myDailyList
const myDailyList = [{
    title : 'Yoga' ,
    isDone : true ,
} , {
    title  : 'take breakfast',
    isDone : true,
} , {
    title   : 'Studying',
    isDone  : true,
}]

const index = myDailyList.findIndex(function(list , index){
   // console.log(list);
    return list.title === 'Studying'
})
//console.log(index);

//-----------------------------------------------------------------
//2nd problem
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

//   const index1 = newTodos.findIndex(function(todo , index){
    
//    // console.log(todo);
//     return todo.title === 'Studying' ;

//   })

// console.log(index1) ;
 
//console.log(newTodos);


//Method -1 using findIndex() function

 /*
  const findTodo = function(anyTodos , title){
      const index2 = anyTodos.findIndex(function(todo, index){
          return todo.title.toLowerCase() === title.toLowerCase() ; //to handle the case sensitivity
      })
      return anyTodos[index2] ;
    }

    let printMe = findTodo(newTodos , 'Go To gym');
    console.log(printMe);
*/
//==============================================================
    //Method -2 usng find() function

    const findTodo1 = function(anyTodos1 , title){
        const index3 = anyTodos1.find(function(todo1 , index){
            return todo1.title.toLowerCase() === title.toLowerCase() ;
        })
        return index3;
    }
    let printMe1 = findTodo1(newTodos , 'Studying');
    console.log(printMe1);
















