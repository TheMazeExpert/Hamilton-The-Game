let t = 50
let te = 50
let tee = 50

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  fill (200, 0, 10)
  circle (t, te, 50)
  if (keyIsDown()) {
  if (key == "d") t = t + 10
  if (key == "a") t = t - 10
  if (key == "s") te = te + 10 
  if (key == "w") te = te - 10
} }
function keyPressed() {
  if (key == "d") t = t + 10
  if (key == "a") t = t - 10
  if (key == "s") te = te + 10
  if (key == "w") te = te - 10
}

