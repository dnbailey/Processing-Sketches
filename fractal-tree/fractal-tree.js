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
  translate(width / 2, height)
  stroke(255)

  branch(length, angle)
}

function branch (length, angle) {
  line(0, 0, 0, -length)
  translate(0, -length)
  if (length > 2) {
    rotate(angle)
    branch(length * .67, angle)
  }
}
