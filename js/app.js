'use strict';


let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');



/*let button = document.getElementById('button');
//to hide button
button.style.display = 'none';*/



let leftImageIndex;
let centerImageIndex;
let rightImageIndex;



let maxClick = 25;
let userClickCounter = 0;

let namesArr = [];
let votesArr = [];
let shownArr = [];


// Pascal
function Prodect(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;

    Prodect.allProdect.push(this);
    namesArr.push(this.name);
}

Prodect.allProdect = [];


// instantces
new Prodect('bag', './img/bag.jpg');
new Prodect('banana', './img/banana.jpg');
new Prodect('bathroom', './img/bathroom.jpg');
new Prodect('boots', './img/boots.jpg');
new Prodect('breakfast', './img/breakfast.jpg');
new Prodect('bubblegum', './img/bubblegum.jpg');
new Prodect('chair', './img/chair.jpg');
new Prodect('cthulhu', './img/cthulhu.jpg');
new Prodect('dog-duck', './img/dog-duck.jpg');
new Prodect('dragon', './img/dragon.jpg');
new Prodect('pen', './img/pen.jpg');
new Prodect('pet-sweep', './img/pet-sweep.jpg');
new Prodect('scissors', './img/scissors.jpg');
new Prodect('shark', './img/shark.jpg');
new Prodect('sweep', './img/sweep.png');
new Prodect('tauntaun', './img/tauntaun.jpg');
new Prodect('unicorn', './img/unicorn.jpg');
new Prodect('usb', './img/usb.gif');
new Prodect('water-can', './img/water-can.jpg');
new Prodect('wine-glass', './img/wine-glass.jpg');
//console.log(Prodect);



function getRandomIndex() {
    return Math.floor(Math.random() * Prodect.allProdect.length);
}




var shownImage = [];

function renderImages() {

    leftImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();


    while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || rightImageIndex === centerImageIndex || shownImage.includes(leftImageIndex) || shownImage.includes(centerImageIndex) || shownImage.includes(rightImageIndex)) {
        leftImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();


    }


    leftImageElement.src = Prodect.allProdect[leftImageIndex].source;

    Prodect.allProdect[leftImageIndex].shown++;

    centerImageElement.src = Prodect.allProdect[centerImageIndex].source;

    Prodect.allProdect[centerImageIndex].shown++;

    rightImageElement.src = Prodect.allProdect[rightImageIndex].source;

    Prodect.allProdect[rightImageIndex].shown++;


    // arrIndex.splice(0,3);


    shownImage[0] = leftImageIndex;
    shownImage[1] = centerImageIndex;
    shownImage[2] = rightImageIndex;

    console.log("the end of function ", shownImage);

}


renderImages();



// when uesr click

partShowUser.addEventListener('click', handleUserClick);




function handleUserClick(event) {

    //console.log(event.target.id);

    // add to attempts
    userClickCounter++;
    //console.log(userClickCounter);

    if (userClickCounter <= maxClick) {

        if (event.target.id === 'left-image') {
            Prodect.allProdect[leftImageIndex].votes++;

        } else if (event.target.id === 'center-image') {
            Prodect.allProdect[centerImageIndex].votes++;

        } else if (event.target.id === 'right-image') {
            Prodect.allProdect[rightImageIndex].votes++;

        } else {


            alert("Please click on the photos");
            userClickCounter--;
        }

        //console.log(Prodect.allProdect);
        renderImages();
    } else {

        //  remove event listener
        partShowUser.removeEventListener('click', handleUserClick);

        for (let i = 0; i < Prodect.allProdect.length; i++) {
            votesArr.push(Prodect.allProdect[i].votes);
            shownArr.push(Prodect.allProdect[i].shown);

        }

        chart();

        //to apper button
        /*  button.style.display = 'block';
  
          button.addEventListener('click', handelButton);
  
  
  
          function handelButton() {
  
              let list = document.getElementById('results-list');
  
              let prodectResult;
  
              for (let i = 0; i < Prodect.allProdect.length; i++) {
                  prodectResult = document.createElement('li');
                  list.appendChild(prodectResult);
  
                  prodectResult.textContent = `${Prodect.allProdect[i].name} had ${Prodect.allProdect[i].votes}, and was seen ${Prodect.allProdect[i].shown} times.`;
              }
  
  
              button.removeEventListener('click', handelButton);
  
          } //end fun*/


    }//end if else


}


// chart.js
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'Prodect votes',
                    data: votesArr,
                    backgroundColor: [
                        '#45526c',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Prodect shown',
                    data: shownArr,
                    backgroundColor: [
                        '#f8a488',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {

            legend: {
                labels: {
                    color: 'black'

                    // This more specific font property overrides the global property

                }
            }
        }
    });

}
