let myFont;
var box;
var mySong;

function preload() {
  myFont = loadFont('assets/Montserrat-Bold.otf');
  punchbag = loadImage('assets/punchbag.png');
  punch = loadImage('assets/punch.png');
  pow = loadImage('assets/pow.png');
    // mySong = loadSound('/assets/punchsound.mp3');


}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);



  // setShakeThreshold(20);





}



function draw() {
  background(154, 229, 211);
  box = 0;
  if (accelerationZ >= 20) {
    box = accelerationZ

  }

  // sacco
  imageMode(CENTER);
  image(punchbag, windowWidth / 2 + box, windowHeight / 2 - 70 + box, 560 * 0.47, 560);

if (accelerationZ >= 20) {
  image(pow, windowWidth / 2, windowHeight / 2 + 40, 200 * 1.4, 200);

}



  // guantone
  imageMode(CENTER);
  image(punch, windowWidth / 2, windowHeight + accelerationZ * 2, 530 * 1.4, 530);



}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()

}

// prevent dragging the screen around
function touchMoved() {
  return false;
}
