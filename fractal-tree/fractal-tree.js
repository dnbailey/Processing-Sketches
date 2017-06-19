/*
  Fractal Tree

  Based on the YouTube tutorial by CodeTrain
  https://www.youtube.com/watch?v=0jjeOYMjmDU

*/

function setup () {
  createCanvas(700, 700)
}

function draw () {
  // Set inital length and angle for branches
  const length = 100
  const angle = PI / 4

  background(51)

  // Set the orign to be the bottom and centered
  translate(width / 2, height)
  stroke(255)

  branch(length, angle)
}

function branch (length, angle) {
  // Draw initial line
  line(0, 0, 0, -length)
  // Move the origin to the end of the branch
  translate(0, -length)

  // Recusive loop to create branches
  if (length > 2) { // Prevent stack overload
    rotate(angle)
    branch(length * 0.67, angle)
  }
}
