'use strict';

// - global variables -//
// all of the targets for our page
const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const salesTableElem = document.getElementById('salesInfo');
const theadElem = document.createElement('thead');
salesTableElem.appendChild(theadElem);
const tbodyElem = document.createElement('tbody');
salesTableElem.appendChild(tbodyElem);
const tfootElem = document.createElement('tfoot');
salesTableElem.appendChild(tfootElem);

// - constructor for the cookie stores - //

function CookieStore(location, minCust, maxCust, avgCookieSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;

  // optionally push here, that is ok
}

let seattle =  new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

CookieStore.prototype.stores = [];
CookieStore.prototype.stores.push(seattle, tokyo, dubai, paris, lima);

// - prototype methods - //

// determine an avg cust number
CookieStore.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}
// create sales array
CookieStore.prototype.createSalesArray = function() {
  this.hourlySales = [];
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let sale = Math.floor(this.custPerHour() * this.avgCookieSales);
    this.hourlySales.push(sale);
  }
}

// render one stores row
CookieStore.prototype.renderStoreRow = function() {
  // access the body tbodyElem - parent
  // make a variable to hold the daily totals
  let dailyTotal = 0;
  // create a row
  const rowElem = document.createElement('tr');
  // append the row to the parent
  tbodyElem.appendChild(rowElem);
  // make th for location
  const locationThElem = document.createElement('th');
  locationThElem.textContent = this.location;
  rowElem.appendChild(locationThElem)
  // iterate through this.hourlySales to add td to my row
  for (let i = 0; i < this.hourlySales.length; i++) {
    dailyTotal += this.hourlySales[i];
    const tdElem = document.createElement('td');
    tdElem.textContent = this.hourlySales[i];
    rowElem.appendChild(tdElem);
  }
  // add up all the sales for the day and put them in a final cell for totals
  const tdElemTotal = document.createElement('td');
  tdElemTotal.textContent = dailyTotal
  rowElem.appendChild(tdElemTotal);
}


// - global functions - //

function updateStoresWithSales(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].createSalesArray();
  }
}

// puts the header up - hours of operation
function renderHeader() {
  //theadElem -parent
  // make a row to go in my thead
  const rowElem = document.createElement('tr');
  theadElem.appendChild(rowElem);
  // a blank cell
  const blankThElem = document.createElement('th');
  rowElem.appendChild(blankThElem);
  // iterate through my hours of operation and add th's for each hour
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const thElem = document.createElement('th');
    thElem.textContent = hoursOfOperation[i];
    rowElem.appendChild(thElem);
  }
  const thElemTotals = document.createElement('th');
    thElemTotals.textContent = 'Totals'
    rowElem.appendChild(thElemTotals);
}


// make a function calls render on all of the store rows
function renderAllStoreRows(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].renderStoreRow();
    // seattle.renderStoreRow()
  }
}

// renders a footer
function createFooter() {
  // access the footer elem tfootElem parent
  // variable for hourly total
  let hourlyTotal = 0;
  // variable for all hours total
  let grandTotal = 0;
  // I make tr for the data to go to and append to footer
  const rowElem = document.createElement('tr');
  tfootElem.appendChild(rowElem);
  // I need to look at every hour of the day
  //--
  for (let i = 0; i < hoursOfOperation.length; i++) {
  // for each hour of the day I need to look at the sales for each store AT THAT HOUR
  //--
    for (let j = 0; j < CookieStore.prototype.stores.length; j++) {
      // let timeOfSale = .hourlySales[i];
      // let currentStore = CookieStore.prototype.stores[j];
      let currentStoreAtCurrentHour = CookieStore.prototype.stores[j].hourlySales[i];
      hourlyTotal += currentStoreAtCurrentHour;
    }
  // add a th for every hourly total
  // reset the hourly total to 0
  //---
  const hourlyThElem = document.createElement('th');
  hourlyThElem.textContent = hourlyTotal;
  rowElem.appendChild(hourlyThElem);
  grandTotal += hourlyTotal;
  hourlyTotal = 0;
  }
  // add a th for the grand total
  const grandThElem = document.createElement('th');
  grandThElem.textContent = grandTotal;
  rowElem.appendChild(grandThElem);
}

// - call our functions - //

updateStoresWithSales(CookieStore.prototype.stores);
console.log(CookieStore.prototype.stores);
renderHeader();
renderAllStoreRows(CookieStore.prototype.stores);
createFooter();