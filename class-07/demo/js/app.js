// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// update your html if necessary to reflect new features
`use strict`;

// grab any target from the html I am going to use as my parent for dom additions

//------------------ Global Variable for whole doc -----------------//

const kittenProfilesDivElem = document.getElementById('kittenProfiles');


// create a constructor function for kittens
  // name, age, interests, isGoodWithDogs, cats, kids, photo


//------------------ Constructor function -----------------//
function Kitten(name, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo) {
  this.name = name;
  this.photo = photo;
  this.interests = interests;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithKids = isGoodWithKids;

  console.log('this', this);
  // within the constructor 'this' refers to the instance of the object

  // add to the kitten array
  this.kittenArray.push(this);
  console.log('this is the current version of the array', this.kittenArray);
}


// by adding the array as a property of the prototype I am keeping all things kitten related attached to the Kitten object
Kitten.prototype.kittenArray = [];


//------------------ Prototype Methods, only usable by Kittens -----------------//
// add any prototype methods I might need
  //- things specific to a single object
  // - getAge
  // - render a single kitten to the page
Kitten.prototype.getAge = function() {
  this.age = `${Math.floor(Math.random() * (12 - 3) + 3)} months`;
}

Kitten.prototype.renderKitten = function() {
  // creates and appends and fills all of the html elements I need to add a kitten to the page
  /* <table>
  <tr>
  <th>
    Kids
  </th>
  <th>
    Dogs
  </th>
  <th>
    Other Cats
  </th>
</tr>
<tr>
  <td>
    true
  </td>
  <td>
    false
  </td>
  <td>
    true
  </td>
</tr>
</table>
  */
  const articleElem = document.createElement('article');
  // parent.appendChild(childElement)
  // if I don't append it, it exists in memory but we haven't added it to the screen
  kittenProfilesDivElem.appendChild(articleElem);
  // ANYTIME we need to create a single element we do this
  const imgElem = document.createElement('img');
  imgElem.src = this.photo;
  articleElem.appendChild(imgElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${this.age} old`;
  articleElem.appendChild(pElem);
  // we need to make our ul and append it to the article
  // within the up we need to create new li's for each interest in our array
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  // kitten.interests is my array name
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem)
  }
  // create table - parent is article
  // the table is going to have 2 rows - parent is table
  // each row is going to have 3 cells - parent to the cells is tr
  // first row all cells will be th
  // second row all cells will be td

  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);
  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');
  tableElem.appendChild(row1);
  tableElem.appendChild(row2);
  const row1Cell1Elem = document.createElement('th');
  row1Cell1Elem.textContent = 'Good with Dogs';
  row1.appendChild(row1Cell1Elem);
  const row1Cell2Elem = document.createElement('th');
  row1Cell2Elem.textContent = 'Good with Cats';
  row1.appendChild(row1Cell2Elem);
  const row1Cell3Elem = document.createElement('th');
  row1Cell3Elem.textContent = 'Good with Kids';
  row1.appendChild(row1Cell3Elem);

  const row2Cell1Elem = document.createElement('td');
  row2Cell1Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(row2Cell1Elem);
  const row2Cell2Elem = document.createElement('td');
  row2Cell2Elem.textContent = this.isGoodWithCats;
  row2.appendChild(row2Cell2Elem);
  const row2Cell3Elem = document.createElement('td');
  row2Cell3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(row2Cell3Elem);

}



//------------------ global function -----------------//
// add any regular functions I might need
  // render all kittens
function renderTheWholeKittenCaboodle() {
  for (let i = 0; i < Kitten.prototype.kittenArray.length; i++) {
    let currentKitten = Kitten.prototype.kittenArray[i];
    currentKitten.getAge();
    currentKitten.renderKitten();
  }
}





//------------------ declare Kittens -----------------//
// declare kittens
  // jumper, serena, frankie
const frankie = new Kitten('frankie', ['mice', 'scratching', 'meowing'], false, true, false, './images/frankie.jpeg');
// we call the function, it makes a new Kitten instance and puts it in the kitten array
const serena = new Kitten('serena', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true, './images/serena.jpeg');
// we call the function, it makes a new Kitten instance and puts it in the kitten array
const jumper = new Kitten('jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true, './images/jumper.jpeg');
// we call the function, it makes a new Kitten instance and puts it in the kitten array
// frankie.getAge();
// frankie.renderKitten();

// Kitten.prototype.kittenArray.push(new Kitten('frankie', 0, ['mice', 'scratching', 'meowing'], false, true, false, './images/frankie.jpeg');)

// put in an array *
// call all my functions
console.log('this is the kitten array', Kitten.prototype.kittenArray);




//------------------ call function -----------------//
renderTheWholeKittenCaboodle();



// make a function that does couple things "build a cat" {
// pass in arguments 
// call new Kitten with arguments
// put the kitten in the array
// call get age
// call render
// }