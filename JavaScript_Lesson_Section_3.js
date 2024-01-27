
var xpos, ypos;
var horizontalSpeed, verticalSpeed;
var barY;

function setup() {
  createCanvas(400, 400);
  xpos = 200;
  ypos = 200;
  horizontalSpeed = 3;
  verticalSpeed = 3;
  barY = height / 2;
}

function draw() {
  background(220);
  xpos += horizontalSpeed;
  ypos += verticalSpeed;

  if (xpos > width - 25 || xpos < 25) {
    horizontalSpeed *= -1;
  }

  if (ypos > height - 25 || ypos < 25) {
    verticalSpeed *= -1;
  }

  drawCircle(xpos, ypos, 50);
  drawBar();
}

function drawCircle(x, y, size) {
  fill('blue');
  noStroke();
  ellipse(x, y, size, size);
}

function drawBar() {
  rect(350, barY, 20, 100);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    barY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    barY += 10;
  }
}
