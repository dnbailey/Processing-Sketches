// length of lines
const length = 50

// angle of turn
const angle = 60

// n: 8
let generations = 20

// axiom: A
const axiom = "A"
let sentence = axiom

// rules: (A → +B−A−B+), (B → −A+B+A−)
const rules = [
  {
    input: 'A',
    result: '-A-B-'
  },
  {
    input: 'B',
    result: 'A'
  }
]

function generate () {
  for (generations; generations > 0; generations --) {
    let nextSentence = ""
    for (i = 0; i < sentence.length; i ++) {
      let current = sentence.charAt(i)
      let found = false

      for (j = 0; j < rules.length; j ++) {
        if (current === rules[j].input) {
          found = true
          nextSentence += rules[j].result
          break
        }
      }

      if (!found) {
        nextSentence += current
      }
    }
    sentence = nextSentence
    turtle()
  }
}

function turtle () {
  resetMatrix()
  translate(width / 2, height / 2)
  stroke(0)
  for (i = 0; i < sentence.length; i ++) {
    let current = sentence.charAt(i)

    if (current == '+') {
      rotate(radians(angle))
    } else if (current == '-') {
      rotate(- radians(angle))
    } else if (current == '[') {
      push()
    } else if (current == ']') {
      pop()
    } else {
      line(0, 0, 0, -length)
      translate(0, -length)
    }
  }
}

function setup () {
  createCanvas(800, 600)
  background(255)
}

function draw () {
  noLoop()
  generate()
}
