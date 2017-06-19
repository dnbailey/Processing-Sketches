// axiom: A
let axiom = "A"

// rules: (A → +B−A−B+), (B → −A+B+A−)
let rules = [
  {
    input: 'A',
    result: '+B-A-B+'
  },
  {
    input: 'B',
    result: '-A+B+A-'
  }
]

console.log(rules)

function setup () {
  createCanvas(600,500)
}

function draw () {
  background(255)
}
