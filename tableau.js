let paires = 10;

class Tableau {

  constructor() {
    this.colonnes = 5;
    this.lignes = 4;
    this.tab = [];
    this.x = 0;
    this.y = 0;
  }

  reset() {
    //création du tableau
    for (let r = 0; r < this.colonnes; r++) {
      this.tab[r] = [];
      for (let s = 0; s < this.lignes; s++) {
        this.tab[r][s] = 0;
      }
    }
  }

  melange() {
    this.x = int(random(0, colonnes));
    this.y = int(random(0, lignes));
    for (let i = 1; i < paires + 1; i++) {
      while (this.tab[this.x][this.y] != 0) {
        this.x = int(random(0, colonnes));
        this.y = int(random(0, lignes));
      }
      this.tab[this.x][this.y] = i

      while (this.tab[this.x][this.y] != 0) {
        this.x = int(random(0, colonnes));
        this.y = int(random(0, lignes));
      }
      this.tab[this.x][this.y] = i
    }
  }
}