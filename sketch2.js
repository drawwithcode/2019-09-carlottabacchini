let myFont;

function preload() {
  myFont = loadFont('assets/Montserrat-Bold.otf');



}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);

    let col = color(216,34,87);
    button = createButton('START');
    button.style('background-color', col);
    button.style("color", "white")
    button.style("border", "0px")
    button.style("font-size", "28px")
    button.style("padding", "8px")
    button.style("border-radius", "14px")
    button.position(windowWidth/2-50, windowHeight/2-20);


    button.touchStarted(
      function() {
        window.open('game.html', '_self')

  })







}



function draw() {
  background(154, 229, 211);
  let s = 'Take out your everyday stress.';
  let t = 'HIT THE PUNCHING BAG!'
  textFont(myFont)
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
  text(s, windowWidth/2, windowHeight/5+70);
  text(t, windowWidth/2, windowHeight/4+70);
  fill('black')




}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()

}

// prevent dragging the screen around
function touchMoved() {
  return false;
}
