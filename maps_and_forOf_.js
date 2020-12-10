var john = {
    name : 'i am john',
    age : 24,
    isActive : true,
}

var marry ={
    name : 'i am marry',
    age : 23,
    isActive : true, 
}

var sam ={
    name : 'i am sam',
    age : 29,
    isActive :false,
}
let users = new Map();
//console.log(typeof users); // o/p -> object
users.set('john' , john);
users.set('marry' , marry);
users.set('sam' , sam);

console.log(users);
console.log("=============================================================================");

console.log(users.size); //o/p=>3 , there are three objects  in the Map

console.log(users.get('sam'));

// console.log(users.keys());

// console.log(users.values());

// concept of for...of loop
for(const key of users.keys()) {
    console.log(key);
    
}

for(const value of users.values()) {
    console.log(value.name);
    
}

for(const [key , value] of users.entries()) {
    
    
    console.log(key + '=' + value.name) ;
  //  console.log(key + '=' + value.name , value.age , value.isActive);
    
}

//concept of forEach loop concept in Map
users.forEach((value , key) => console.log(key + '=' + value.age)) ; // sequence of key value is reverse between forEach and for..of loop

var arrayofarray = [['one' , '1'], ['two' , '2'] , ['three' , '3']];

var newMap = new Map(arrayofarray);
console.log(newMap);














