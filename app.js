'use strict';

// var Picture = function (name,filePath){
//   this.name = name;
//   this.filePath = filePath;
//   this.timesShown = 0;
//   this.timesClicked = 0;
// };

// var bag = new Picture ('bag', 'images/bag.jpg');
// var banana = new Picture ('banana','images/banana.jpg');
// var bathroom = new Picture ('bathroom', 'images/bathroom.jpg');
// var boots = new Picture ('boots', 'images/boots.jpg');
// var breakfast = new Picture ('breakfast', 'images/breakfast.jpg');
// var bubblegum = new Picture ('bubblegum', 'images/bubblegum.jpg');
// var chair = new Picture ('chair', 'images/chair.jpg');
// var cthulhu = new Picture ('cthulhu', 'images/cthulhu.jpg');
// var dog_duck = new Picture ('dog_duck', 'images/dog-duck.jpg');
// var dragon = new Picture ('dragon', 'images/dragon.jpg');
// var pen = new Picture ('pen', 'images/pen.jpg');
// var pet_sweep = new Picture ('pet_sweep', 'images/pet-sweep.jpg');
// var scissors = new Picture ('scissors', 'images/scissors.jpg');
// var shark = new Picture ('shark', 'images/shark.jpg');
// var sweep = new Picture ('sweep', 'images/sweep.jpg');
// var tauntaun = new Picture ('tauntaun', 'images/tauntaun.jpg');
// var unicorn = new Picture ('unicorn', 'images/unicorn.jpg');
// var usb = new Picture ('usb', 'images/usb.gif');
// var water_can = new Picture ('water_can', 'images/water-can.jpg');
// var wine_glass = new Picture ('wine_glass', 'images/wine_glass.jpg');

// console.log (bag, banana,bathroom,boots,breakfast,bubblegum, chair,cthulhu);

// var imageArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.jpg', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

// //this generates random image
// var newImage;
// var min = 0;
// var max = imageArray.length;
// function randomImage(){
//   for(var i = 0; i < imageArray.length; i++)
//     var randomNum = Math.floor((Math.random(max - min) + min) * imageArray.length);
//   console.log (randomNum);
//   newImage = imageArray[randomNum];
//   return newImage;
// };

// //This puts 3 random images on the screen.
// var showPictures = function(){
//   var pictureIdArray = ['first','second','third'];
//   var ul = document.getElementById ('picture_set');
//   for (var i = 0; i < pictureIdArray.length; i++){
//     var threePictures = document.createElement('img');
//     threePictures.setAttribute ('src',randomImage()); //You can also use:  threePictures.src = randomImage(); 
//     ul.appendChild(threePictures);
//   }
// };
// showPictures();

// var clickArea = document.getElementById('click_area');
// clickArea.addEventListener('click', clickHandler);
// function clickHandler(event){
//   event.preventDefault();
//   alert(event.target.src);

  
//log the click in an array && run Show pictures function.

// }

var ctx = document.getElementById('myChart');
var myChartConfig = {
  type:'bar',
  data:{
    labels:['boots', 'bubblegum', 'chair', 'pet_sweep'],
    datasets:[{
      label:'Market Research Clicks Chart',
      data:[5,2,6,9],
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
