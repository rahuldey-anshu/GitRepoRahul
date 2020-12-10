console.log('5' + 5) ; // o/p- 55
console.log('5' -5) ;   // o/p - 06

const giveType = typeof 5 ;  // o/p - number

const giveType1 = typeof '5' ; // o/p - string
console.log(giveType);
console.log(giveType1);

const adder = true + 5 ;  // true is considered as 1(just literals ' 1 ') in javascript
console.log(adder);  // o/p -> 6

const sub1 = true - 5 ;  // true is considered as 1(just literals ' 1 ') in javascript
console.log(sub1);   // o/p -> -4

const adder2 = false + 5 ; // false is considered as 0(just literals '0') in javascript
console.log(adder2); // o/p -> 5

const sub2 = false - 5;
console.log(sub2);  // o/p -> -5
//-----------------------------------------------------------------------------------------
const loginDetails = [] ; // loginDetails is an blank array
// logic for getting details from DB

const loginID = loginDetails[0] ; // loginID is the first object in the array
      //if(loginID !==  undefined) { // loinID is not empty
      if(loginID){  
      console.log('Allow user to login');
    }
    else{                           //loginID is empty
        console.log('Auth failed') ;
    }

    /*
    javascript  also assume or interpret some of the values as true and false .
    values that are interpret as false :
    1. false
    2. 0 
    3. '' -> empty string  is also considered as false and if i have
     anything in the string like actual token or even white-space also then it will considered as true.
    4. null
    5. undefined
    apart from that every this in considered as true.

*/





