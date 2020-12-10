const paragraph = 'The quick brown fox  jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchItem = "dog" ;
const indexOfFirst = paragraph.indexOf(searchItem);

console.log('The index of the first "' + searchItem + '" from the beginning is ' + indexOfFirst);

console.log('The index of the 2nd "' + searchItem + '" is ' + paragraph.indexOf(searchItem, (indexOfFirst + 1)));

console.log(paragraph.indexOf('q'));

const userName = "           Rahul           ";

console.log('uithout using trim function' + userName);
console.log('using trim function: '+"" +userName.trim());// delete the white spaces from both the ends.
















