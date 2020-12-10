//alert('file is attached');
//----------------------------------------------------------------
    //console.log(document.body);
//----------------------------------------------------------------

     //document.title= 'I changed the title' ;
 //------------------------------------------------------------------------

    //console.log(document.getElementById('idone'));
//--------------------------------------------------------------------------
    //console.log(document.getElementsByClassName('classone'));
//-------------------------------------------------------------------------
    // const myElement = document.querySelector('p');
    // console.log(myElement);   //o/p -> <p>This is regular p tag</p>
//------------------------------------------------------------------------

    // const myElement1 = document.querySelectorAll('p');
    // console.log(myElement1); //All the element i will get <p id="idone"> this is p with id</p>
//---------------------------------------------------------------------------

    // const myElement2 = document.querySelectorAll('p');
    // console.log(myElement2[2]); //only 3nd element(3rd index(0,1,2)) i will get <p id="idone"> this is p with id</p>

//----------------------------------------------------------------------------
    // const myElement3 = document.querySelectorAll('p');
    // console.log(myElement3[1]); //only 2nd element i will get <p id="idone"> this is p with id</p>
//-------------------------------------------------------------------------------

    // const element = document.querySelectorAll('.classone');
    // console.log(element);


//--------------------------------------------------------------------
    // const ele = document.querySelector('p') ;
    // ele.textContent = 'i am being changed using js' ;  // it changed the textcontent inside p tag only the first p tag element
//-----------------------------------------------------------------------
/*
const ele1 = document.querySelectorAll('p');
ele1.forEach(function(p) {
    p.textContent = 'i change all the paragrapgh content';  // it change all the contents inside of  all the p tags
   // p.remove(); // this remove all the paragraph(javascript remove all the element of paragraph)
});
*/

//-----------------------------------------------------------------------------
//Assignments 
// do the above(change all the textcontents of paragraph element ) in 1 line using arrow function
    const ele2 = document.querySelectorAll('p') ;
    ele2.forEach((m) => m.textContent = 'Hi i am rahul' ) ;
    
//Added new Element into html file using js,like i added a new paragraph element 

const myNewPara = document.createElement('p') ;
myNewPara.textContent = 'I have added new element via javascript' ;

document.querySelector('body').appendChild(myNewPara) ;  // new p tag will be added in body section

//Everything in javascript runs from top to buttom -> thats why new added p tag element is not changed to 'Hi i am rahul'.

document.querySelector('button').addEventListener('click' , (event) =>{
        event.target.textContent = 'I was just clicked' ;
        
});

// track input form
document.querySelector('#myform').addEventListener('input' , (event) =>{
    console.log(event.target.value);
    
});


    



