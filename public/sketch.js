let deck;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  deck = new Deck();
  deck.shuffle();
}

function draw() {
  // put drawing code here
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
