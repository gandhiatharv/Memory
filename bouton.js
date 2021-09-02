class Bouton {

  constructor(x, y, largeur, hauteur, text, variable = 0, choix = false) {
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.choix = choix;
    this.text = text;
    this.variable = variable;
  }


  click(mx, my) {
    if (mx > this.x && mx < this.x + this.largeur && my > this.y && my < this.y + this.hauteur && this.choix == false && mouseIsPressed && mouseButton == LEFT) {
      return true;
    } else {
      return false;
    }
  }

  draw(mx, my) {
    noStroke();
    if (mx > this.x && mx < this.x + this.largeur && my > this.y && my < this.y + this.hauteur && this.choix == false) {
      fill(35, 130, 255);
    } else {
      fill(75, 170, 255);
    }
    if (this.choix == true) {
      fill(15, 110, 255);
    }
    rect(this.x, this.y, this.largeur, this.hauteur, 7);
    fill(255);
    text(this.text, this.x + this.largeur / 2, this.y + this.hauteur / 2 + this.hauteur/3.3);
  }
}