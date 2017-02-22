'use strict';

var Picture = function (name,filePath){
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
};
var bag = new Picture ('bag', 'images/bag.jpg');
var banana = new Picture ('banana','images/banana.jpg');
var bathroom = new Picture ('bathroom', 'images/bathroom.jpg');
var boots = new Picture ('boots', 'images/boots.jpg');
var breakfast = new Picture ('breakfast', 'images/breakfast.jpg');
var bubblegum = new Picture ('bubblegum', 'images/bubblegum.jpg');
var chair = new Picture ('chair', 'images/chair.jpg');
var cthulhu = new Picture ('cthulhu', 'images/cthulhu.jpg');
var dog_duck = new Picture ('dog_duck', 'images/dog-duck.jpg');
var dragon = new Picture ('dragon', 'images/dragon.jpg');
var pen = new Picture ('pen', 'images/pen.jpg');
var pet_sweep = new Picture ('pet_sweep', 'images/pet-sweep.jpg');
var scissors = new Picture ('scissors', 'images/scissors.jpg');
var shark = new Picture ('shark', 'images/shark.jpg');
var sweep = new Picture ('sweep', 'images/sweep.png');
var tauntaun = new Picture ('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Picture ('unicorn', 'images/unicorn.jpg');
var usb = new Picture ('usb', 'images/usb.gif');
var water_can = new Picture ('water_can', 'images/water-can.jpg');
var wine_glass = new Picture ('wine_glass', 'images/wine-glass.jpg');

console.log (bag, banana,bathroom,boots,breakfast,bubblegum, chair,cthulhu);

var pathArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

var nameArray = [bag, banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog_duck,dragon,pen,pet_sweep,scissors,shark,sweep,tauntaun,unicorn,usb,water_can,wine_glass];


//this generates random image
var newImage;
var min = 0;
var max = pathArray.length;
function randomImage(){
  for(var i = 0; i < pathArray.length; i++)
    var randomNum = Math.floor((Math.random(max - min) + min) * pathArray.length);
  console.log (randomNum);
  newImage = pathArray[randomNum];
  return newImage;
};

//This puts 3 random images on the screen.
var showPictures = function(){
  var pictureIdArray = ['first','second','third'];
  for (var i = 0; i < pictureIdArray.length; i++){
    var imageShown = randomImage();
    var imageTag = document.getElementById (pictureIdArray[i]);
    imageTag.setAttribute ('src',imageShown); //You can also use:  threePictures.src = randomImage();
    console.log('testing', nameArray[i].filePath, imageShown, imageShown === nameArray[i].filepath);
  }
  for (var j = 0; j < pathArray.length; j++){
    if (imageShown === nameArray[j].filePath){
      nameArray[j].timesShown++;
      // console.log('testing',nameArray[i]);
    }
  }

};
showPictures();



//this sets the EventListener and clickHandler to start storing clicks
var clickArea = document.getElementById('click_area');
clickArea.addEventListener('click', clickHandler);
var totalClicks = 0;

function clickHandler(event){
  event.preventDefault();
  totalClicks++;
  console.log('testing', totalClicks);
  var clicked = event.target.getAttribute('src');
  for (var i = 0; i < pathArray.length; i++){
    if(clicked === nameArray[i].filePath){
      nameArray[i].timesClicked ++;
      console.log('testing',nameArray[i]);
      if (totalClicks < 25){
        showPictures(); //the generates a new image set when one image is clicked
      }
      else{
        return;
        console.log('Display Results Chart'); //insert Chart data here.
      }
    };
  }
}

//log the click in an array && run Show pictures function.


