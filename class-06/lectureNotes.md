# Lecture Notes

<!-- google fonts -->

## const
### What?
- initialize a variable, it's immutable, slightly different for objects

### why?
- because it can never be changed it helps us prevent accidental reassignment

``` js
const dog = 'Indiana';
dog = 'mj';
//will give you an error

const myArray = ['banana', 'grape', 'orange'];
myArray.push('apple');
myArray[0] = 'avocado'
// can't do this...
myArray = {};
```

## Objects
### What?
- JavaScript objects are convenient & powerful ways to group data and functions. 
- kinda like a container for grouped data
- They store data as properties, which are represented as key: value pairs, and can have methods, which are functions associated with the object.
- objects can hold properties that are strings, numbers, booleans, other objects, functions

- shaped similarly to arrays, but typically have symantic keys

``` javaScript
const myArray = ['a', 'b', 'c'];

const myObject = {
	0: 'a',
	1: 'b',
	2: 'c'
};
//Arrays are great for storing similar pieces of data, but get confusing if they contain mixed data.

const samArray = ['Sam', null, 'Hamm', 0, true, ['Nadia', 'Spencer', 'Dan']];
const person = {
	name: "Adam Wallraff",
	age: 30,
	isWalking: false,
	walk: function(){
		console.log(this.name + ' is now walkin down the streetz');
		this.isWalking = true;
  };
};
```

### Prototypes
- Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
- All objects have the props & methods of their prototype
- If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

### Contextual this
- complicated!
- changes based on context.
- 'this' refers to the object

### The DOM
"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object.

Within the document object, we have a method in there called getElementById. This allows us to "get a specific element within the HTML by specifying the id" - target an element

We can only add ONE THING AT A TIME.

### steps for adding to the dom

1. have some element we have gotten from the html via an id to use as a target/parent
  - `const parent = document.getElementById('parent')` - this comes from my html that I wrote
2. Create the child element we want to add and save it as a variable
  - `const child = document.createElement('p');`
3. if we need to add to it - like text content
  - `child.textContent = 'Some words we want in our p element';`
4. append the child to the parent
  - `parent.appendChild(child)`

Finished HTML:

<div id="parent">
  <p>Some words we want in our p element</p>
</div>

## fonts!
- serif fonts have the little hook
- sans serif no hooks

- https://fonts.google.com/
