class Carte {

  constructor(x, y, i, j, chiffre) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.j = j;
    this.chiffre = chiffre;
    this.largeur = 70;
    this.hauteur = 90;
    this.hide = true;
    this.dos = loadImage("images/dosRouge.png");
    this.face = loadImage("images/face.png");
    this.centre = this.dos;
    this.bordureBlanche = loadImage("images/bordureBlanche.png");
    this.bordureVerte = loadImage("images/bordureVerte.png");
    this.bordureOrange = loadImage("images/bordureOrange.png");
    this.bordureBleue = loadImage("images/bordureBleue.png");
    this.bordure = this.bordureBlanche;
    this.valide = false;
    this.choix = false;
  }

  draw() {
    if (this.valide == 3) {
      this.bordure = this.bordureVerte;
    } else  if (this.valide == 1) {
      this.bordure = this.bordureOrange;
    } else if (this.valide == 2) {
      this.bordure = this.bordureBleue;
    } else {
      this.bordure = this.bordureBlanche;
    }
    if (this.hide == true) {
      this.centre = this.dos;
    } else {
      this.centre = this.face;
      }
    
    image(this.centre, this.x, this.y, this.largeur, this.hauteur);
    image(this.bordure, this.x, this.y, this.largeur, this.hauteur);
  
    if (this.hide == false) {
      fill(0);
      noStroke()
      textSize(40);
      text(this.chiffre, this.x + this.largeur / 2, this.y + this.hauteur / 2 + 17);
    
    }
  }

  click(mx, my, joueur = 0) {
    if (mx > this.x && mx < this.x + this.largeur && my > this.y && my < this.y + this.hauteur && this.choix == false && this.valide == false) {
      if (joueur == 0) {
        this.bordure = this.bordureBlanche;
      } else if (joueur == 1) {
        this.bordure = this.bordureOrange;
      } else if (joueur == 2) {
        this.bordure = this.bordureBleue;
      }
      this.choix = true;
      return true;
    } else {
      return false;
    }
  }

  retourner() {
    if (this.hide == true) {
      this.hide = false;
    }
  }
  changeChiffre(tableau) {
    this.chiffre = tableau.tab[this.i][this.j];
  }

}