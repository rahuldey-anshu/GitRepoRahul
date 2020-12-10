//this convertTorupees is a normal function
const convertTorupees = function(doller) {
    return doller*64 ;
}

const myValue = convertTorupees(5) ;
console.log(myValue) ;    // o/p = 320
//------------------------------------------------------------------------
//this convertTorupees1 is an arrow function in one line statement
const convertTorupees1 = (doller1) => doller1*65

const myValue1 = convertTorupees1(5) ;
console.log(myValue1) ;      // o/p = 325
//------------------------------------------------------------------------

const convertTorupees3 = (doller) =>{
    if (typeof doller === 'number')
    {
    return doller*64 ;
    }
    else {
        throw Error('Amount needs to be in number');
    }
}
//const myValue3 = convertTorupees3('seven') ;
//console.log(myValue3) ; 
try {
    const myValue3 = convertTorupees3('eight') ;
    console.log(myValue3);
    }
catch (error) {
    console.log(error) ;
}

console.log("i will never run this code if crashes") ;





