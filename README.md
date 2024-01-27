
# JavaScript Zoom Lesson: Ball Bounce Game

## Summary of Last Lesson
In our previous lesson, we covered the basics of JavaScript and p5.js, including how to set up your environment, draw shapes, and handle user input. We created a simple program that draws a circle following the mouse cursor.

## Lesson Objectives
Today, we will enhance our program by introducing movement, control, and collision detection. We'll focus on:
1. Using variables to control the ball's movement.
2. Implementing conditional statements (`if` statements) for collision detection.
3. Adding a movable bar controlled by keyboard inputs.
4. Making the ball bounce off the sides of the canvas and the movable bar.

### Starting Code
```javascript
var xpos;
var ypos;

function setup() {
  createCanvas(400, 400);
  xpos = 200;
  ypos = 200;
}

function draw() {
  background(220);
  drawCircle(mouseX, mouseY, 50);
}

function drawCircle(x, y, size) {
  fill('blue');
  noStroke();
  ellipse(x, y, size, size);
}
```

## Section 1: Introducing Velocity Variables

First, we will modify our code to make the ball move on its own.

### Changes:
- Add `horizontalSpeed` and `verticalSpeed` variables.
- Use these variables to change the position of the ball.

### Updated Code:
```javascript
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
```

## Section 2: Implementing Collision Detection

Now, let's make the ball bounce off the canvas edges.

### Changes:
- Use `if` statements to reverse the direction of the ball when it hits the edges.

### Updated Code:
```javascript
// ... (previous code)

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
}
```

## Section 3: Adding a Movable Bar

We'll add a vertical bar that can be moved up and down using the arrow keys.

### Changes:
- Declare variables for the bar's position and size.
- Update the bar's position based on key presses.

### Updated Code:
```javascript
var barY;

function setup() {
  // ... (previous setup code)
  barY = height / 2;
}

function draw() {
  // ... (previous draw code)
  drawBar();
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
```

## Section 4: Ball and Bar Collision

Finally, let's make the ball bounce off the movable bar.

### Changes:
- Add collision detection between the ball and the bar.

### Updated Code:
```javascript
function draw() {
  // ... (previous draw code)

  if (xpos > 330 && ypos > barY && ypos < barY + 100) {
    horizontalSpeed *= -1;
  }
}
```

## Conclusion
In this lesson, we've enhanced our JavaScript program to create an interactive game with moving elements and collision detection. Practice modifying the code to change the game's behavior and design. Happy coding!
