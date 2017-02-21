'use strict';

var Image = function(name,filePath){
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
};

var bag = new Image ('bag', 'images/bag.jpg');
var banana = new Image ('banana','images/banana.jpg');
var bathroom = new Image ('bathroom', 'images/bathroom.jpg');
var boots = new Image ('boots', 'images/boots.jpg');
var breakfast = new Image ('breakfast', 'images/breakfast.jpg');
var bubblegum = new Image ('bubblegum', 'images/bubblegum.jpg');
var chair = new Image ('chair', 'images/chair.jpg');
var cthulhu = new Image ('cthulhu', 'images/cthulhu.jpg');
var dog_duck = new Image ('dog_duck', 'images/dog-duck.jpg');
var dragon = new Image ('dragon', 'images/dragon.jpg');
var pen = new Image ('pen', 'images/pen.jpg');
var pet_sweep = new Image ('pet_sweep', 'images/pet-sweep.jpg');
var scissors= new Image ('scissors', 'images/scissors.jpg');
var shark= new Image ('shark', 'images/shark.jpg');
var sweep= new Image ('sweep', 'images/sweep.jpg');
var tauntaun= new Image ('tauntaun', 'images/tauntaun.jpg');
var unicorn= new Image ('unicorn', 'images/unicorn.jpg');
var usb= new Image ('usb', 'images/usb.gif');
var water_can= new Image ('water_can', 'images/water-can.jpg');
var wine_glass= new Image ('wine_glass', 'images/wine_glass.jpg');