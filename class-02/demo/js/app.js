'use strict';

// proof of life
console.log('hello');
// ask yes or no questions and respond to the answer

let disneyland = prompt('Have you ever been to Disneyland? Please enter yes or no');
let lowercaseDisneyland = disneyland.toLowerCase();
console.log('original response ' + disneyland + ' lowercase response ' + lowercaseDisneyland);

if (lowercaseDisneyland === 'yes' || lowercaseDisneyland === 'y') {
  // what happens if they say "YES" or 'Yes' or Y or y or yep
  alert('Lucky you! It truly is the happiest place on earth');
} else if (lowercaseDisneyland === 'no' || lowercaseDisneyland === 'n') {
  alert('I am sorry, you should def go.');
  let disneyworld = prompt('have you been to DW');
  if (disneyworld === 'yes') {
    alert('at least there is that');
  }
} else {
  alert('I am confused by your response');
}
// ask a question
let funLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was Disneyland when you went?');
let numericFunLevel = parseInt(funLevel);
console.log(funLevel, 'should be a string')
console.log(numericFunLevel, ' should be a number');
let otherFunLevel = Number(funLevel);
// switch statements are helpful anytime you are offering any more than three responses
switch (funLevel) {
  case '1':
    alert('I am sorry, you should definitely go again');
    break;
  case '2':
    alert('Shouldn\'t have had that turkey leg');
    break;
  case '3':
    alert('Amazing! We should go sometime');
    break;
  default:
    alert('I was confused by your response, let\'s plan a trip');
    break;
}