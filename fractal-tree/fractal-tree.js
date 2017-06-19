/*
  Fractal Tree

  Based on the YouTube tutorial by CodeTrain
  https://www.youtube.com/watch?v=0jjeOYMjmDU

*/
let slider

function setup () {
  createCanvas(700, 700)

  slider = createSlider(0, PI / 2, PI / 4, 0.01)
  createP('Adjust the slider to change the angle of the branches.');
}

function draw () {
  // Set inital length and angle for branches
  const length = 200
  const angle = slider.value()

  background(51)

  // Set the orign to be the bottom and centered
  translate(width / 2, height)
  stroke(255)

  branch(length, angle)
}

function branch (length, angle) {
  const shrinkBy = 0.67 // Changes the length by this factor

  // Draw initial line
  line(0, 0, 0, -length)
  // Move the origin to the end of the branch
  translate(0, -length)

  // Recusive loop to create branches
  if (length > 2) { // Prevent stack overload
    push()
    rotate(angle)
    branch(length * shrinkBy, angle)
    pop()
    push()
    rotate(-angle)
    branch(length * shrinkBy, angle)
    pop()
  }
}
