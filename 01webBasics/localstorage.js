//alert('hi');
localStorage.setItem('hero' , 'thor') ;  //set the value in the local storage('key' , 'value') format always be string
var myHero = localStorage.getItem('hero') ;  //retrieving process,the value that i retrieve and store in a variable 
console.log(myHero);   // log the value

localStorage.setItem('todo' , 'Buy green Tea');

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo' , 'Learning JS'); //update the value on a existing key
console.log(localStorage.getItem('todo'));


localStorage.removeItem('hero');    //Delete from localStorage
//myHero = localStorage.getItem('hero') ;
console.log(myHero);

localStorage.setItem('value' , 'I made my project');  // add value into localStorage
localStorage.getItem('value');        // to see the value or get the value.
//if i comment the 18 no line or remove the two line from js file.
//still the value will be stored into localstorage,untill and unless i hit the clear storage button

//localStorage.clear(); //to delete all the element and value from localstorage






