// Datum do kog se odbrojava
var countDownDate = new Date("April 22, 2024 13:47:11").getTime();

// 4 canvasa za brojače
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

// Frejm animacije je 300x200px
const CANVAS_WIDTH = canvas1.width = canvas2.width = canvas3.width = canvas4.width = 300;
const CANVAS_HEIGHT = canvas1.height = canvas2.height = canvas3.height = canvas4.height = 200;
const spriteWidth = 300;
const spriteHeight = 200;

const numImage = new Image();
numImage.src = 'resources/SpriteV4.png';

// Animacije imaju 12 frejmova
const numOfSprites = 12;

// def vrednosti pomoćnih
let numFrameS = 0;
let numFrameM = 0;
let numFrameH = 0;
let numFrameD = 0;
let curS = 0;
let curM = 0;
let curH = 0;
let curD = 0;

// Countdown update
var x = setInterval(function() {

  // Trenutno vreme
  var now = new Date().getTime();

  // Razlika između trenutnog i vremena do kojeg odbrojavamo
  var distance = countDownDate - now;

    
  // Računanje vremena
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
 
  // Ispis vremena za testiranje
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    numFrameS = numFrameM = numFrameH = numFrameD = 11;
    seconds = minutes = hours = days = 0;
    curS = curM = curH = curD = 0;
  }

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

  /*
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  */

  
}, 40);
// 40 = 25fps

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
