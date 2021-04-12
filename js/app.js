'use strict';


let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');



let button = document.getElementById('button');
//to hide button
button.style.display = 'none';


//
let leftImageIndex;
let centerImageIndex;
let rightImageIndex;



let maxClick = 25;
let userClickCounter = 0;




// Pascal
function Prodect(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    Prodect.allProdect.push(this)
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
new Prodect('usb', '../img/usb.gif');
new Prodect('water-can', './img/water-can.jpg');
new Prodect('wine-glass', './img/wine-glass.jpg');
//console.log(Prodect);



function getRandomIndex() {
    return Math.floor(Math.random() * Prodect.allProdect.length);
}


function renderImages() {

    leftImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

    while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || rightImageIndex === centerImageIndex) {
        //leftImageIndex=getRandomIndex();
        centerImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
    }


    leftImageElement.src = Prodect.allProdect[leftImageIndex].source;
    centerImageElement.src = Prodect.allProdect[centerImageIndex].source;
    rightImageElement.src = Prodect.allProdect[rightImageIndex].source;

}





renderImages();



// when uesr click
/*
  leftImageElement.addEventListener('click',handleUserClick);
  centerImageElement.addEventListener('click',handleUserClick);
  rightImageElement.addEventListener('click',handleUserClick);*/
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

        } else {
            Prodect.allProdect[rightImageIndex].votes++;

        }

        Prodect.allProdect[leftImageIndex].shown++;
        Prodect.allProdect[centerImageIndex].shown++;
        Prodect.allProdect[rightImageIndex].shown++;



        //console.log(Prodect.allProdect);
        renderImages();


    } else {
        //  remove event listener

        /* 
         leftImageElement.removeEventListener('click',handleUserClick);
         centerImageElement.removeEventListener('click',handleUserClick);
         rightImageElement.removeEventListener('click',handleUserClick);*/
        partShowUser.removeEventListener('click', handleUserClick);

        //to apper button
        button.style.display = 'block';

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

        } //end fun
    }//end if else










}