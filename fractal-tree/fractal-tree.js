/*
  Fractal Tree

  Based on the YouTube tutorial by CodeTrain
  https://www.youtube.com/watch?v=0jjeOYMjmDU

*/

let length = 100

function setup () {
  createCanvas(700, 700)
}

function draw () {
  background(51)
  translate(width / 2, height)

  branch(length)
}

function branch (length) {
  stroke(255)
  line(0, 0, 0, -length)
}
