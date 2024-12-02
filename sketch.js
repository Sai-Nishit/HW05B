let clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(30, 30, 50); 

  if (frameCount % 60 === 0) {
    let newCloud = {
      x: random(width),
      y: height,
      size: random(30, 80),
      speed: random(1, 3),
      color: color(200, 200, 255, random(100, 200)),
    };
    clouds.push(newCloud);
  }

  for (let i = clouds.length - 1; i >= 0; i--) {
    let c = clouds[i];
    fill(c.color);
    ellipse(c.x, c.y, c.size);
    c.y -= c.speed; 

    if (c.y + c.size < 0) {
      clouds.splice(i, 1);
    }
  }

  if (mouseIsPressed) {
    fill(255, 255, 255, 150);
    ellipse(mouseX, mouseY, 100, 50); 
  }

  fill(255, 200);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Take a deep breath. Watch the clouds float away.", width / 2, height - 50);
}
