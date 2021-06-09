'use strict';

// proof of life
console.log('hello world');

alert('welcome to my Disneyland guessing game!')

let username = prompt('What is your name?');
// what if they give their name properly
console.log('username', username);
// if we get a null value or an empty string username will be falsey
// while (!username)
while (username === null || username === '') {
  username = prompt('I didn\'t get that, please enter your name');
  // this will continue to loop until a valid username is entered
}

alert('Hi ' + username + '. Thanks for visiting.');

// use the !== operator

if (username !== 'Mickey Mouse') {
  alert('I was hoping for someone else');
}

// lets look at arrays

let snackArray = ['dole whip', 'pickles'];
console.log('This is our array', snackArray);

// array methods - functions built onto the array prototype

// add items to the end of the array
snackArray.push('hungry bear beyond burger');
console.log('This is our new array', snackArray);

// add items to the beginning of the array using unshift
snackArray.unshift('mickey pretzel')
console.log('This is our array with the added items', snackArray);

//index of
console.log('this is the index of dole whip ', snackArray.indexOf('pizza'));

// length property
console.log('This is the length of our snack array ', snackArray.length);

// check out splice - removes elements from your array

// for (let index = 0; index < snackArray.length; index++){
//   console.log(index);
//   console.log(snackArray[index]);
// }

// let yourGuess = prompt('can you guess one of my favorite DL snacks?');

// for (let index = 0; index < snackArray.length; index++){
//   if (yourGuess === snackArray[index]) {
//     alert('you got it');
//     break;
//   }
//   console.log('this is the current snack we are checking against', snackArray[index]);
// }
