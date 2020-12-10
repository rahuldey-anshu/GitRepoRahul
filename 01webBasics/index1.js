

/* Start -1 comment
// Before we integrate this into local storage, let's just get the form and list 
// working - we want anything we submit in the 'input' to appear in the 'ul' .

//  First, I'm just going to set up some variables for the elements on the page 
//  the form, the unordered list, the button, and the text input.
// end - 1 comment
*/

// const form = document.querySelector('form')
// const ul = document.querySelector('ul')
// const button = document.querySelector('button')
// const input = document.getElementById('item')

// /*Start -2 comment
// Next, I'm going to make a function that creates an 'li' element, since 
// I'll be doing that more than once. I'll call the function 'liMaker()' . 
// It just creates an 'li' element, sets the text of the element to the 
// parameter, and appends the list item to the 'ul'.


// */ end -2 comment
// const liMaker = text => {
//     const li = document.createElement('li')
//     li.textContent = text
//     ul.appendChild(li)
//   }

//   /* Start -3 comment
//   I'm going to add an event listener to the form that watches for a submit event
//    - which will be any time you press enter on the form. The e.preventDefault() 
//    will prevent the form from the default submit action, which we don't want, 
//    since we're not sending any data to a server.

//   Instead, the form will submit the value of the input. We're going to
//    call the liMaker() function, which will create the item with the 
//    text of the input value and append it to the DOM. Finally, we'll 
//    set the input value to an empty string so you don't have to erase
//     the last item entered manually.
// */end -3 comment

//   form.addEventListener('submit', function(e) {
//     e.preventDefault()
  
//     liMaker(input.value)
//     input.value = ''
//   })

//  /* Start -4 comment
// Let's create an empty array to start, and create a localStorage key 
// called "items". Now, localStorage only supports strings as values,
//  and want to store our to-dos in an array.

// We can get around this by using JSON.stringify() to convert a data array
//  to a string. We'll use JSON.parse() to convert the contents of 
//  localStorage back into something we can work with later in the
//   data variable. Put this code below all the constant declarations we set earlier.

// */end -4 comment

//   // other constant declarations here
// let itemsArray = []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

// /* Start -5 comment
// In the form event listener, let's push any new input value into the array,
//  then set the localStorage to the new, updated value.
// */end -5 comment

// // form event listener here
// e.preventDefault()

// itemsArray.push(input.value)
// localStorage.setItem('items', JSON.stringify(itemsArray))

// /* Start -6 comment
//   We're going to loop through everything in our data variable above, 
//   which contains all the existing localStorage data in a form JavaScript 
//   can understand and work with, and we'll run the liMaker() again.
//    This will display all existing stored information on the front end 
//    every time we open the app.
//     */ end -6 comment

// data.forEach(item => {
//     liMaker(item)
//   })
// /* Start -7 comment
//   Last, we'll add a click event to the button that will clear all data 
//   from localStorage, as well as removing every child node from the ul.
// */ end -7 comment

//    button.addEventListener('click', function() {
//     localStorage.clear()
//     while (ul.firstChild) {
//       ul.removeChild(ul.firstChild)
//     }
//   })

// /* Start -8 comment
// There's one final problem: after closing the browser or reloading the page, 
// all the existing information in localStorage is gone, and nothing remains 
// on the front end. Why?

// Our itemsArray is being reset to an empty array every time the script runs.
//  We could fix this by making a conditional statement that checks if 
//  localStorage already exists, such as in the below example.

// */ end -8 comment
//   let items

// if (localStorage.getItem('items')) {
//   items = JSON.parse(localStorage.getItem('items'))
// } else {
//   items = []
// }

// let itemsArray = localStorage.getItem('items') ?
//  JSON.parse(localStorage.getItem('items')) : []
//-------------------Full Code------------------------------------------------
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

let itemsArray = localStorage.getItem('items') ? 
JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})




