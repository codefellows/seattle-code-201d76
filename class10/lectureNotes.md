# Lecture Notes

## Hoisting
- in javascript 2 passes are made through the code
  - first pass
    - variable names are stored in memory (we don't look at what they are assigned to)
    - functions are declared (their variable names are stored)
  - second pass executes the code
    - assignments are read and code is executed in order

``` js
  Pizza.prototype.myPizzas = [];
  function Pizza() {
    console.log('pizza is awesome');
  }

  let soup = 'chicken noodle'

  let myFunction = function() {
    console.log('hi chance');
  }
```

## pass by reference vs pass by value
- js always passes by value
- even when passing a reference AS the value
- even with objects and arrays: It's always pass by value, but for objects the value of the variable is a reference.
- no matter what anyone tells you!


## debugging your code
### debugger chrome
- allows you to put pause points in your code to run it line by line and watch variables at certain points
- use it when you think you will write buggy code or when you suspect you know which area your bug is in
- https://googlechrome.github.io/devtools-samples/debug-js/get-started

### reading error messages in the console
- follow back to the line and the file

### using console.logs
- plant well written console logs to figure out what the current values of things are
