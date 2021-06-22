'use strict';

// 10 rounds of voting
// listen for an event
  // - what element are we listening to?
  // - what are we going to do when we hear it?
    // - tally the votes
    // has to be an image, if it isn't we are going to do nothing
    // get new goats after voting
    // after we reach 10 rounds of voting update the results // update li with tallys

// no table today just record in li
// array of goats
// goat objects from a goat constructor
  // - how many votes that goat got
  // - image
  // - name
  // - timesShown


// -------------------------- Global Variables ------------------------------ //
  const goatSelectorElem = document.getElementById('all_goats');
  const leftImgElem = document.getElementById('left_goat_img');
  const rightImgElem = document.getElementById('right_goat_img');
  const leftH2Elem = document.getElementById('left_goat_h2')
  const rightH2Elem = document.getElementById('right_goat_h2')
  const goatUlElem = document.getElementById('goat-clicks');
  let voteCounter = 0;
  Goat.allGoats = [];
  let leftGoat = null;
  let rightGoat = null;
  // can be attached to the prototype or just on the GOAT class/module/function
  // let allGoats = [];



// -------------------------- Constructor Function ------------------------------ //

function Goat(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  Goat.allGoats.push(this);
  // 'this' refers to a single instance of a goat
}

// -------------------------- Prototype methods ------------------------------ //

// if we render a single goat instance, we need to know is it the left or right (these could be parameters)
Goat.prototype.renderSingleGoat = function(imgPosition, h2Position) {
  imgPosition.src = this.image;
  imgPosition.alt = `this is a picture of a ${this.name}`;
  h2Position.textContent = this.name;
  this.timesShown++;
}

// smiley.renderSingleGoat(leftImgElem, leftH2Elem);


// -------------------------- Global Functions ------------------------------ //

  function pickTwoGoats() {
    // pick a random index number from the length of the goat.allGoats array
    // assign that to the left goat

    let noGoats = [leftGoat, rightGoat];
  
    while(noGoats.includes(leftGoat)) {
      let leftGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
      leftGoat = Goat.allGoats[leftGoatIndex];
    }

    while(rightGoat === leftGoat || noGoats.includes(rightGoat)) {
      let rightGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
      rightGoat = Goat.allGoats[rightGoatIndex];
    }

    rightGoat.renderSingleGoat(rightImgElem, rightH2Elem);
    leftGoat.renderSingleGoat(leftImgElem, leftH2Elem);
  }

  function renderResults() {
    goatUlElem.innerHTML = '';

    // new for loop
    for (let goat of Goat.allGoats) {
      let liElem = document.createElement('li');
      liElem.textContent = `${goat.name}: ${goat.votes}`;
      goatUlElem.appendChild(liElem);
    }

    // old for loop
    // for (let i = 0; i < Goat.allGoats.length; i++) {
    //   let goat = Goat.allGoats[i];
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${goat.name}: ${goat.votes}`;
    //   goatUlElem.appendChild(liElem);
    // }
  }

  function addGoatChart() {
    // get our data sets- goatnumbers
    // goat names
    // times shown

    const goatNamesArray = [];
    const goatVotesArray = [];
    const goatShownArray = [];

    // works to loop through arrays and objects
    // keyword OF gets us the element that is within that space
    // let goat IN Goat.allGoats I would get the index number
    // let index in Goat.allGoats ------ Goat.allGoats[index]
    for (let goat of Goat.allGoats) {
      goatNamesArray.push(goat.name);
      goatVotesArray.push(goat.votes);
      goatShownArray.push(goat.timesShown);
    }

    // for (let i = 0; i < Goat.allGoats.length; i++) {
    //   let goat = Goat.allGoats[i];
    //   goatNamesArray.push(goat.name);
    //   goatVotesArray.push(goat.votes);
    //   goatShownArray.push(goat.timesShown);
    // }

    const ctx = document.getElementById('goatChart').getContext('2d');

    const goatChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: goatNamesArray,
          datasets: [{
              label: '# of Votes',
              data: goatVotesArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }, {
            label: '# of Times Shown',
            data: goatShownArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

  }


  function handleClick(event) {
    // prevent default only needs to happen on forms
    let id = event.target.id
    // they have to click on: right_goat_img or left_goat_img for us to cout their vote
    // otherwise we won't do anything - except tell them try again
    if (id === 'right_goat_img' || id === 'left_goat_img') {
      // update the goat that was voted on with votes
      // render new goats
      voteCounter++;
      if (id === 'right_goat_img') {
        rightGoat.votes++;
      } else {
        leftGoat.votes++;
      }
      pickTwoGoats();
    } else {
      alert('try again');
    }
    if (voteCounter === 10) {
      renderResults();
      addGoatChart();
      // turn off the listener
      goatSelectorElem.removeEventListener('click', handleClick);
    }
  }



  // -------------------------- Event Listeners ------------------------------ //

  goatSelectorElem.addEventListener('click', handleClick);
  


  // -------------------------- call functions ------------------------------ //
new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Away', './images/goat-away.jpg')
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg')
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');
// console.log(Goat.allGoats);
// Goat.allGoats[0].renderSingleGoat(leftImgElem, leftH2Elem);
pickTwoGoats();
