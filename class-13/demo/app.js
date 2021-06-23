// a local coffee shop wants your help to build a simple application they can use to record customer orders and maintain a record of what has been ordered(for any period of any amount of time)

// create a very simple app that has two components
// a way to create an order
  // - form
  // need a way to standerdize some input so that we can display it in a consistant and predictable manner
// a place to display all past orders
  // - list - ul
// a way to save data


// scaffold our html
// in the body put a form and a ul

// --------------------- global variables ----------------------//

const formElem = document.getElementById('orderForm');
const ordersUlElem = document.getElementById('previousOrders');
Coffee.allOrders = [];


// ---------------------- constructor function ----------------------- //

function Coffee(name, size, milk, drinkType) {
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.drinkType = drinkType;
}



// ---------------------- prototype methods ----------------------- //

Coffee.prototype.renderADrink = function() {
  // create an li
  const liElem = document.createElement('li');
  // give it some content "Sara ordered a 12oz americano with soy milk"
  liElem.textContent = `${this.name} ordered a ${this.size}oz ${this.drinkType} with ${this.milk} milk`;
  // append it to the parent ordersUlElem
  ordersUlElem.appendChild(liElem);
}


// ---------------------- global functions ----------------------- //

function handleSubmit(event) {
  event.preventDefault();
  // only need to use this on forms
  // console.log(event)
  // console.log(event.target.size.value);
  let name = event.target.name.value;
  let size = event.target.size.value;
  let milk = event.target.milk.value;
  let drinkType = event.target.drinkType.value;
  makeACoffee(name, size, milk, drinkType);
  // store the coffee in local storage 
  storeDrinks()
}

function makeACoffee(name, size, milk, drinkType) {
  // run the coffee through the Coffee constructor function
  let newDrink = new Coffee(name, size, milk, drinkType)
  Coffee.allOrders.push(newDrink);
  console.log(Coffee.allOrders);
  // add that new coffee to a coffee array so we can store it
  // render that coffee as an li
  newDrink.renderADrink();
}

function storeDrinks() {
  // orders is our KEY
  // turn my array into a string
  console.log(Coffee.allOrders);
  let stringifiedOrders = JSON.stringify(Coffee.allOrders);
  console.log(stringifiedOrders);
  localStorage.setItem('orders', stringifiedOrders);
  // console.log(JSON.parse(stringifiedOrders));
}

function getDrinks() {
  // check do I have drinks in storage (orders)
  let potentialOrders = localStorage.getItem('orders');
  // if you don't have anything you will get null as value
  if (potentialOrders) {
    // turn it back from a string to an array of POJOs
    let parsedOrders = JSON.parse(potentialOrders);
    // run it back through the constructor function - REINSTANTIATE
    for (let order of parsedOrders) {
      let name = order.name;
      let size = order.size;
      let milk = order.milk;
      let drinkType = order.drinkType;
      makeACoffee(name, size, milk, drinkType);
    }

    // for (let i = 0; i < parsedOrders.length; i++) {
    //   let order = parsedOrders[i];
    //   let name = order.name;
    //   let size = order.size;
    //   let milk = order.milk;
    //   let drinkType = order.drinkType;
    //   makeACoffee(name, size, milk, drinkType);
    // }

  }
  // if so do something with them...
  // if not? NOTHING
}

// ---------------------- event listener ----------------------- //
formElem.addEventListener('submit', handleSubmit);

getDrinks();
