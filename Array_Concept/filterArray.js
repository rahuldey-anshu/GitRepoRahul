var testArray = [2 , 4 , 6 , 3 , 5 , 7 , 10 , 15] ;

console.log(testArray.fill("R" , 6));  // O/P  [   2, 4, 6,   3,
                                            //    5, 7, 'R', 'R'  
                                      //       ]

//======================================================//

const myNumber = [20 , 21 , 22 , 25 , 55 , 66 , 77 , 87 , 99 , 15 , 45 , 76] ;

const result = myNumber.filter((num) => (num < 55)) ;  //O/P - [ 20, 21, 22, 25, 15, 45 ]

console.log(result);

//========================================================//

var users = ["Ram" , "Sam" , "Anshu" , "Ayan" , "Sushant" , "Reshmi" , "Rachu" , "Sandip"] ;
console.log(users.slice(1));

//console.log(users.slice(1 , 4 )); //  o/p - [ 'Sam', 'Anshu', 'Ayan' ] inclusive and exclusive will not be counted

users.splice(1 , 5 , "RAHUL");

console.log(users); //o/p - [ 'Ram', 'RAHUL', 'Rachu', 'Sandip' ]







