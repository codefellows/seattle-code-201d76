'use strict';
// talk about contextual this

// jose is pretty comfortable with hard coding each kitten into the javascript, but needs us to set up some functions that will render the kittens to the page

// what do I need to know about each cat?
// name
// age - randomly generate for now
// intrests
// isGoodWithKids
// isGoodWithDogs
// isGoodWithOtherCats

const frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['sleeping', 'hunting', 'lazers'],
  isGoodWithOtherCats: true,
  isGoodWithKids: false,
  isGoodWithDogs: true,
  photo: './images/frankie.jpeg',
  getAge: function() {
    // console.log(this.age);
    this.age = `${randomAge(3, 12)} months`;
    // console.log(this.age); 
  }
}

// CONTEXTUAL THIS!!!! 
// The one I am talking about now, THIS ONE

const jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['treats', 'yarn', 'birds'],
  isGoodWithOtherCats: true,
  isGoodWithKids: true,
  isGoodWithDogs: true,
  photo: './images/jumper.jpeg',
  getAge: function() {
    // console.log(this.age);
    this.age = randomAge(3,12) + ' months';
    // console.log(this.age);
  }
}


const serena = {
  name: 'Serena',
  age: 0,
  interests: ['pets', 'scratches', 'hissing'],
  isGoodWithOtherCats: false,
  isGoodWithKids: false,
  isGoodWithDogs: false,
  photo: './images/serena.jpeg',
  getAge: function() {
    // console.log(this.age);
    this.age = randomAge(3,12) + ' months';
    // console.log(this.age);
  }
}

function randomAge(minAge, maxAge) {
  return Math.floor(Math.random() * (maxAge - minAge) + minAge);
}

let catArray = [serena, frankie, jumper]
// console.log(catArray);


// console.log(catArray);

const kittenProfilesDivElem = document.getElementById('kittenProfiles');

// kittenProfilesDivElem.textContent = 'hi!';
// <!-- <article>
// create an article element
//           <img> parent is article
//           <h2></h2> parent is article
//           <p></p>
//           <ul>
//             <li></li> parent is ul
//           </ul>
//         </article> -->

function renderKitten(kitten) {
  const articleElem = document.createElement('article');
  // parent.appendChild(childElement)
  // if I don't append it, it exists in memory but we haven't added it to the screen
  kittenProfilesDivElem.appendChild(articleElem);
  // ANYTIME we need to create a single element we do this
  const imgElem = document.createElement('img');
  imgElem.src = kitten.photo;
  articleElem.appendChild(imgElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${kitten.age} old`;
  articleElem.appendChild(pElem);
  // we need to make our ul and append it to the article
  // within the up we need to create new li's for each interest in our array
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  // kitten.interests is my array name
  for (let i = 0; i < kitten.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = kitten.interests[i];
    ulElem.appendChild(liElem)
  }
}


for (let i = 0; i < catArray.length; i++) {
  let currentCat = catArray[i];
  currentCat.getAge();
  renderKitten(currentCat);
}