function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number between 0 and 1

    let upper = 6 ;
    let lower = 1 ;

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower; 

console.log(myRandom);  // random no will generate between 1 to 6

