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
var sweep = new Picture ('sweep', 'images/sweep.jpg');
var tauntaun = new Picture ('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Picture ('unicorn', 'images/unicorn.jpg');
var usb = new Picture ('usb', 'images/usb.gif');
var water_can = new Picture ('water_can', 'images/water-can.jpg');
var wine_glass = new Picture ('wine_glass', 'images/wine_glass.jpg');

console.log (bubblegum);

var imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog_duck, dragon, pen, pet_sweep, scissors, shark, sweep, tauntaun, unicorn, usb, water_can, wine_glass];
var idArray = ['first','second','third'];

var min = 0;
var max = imageArray.length;
function randomImage(){
  for(var i = 0; i < imageArray.length; i++)
    var randomNum = Math.floor((Math.random(max - min) + min) * imageArray.length);
  console.log (randomNum);
  var newImage = imageArray[randomNum];
  console.log(newImage);
  var imagePath = newImage.filepath;

};

randomImage();

console.log(imagePath);