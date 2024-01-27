
var xpos, ypos;
var horizontalSpeed, verticalSpeed;

function setup() {
  createCanvas(400, 400);
  xpos = 200;
  ypos = 200;
  horizontalSpeed = 3;
  verticalSpeed = 3;
}

function draw() {
  background(220);
  xpos += horizontalSpeed;
  ypos += verticalSpeed;
  drawCircle(xpos, ypos, 50);
}

function drawCircle(x, y, size) {
  fill('blue');
  noStroke();
  ellipse(x, y, size, size);
}
