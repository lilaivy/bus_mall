'use strict';
var nameArray = [];
var uniquePictures = [];
var previousSet = [];
var Picture = function (name,filePath){
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
};

var changeBack = localStorage.getItem('nameArray');
if(changeBack){
  nameArray = JSON.parse(changeBack);
} else {
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

  nameArray = [bag, banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog_duck,dragon,pen,pet_sweep,scissors,shark,sweep,tauntaun,unicorn,usb,water_can,wine_glass];
};

var pathArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

//this generates one random image
var newImage;
var min = 0;
var max = pathArray.length;
var randomImage = function (){
  for(var i = 0; i < pathArray.length; i++)
    var randomNum = Math.floor((Math.random(max - min) + min) * pathArray.length);
  newImage = pathArray[randomNum];
  if (previousSet.indexOf(newImage) === -1) {
    return newImage;
  } else {
    return randomImage();
  }
};

//this makes sure that the random image I pick is unique to my hand.
function isUniqueItem(card, hand) {
  for (var i = 0; i < hand.length; i++) {       
    if(card === hand[i]) {
      return false;
    }
  }
  return true;    //cannot be an else, because you have to go through each item in hand.
};


//This creates array of 3 unique items.
var showPictures = function(){
  var pictureIdArray = ['first','second','third'];
  uniquePictures = [];
  while(uniquePictures.length != 3) {
    var imageInHand = randomImage();
    if(isUniqueItem(imageInHand, uniquePictures)){
      uniquePictures.push(imageInHand);
    }
  }

//This puts three random images on the screen and tracks times shown.
  for (var i = 0; i < pictureIdArray.length; i++){
    var imageTag = document.getElementById (pictureIdArray[i]);
    var imageShown = uniquePictures[i];
    imageTag.setAttribute ('src',imageShown); //You can also use:  threePictures.src = randomImage();
    for (var j = 0; j < pathArray.length; j++){
      if (imageShown === nameArray[j].filePath){
        nameArray[j].timesShown++;
      }
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
  previousSet = uniquePictures;

  if (totalClicks > 25){
    var objectString = JSON.stringify(nameArray);
    localStorage.setItem('nameArray', objectString);
    resultsChart();
    return;
  };

  //This calculates how many times each image is clicked.
  var clicked = event.target.getAttribute('src');
  for (var i = 0; i < pathArray.length; i++){
    if(clicked === nameArray[i].filePath){
      nameArray[i].timesClicked ++;
    };
  }
  showPictures(); //the generates a new image set when one image is clicked
}


var resultsChart = function(){
  var ctx = document.getElementById('myChart');
  var myChartConfig = {
    type:'bar',
    data:{
      labels:['bag', 'banana,bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog_duck','dragon','pen','pet_sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water_can','wine_glass'],
      datasets:[{
        label:'Market Research Clicks Chart',
        data: [2,6,8,1],
        backgroundColor:[
          'rgba(255, 99, 132,0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75,192,192,0.2)',
          'rgba(153,102,255,0.2)'
        ],
        borderColor:[
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235,1)',
          'rgba(75,192,192, 1)',
          'rgba(153,102,255,1)'
        ],
        borderWidth: 5
      }]
    },
    options:{
      scales:{
        yAxis:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  };
  var renderedChart = new Chart(ctx, myChartConfig);
  console.log(renderedChart, 'this works');
};

