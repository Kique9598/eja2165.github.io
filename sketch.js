let radius = 256;
let gap = 42;    // thickness of minute ring
let space = 12;   // spacing between rings

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(255,255,255);

  let startLoc = (3/2) * PI;

  // Seconds circle outline
  noFill();
  stroke(0);
  let sAngle = startLoc + TWO_PI * second() / 60;
  arc(0, 0, radius, radius, startLoc, sAngle);

  // Minute ring
  fill(0, 0, 255, 50);
  noStroke();
  let mAngle = startLoc + TWO_PI * (60 - minute()) / 60;
  arc(0, 0, radius - space, radius - space, mAngle, startLoc);
  
  fill(255,255,255);
  noStroke();
  circle(0,0,radius - gap + space)

  // Hour ring
  fill(255, 0, 0, 70); // red
  let hAngle = startLoc + TWO_PI * hour() / 24;
  arc(0, 0, radius - gap, radius - gap, startLoc, hAngle);
}

// Draw a circular ring segment (torus)
function drawTorus(cx, cy, rOuter, rInner, startAngle=0, endAngle=TWO_PI) {
  beginShape();

  // Outer arc
  for (let a = startAngle; a <= endAngle; a += 0.01) {
    let x = cx + cos(a) * rOuter;
    let y = cy + sin(a) * rOuter;
    vertex(x, y);
  }

  // Inner arc (reverse)
  for (let a = endAngle; a >= startAngle; a -= 0.01) {
    let x = cx + cos(a) * rInner;
    let y = cy + sin(a) * rInner;
    vertex(x, y);
  }

  endShape(CLOSE);
}
