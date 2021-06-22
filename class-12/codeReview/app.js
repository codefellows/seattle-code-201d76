'use strict';

// global variables for html elements
const listenerElem = document.getElementById('potential_products');
const leftImageElem = document.getElementById('left_product_img');
const rightImageElem = document.getElementById('right_product_img');
const middleImageElem = document.getElementById('middle_product_img');
Product.allProducts = [];
let totalRounds = 0;

let currentLeftProduct = null;
let currentRightProduct = null;
let currentMiddleProduct = null;

// if (event.target.id === rightH2Elem || event.target.id === rightImageElem) {
//   let select = right
// }

// constructor function for products
  //- name image timesDisplayed - 0 votes - 0
  // push products to the array

function Product(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  Product.allProducts.push(this);
}



// ------------------- prototype functions -------------------//

Product.prototype.renderSingleProduct = function(imgPosition) {
  imgPosition.src = this.image;
  this.timesShown++;
}




// ---------------------- global functions ---------------------//


function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(Product.allProducts.length));
} 

function chooseThreeProducts() {
  let unusableProducts = [currentRightProduct, currentLeftProduct, currentMiddleProduct];

  while (unusableProducts.includes(currentLeftProduct)) {
    let randomIndex = getRandomIndex();
    currentLeftProduct = Product.allProducts[randomIndex];
  }

  unusableProducts.push(currentLeftProduct);

  while (unusableProducts.includes(currentMiddleProduct)) {
    let randomIndex = getRandomIndex();
    currentMiddleProduct = Product.allProducts[randomIndex];
  }

  unusableProducts.push(currentMiddleProduct);

  while (unusableProducts.includes(currentRightProduct)) {
    let randomIndex = getRandomIndex();
    currentRightProduct = Product.allProducts[randomIndex];
  }

  currentLeftProduct.renderSingleProduct(leftImageElem);
  currentMiddleProduct.renderSingleProduct(middleImageElem);
  currentRightProduct.renderSingleProduct(rightImageElem);

}


function createProducts() {
  new Product('R2-D2 Suitcase', './img/bag.jpg');
  new Product('Banana Slicer', './img/banana.jpg');
  new Product('TP Media Stand', './img/bathroom.jpg');
  new Product('Open-toed Boots', './img/boots.jpg');
  new Product('Breakfast Station', './img/breakfast.jpg');
  new Product('Meatball Bubblegum', './img/bubblegum.jpg');
  new Product('Stylish Chair', './img/chair.jpg');
  new Product('Cthulhu Figure', './img/cthulhu.jpg');
  new Product('Duck-bill Muzzle', './img/dog-duck.jpg');
  new Product('Dragon Meat', './img/dragon.jpg');
  new Product('Utensil Pen Cap', './img/pen.jpg');
  new Product('Pet Dust Boots', './img/pet-sweep.jpg');
  new Product('Pizza Shears', './img/scissors.jpg');
  new Product('Shark Sleepsack', './img/shark.jpg');
  new Product('Infant Sweep Suit', './img/sweep.png');
  new Product('Tauntaun Sleepsack', './img/tauntaun.jpg');
  new Product('Unicorn Meat', './img/unicorn.jpg');
  new Product('Tentacle USB', './img/usb.gif');
  new Product('Watering Can', './img/water-can.jpg');
  new Product('Wine Glass', './img/wine-glass.jpg');
}




function handleClick(event) {
  alert(event.target.id);
  let id = event.target.id;

  let select = null;

  if (id === 'left_product_img' || id === 'left_product_h2') {
    select = currentLeftProduct;
    console.log('left')
  } else if (id === 'middle_product_img' || id === 'middle_product_h2') {
    select = currentMiddleProduct;
    console.log('middle')
  } else if (id === 'right_product_img' || id === 'right_product_h2') {
    console.log('right');
    select = currentRightProduct;
  }
  if (select) {
    select.votes++;
    totalRounds++;
    alert(select);
    chooseThreeProducts();
  }
  if (totalRounds === 10) {
    // turn off event listener
    // render results
  }
}


// event listener for click
  // what are we listening to? 
  // what happens
    // what are we listening to
    // for
    // what happens when we hear it

listenerElem.addEventListener('click', handleClick);
// function that will render images
// make sure we don't have previous images round to round
// function that selects 3 random images
// track total votes
// renders results
createProducts();
chooseThreeProducts();