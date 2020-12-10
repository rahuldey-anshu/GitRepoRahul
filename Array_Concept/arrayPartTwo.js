// =================================================== //
function isEven(element) {
    if(element % 2 == 0)
    {
        return true ;
    }
    return false ;

}

console.log(isEven(4));

// ================================================== //

var isOdd = (element) => {
    return element % 2 === 1 ;

} ;

console.log(isOdd(8));

// ============================================== //


var result = [2 , 4 , 6  , 8 , 10 , 11].every((e)=> {
    return e % 2 === 0 ; 
}) ;
console.log(result);

//==================================================//

var result1 = [1 , 3 , 5 , 7 , 9 ].every((e) => e % 2 === 1 ) ;
console.log(result1); 


















