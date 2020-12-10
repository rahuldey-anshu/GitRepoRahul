var uid = 12 ;
var firstName = "Rahul" ;
var lastName = "Dey" ;
var email = "rd90963@gmail.com" ;
var password = "12345" ;
var con_pass = "12345" ;
var country  = "India" ;
var isLoggedInfromGoogle = false ;

console.log(`
user id is : ${uid} ;
user's fullname is : ${firstName} ${lastName} ;
user's email id is : ${email} ;
password : ${password} ;
his country is : ${country} ;
isloggedIn : ${isLoggedInfromGoogle} ;

`)

var listing_Price = 799 ;
var selling_Price = 199 ;
var discount_Percentage = ((listing_Price  -  selling_Price)/listing_Price) *100 ;

console.log(Math.round(discount_Percentage));
