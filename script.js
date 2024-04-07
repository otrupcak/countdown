// Set the date we're counting down to
var countDownDate = new Date("April 22, 2024 11:23:25").getTime();
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

const CANVAS_WIDTH = canvas1.width = canvas2.width = canvas3.width = canvas4.width = 300;
const CANVAS_HEIGHT = canvas1.height = canvas2.height = canvas3.height = canvas4.height = 200;
const spriteWidth = 300;
const spriteHeight = 200;
const numImage = new Image();
numImage.src = 'SpriteV3.png';
let numFrameS = 0;
let numFrameM = 0;
let numFrameH = 0;
let numFrameD = 0;
const numOfSprites = 12;
let curS = 0;
let curM = 0;
let curH = 0;
let curD = 0;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Sprite animation
  if (curS != seconds){
    numFrameS = 0;
    curS = seconds;
  }
  animateSeconds(seconds);

  if (curM != minutes){
    numFrameM = 0;
    curM = minutes;
  }
  animateMinutes(minutes);

  if (curH != hours){
    numFrameH = 0;
    curH = hours;
  }
  animateHours(hours);

  if (curD != days){
    numFrameD = 0;
    curD = days;
  }
  animateDays(days%30);

  if (numFrameS < numOfSprites-1){
    numFrameS++;
  }
  else{
    numFrameS = numOfSprites-1;
  }
  
  if (numFrameM < numOfSprites-1){
    numFrameM++;
  }
  else{
    numFrameM = numOfSprites-1;
  }

  if (numFrameD < numOfSprites-1){
    numFrameD++;
  }
  else{
    numFrameD = numOfSprites-1;
  }

  if (numFrameH < numOfSprites-1){
    numFrameH++;
  }
  else{
    numFrameH = numOfSprites-1;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 40);

function animateSeconds(num){

      ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx4.drawImage(numImage,numFrameS*spriteWidth,num*spriteHeight,spriteWidth,spriteHeight,0,0,300,200);
      
}

function animateMinutes(num){

      ctx3.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx3.drawImage(numImage,numFrameM*spriteWidth,num*spriteHeight,spriteWidth,spriteHeight,0,0,300,200);
      
}

function animateHours(num){

      ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx2.drawImage(numImage,numFrameH*spriteWidth,num*spriteHeight,spriteWidth,spriteHeight,0,0,300,200);
      
}

function animateDays(num){

      ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx1.drawImage(numImage,numFrameD*spriteWidth,num*spriteHeight,spriteWidth,spriteHeight,0,0,300,200);
      
}
