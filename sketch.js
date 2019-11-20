let myFont;
var box;
var mySong;

function preload() {
  myFont = loadFont('assets/Montserrat-Bold.otf');
  punchbag = loadImage('assets/punchbag.png');
  punch = loadImage('assets/punch.png');
  pow = loadImage('assets/pow.png');
    mySong = loadSound('/assets/punchsound.mp3');


}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);

  //   let col = color(216,34,87);
  //   button = createButton('START');
  //   button.style('background-color', col);
  //   button.style("color", "white")
  //   button.style("border", "0px")
  //   button.style("font-size", "28px")
  //   button.style("padding", "8px")
  //   button.style("border-radius", "14px")
  //   button.position(windowWidth/2-50, windowHeight/2-20);
  //
  //
  //   button.touchStarted(
  //     function() {
  //       button.position(random(width), random(height));
  // })

  // function mousePressed() {
  //   mySong.play();
  // }

  // setShakeThreshold(20);


  function togglePlay() {
    if (mySong.isPlaying()) {
      mySong.pause();
    } else {
      mySong.loop();
    }
  }

  
}



function draw() {
  background(154, 229, 211);
  // let s = 'Take out your everyday stress.';
  // let t = 'HIT THE PUNCHING BAG!'
  // textAlign(CENTER);
  // textSize(20);
  // textStyle(BOLD);
  // text(s, windowWidth/2, windowHeight/5+70);
  // text(t, windowWidth/2, windowHeight/4+70);
  // fill('black')
  //
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
