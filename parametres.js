let b;

class Parametre {

  constructor(x, y, r, image) {
    this.x = x;
    this.y = y;
    this.r = r
    this.image = image;
  }


  click(mx, my) {
    b = dist(this.x, this.y, mx, my)
    if (b < this.r && mouseIsPressed && mouseButton == LEFT) {
      return true;
    } else {
      return false;
    }
  }

  draw(mx, my) {
    b = dist(this.x, this.y, mx, my)
    noStroke();
    if (b < this.r) {
      fill(35, 130, 255);
    } else {
      fill(75, 170, 255);
    }
    ellipse(this.x, this.y, this.r*2, this.r*2);
    image(this.image, this.x-29, this.y-29, this.r*1.5, this.r*1.5);
  }
}