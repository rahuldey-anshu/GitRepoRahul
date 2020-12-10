//alert('Hello i am ready to go');
/*
function myValidation() {
    let myValue = document.getElementById('myform').value

    if(isNaN(myValue) || myValue < 1 || myValue > 20 ){
        console.log("not a valid input");
        
    }
    else{
        console.log('this input is ok ');  
    }
}
// form validation

document.querySelector('.myform').addEventListener('submit' , (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '' ;
    event.target.realname.value = '' ;
});
*/


//Assignments-----------------------------------------------------------------
//sign up form and password checking

// perfect code(Start code)(same code: also for sign up validation)

document.querySelector('.myform').addEventListener('submit' , (event) =>{
    event.preventDefault();
const password1 =event.target.password1.value;
console.log(password1);

const password2 =event.target.password2.value;
console.log(password2);

const username = event.target.username.value ;
console.log(username);

const email =  event.target.email.value ;
console.log(email);

let myNewElement =document.createElement('p');
let msg = '';
if(username === '' || password1 ==='' ||password2 ==='')
{
    alert('users details cannot  be empty') ;
}else if(password1 != password2){
    msg = 'password does not match' ;
}else {
    msg = 'Congrats! your account is created!' ;
}
    myNewElement.textContent = username +',' + msg ;

    event.target.username.value = '';
    event.target.email.value = '';
    event.target.password1.value = '';
    event.target.password2.value = '';
    document.querySelector('body').appendChild(myNewElement);

});
//code end--------------------------------------------------------------------


 /*(start comment) mycode it is(it is also correct) --------------------

document.querySelector('.myform').addEventListener('submit' , (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    let value1 =event.target.password1.value;
    console.log(value1);
    let value2 = event.target.password2.value;
    console.log(value2);
    event.target.username.value = '';
    event.target.email.value = '';
    event.target.password1.value = '';
    event.target.password2.value = '';
    
    let myNewElement =document.createElement('p');
document.querySelector('body').appendChild(myNewElement);

    if(value1 === value2)
    {
        console.log(myNewElement.textContent='password is matched & Account is created');
    }
    else{
        console.log(myNewElement.textContent = 'password doesnot matched');   
    }

}) ;

// (end comment)-------------------------------------
*/




/*(check the code again) this code is not working========================================================
    document.querySelector('.myform').addEventListener('submit' , (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password1.value);
    console.log(event.target.password2.value);
    event.target.username.value='';
    event.target.email.value ='' ;
    event.target.password1.value='' ;
    event.target.password2.value ='' ;

let value1= document.getElementById('pass1').value ;
let value2 = document.getElementById('pass2').value ;
let userid = document.getElementById('user1').value ;
let emailid = document.getElementById('email').value ;

let myNewElement =document.createElement('p');
document.querySelector('body').appendChild(myNewElement);

if(userid ==='' || emailid ==='' || value1 ==='' || value2 ===''){
            alert('user details can not be empty');
} else if(value1 != value2){
    console.log(myNewElement.textContent= 'sprry! you are not allow to login cz password doesnot match');
}else{
    console.log(myNewElement.textContent= 'congrats! your acount is being created');
}


} );

*/ //===========================================================================================












