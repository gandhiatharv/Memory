let numeroVersion = "1 . 1 . 1";

let menu = 1;

let joueur = 3;
let compteJoueur1 = 0;
let compteJoueur2 = 0;
let winner = 0;

let colonnes = 5;
let lignes = 4;

let cartes = [];
let tableau;
let parametres;
let bouton = [];
let jouer;
let rejouer;
let joueur1;
let joueur2;

let ms = 0;
let delay = false;

let a = 0;
let f = 1;
let i1;
let num1;
let i2;
let num2;
let nbrValide = 0;
let win = false;

let click = true;

let fr = 30;
let temps = 1;

function setup() {
  frameRate(30);
  createCanvas(1280, 720);
  textAlign(CENTER);
  textFont('Ranchers');
  //Création bouton jouer
  jouer = new Bouton(320, 400, 300, 100, "Play");

  //Création bouton joueur1
  joueur1 = new Bouton(160, 100, 400, 300);
  //Création bouton joueur2
  joueur2 = new Bouton(1280 - 400 - 160, 100, 400, 300);

  //Création bouton rejouer
  rejouer = new Bouton(width / 2 - 150, 400, 300, 100, "Replay");

  //Création bouton parametres
  parametres = new Bouton(1280 - 300 - 320, 400, 300, 100, "Options");

  //Création boutons option
  bouton[0] = new Bouton(600, 300, 80, 40, "0.5s", 0.5);
  bouton[1] = new Bouton(710, 300, 80, 40, "1s", 1, true);
  bouton[2] = new Bouton(820, 300, 80, 40, "2s", 2);
  bouton[3] = new Bouton(930, 300, 80, 40, "3s", 3);
  //Création bouton retour
  retour = new Bouton(20, 20, 150, 50, "Return");

  //création du tableau + mélange cartes
  tableau = new Tableau();
  tableau.reset();
  tableau.melange();

  //Création + positionnement des cartes
  for (let i = 0; i < colonnes; i++) {
    let x = 200 * i + 200;
    for (let j = 0; j < lignes; j++) {
      let y = 150 * j + 100;
      let chiffre = tableau.tab[i][j];
      let c = new Carte(x, y, i, j, chiffre);
      cartes.push(c);
    }
  }
}

function mousePressed() {

}


function testWin() {
  nbrValide = 0;
  compteJoueur1 = 0;
  compteJoueur2 = 0;
  for (let i = 0; i < cartes.length; i++) {
    if (cartes[i].valide !== false) {
      nbrValide += 1;
      if (cartes[i].valide == 1) {
        compteJoueur1 += 1;
      }
      if (cartes[i].valide == 2) {
        compteJoueur2 += 1;
      }
    }
  }
  if (nbrValide == cartes.length) {
    win = true;
  }
}

function testPaire1() {
  a = 0;
  for (let i = 0; i < cartes.length; i++) {
    if (cartes[i].choix == true) {
      a += 1;
      if (a == 1) {
        num1 = cartes[i].chiffre;
        i1 = i;
      }
      if (a == 2) {
        num2 = cartes[i].chiffre;
        i2 = i;
      }
    }
  }
  for (let i = 0; i < cartes.length; i++) {
    if (a == 2) {
      if (num1 == num2) {
        if (cartes[i].chiffre == num1 || cartes[i].chiffre == num2) {
          cartes[i].valide = joueur;
          cartes[i].choix = false;
        }
      } else {
        if (cartes[i].chiffre == num1 || cartes[i].chiffre == num2) {
          click = false;
          delay = true;
          if (ms >= temps * fr) {
            cartes[i].hide = true;
            cartes[i].choix = false;
            delay = false;
            click = true;
          }
        }
      }
    }
  }
}

function testPaire2() {
  a = 0;
  for (let i = 0; i < cartes.length; i++) {
    if (cartes[i].choix == true) {
      a += 1;
      if (a == 1) {
        num1 = cartes[i].chiffre;
        i1 = i;
      }
      if (a == 2) {
        num2 = cartes[i].chiffre;
        i2 = i;
      }
    }
  }
    for (let i = 0; i < cartes.length; i++) {
    if (a == 2) {
      if (num1 == num2) {
        if (cartes[i].chiffre == num1 || cartes[i].chiffre == num2) {
          cartes[i].valide = joueur;
          cartes[i].choix = false;
        }
      } else {
        if (cartes[i].chiffre == num1 || cartes[i].chiffre == num2) {
          click = false;
          delay = true;
          if (ms >= temps * fr) {
            cartes[i].hide = true;
            cartes[i].choix = false;
            delay = false;
            click = true;
          }
        }
      }
    }
  }
  if (a == 2 && num1 !== num2) {
    f += 1;
  }
}


function draw() {
  background(110, 200, 255);

  if (menu == 0) {
    fill(255);
    textFont('Ranchers');
    textSize(80);
    textAlign(CENTER);
    text("Options", width / 2, 200);
    textSize(40);
    retour.draw(mouseX, mouseY);
    textSize(30);
    textAlign(LEFT);
    text("Card reversal delay :", width / 5, 330);
    textAlign(CENTER);
    for (let i = 0; i <= 3; i++) {
      bouton[i].draw(mouseX, mouseY);
      if (bouton[i].click(mouseX, mouseY)) {
        for (let j = 0; j <= 3; j++) {
          bouton[j].choix = false;
        }
        bouton[i].choix = true;
        temps = bouton[i].variable;
      }
    }
    if (retour.click(mouseX, mouseY)) {
      menu = 1;
      background(110, 200, 255);
    }
  }

  if (menu == 1) {
    strokeWeight(3);
    stroke(255);
    fill(230, 60, 60);
    rect(420, 160, 70, 90, 5);
    rect(790, 160, 70, 90, 5);
    fill(220);
    rect(450, 100, 380, 125, 5);
    noStroke();
    textFont('Ranchers');
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text(" ", 1120, 680);
    text(" ", 1120, 705);
    text(numeroVersion, 1195, 705);
    fill(0);
    textSize(100);
    textAlign(CENTER);
    text("Memory", width / 2, 200);
    textSize(80);
    jouer.draw(mouseX, mouseY);
    parametres.draw(mouseX, mouseY);
    if (jouer.click(mouseX, mouseY)) {
      menu = 4;
      background(110, 200, 255);
    }
    if (parametres.click(mouseX, mouseY)) {
      menu = 0;
      background(110, 200, 255);
    }
  }

  if (menu == 2) {
    if (mouseIsPressed && mouseButton === LEFT && click == true) {
      //pour chaque carte : retourner
      for (let i = 0; i < cartes.length; i++) {
        if (cartes[i].click(mouseX, mouseY)) {
          cartes[i].retourner();
        }
      }
    }

    textSize(40);
    retour.draw(mouseX, mouseY);
    //pour chaque carte : dessiner
    for (let i = 0; i < cartes.length; i++) {
      cartes[i].draw();
    }
    testPaire1();
    testWin();
    if (retour.click(mouseX, mouseY)) {
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      menu = 1;
      background(110, 200, 255);
    }
    if (win == true) {
      menu = 3;
      click = false;
    }
  }

  if (menu == 3) {
    strokeWeight(3);
    stroke(255);
    fill(230, 60, 60);
    rect(400, 160, 70, 90, 5);
    rect(810, 160, 70, 90, 5);
    fill(220);
    rect(430, 100, 420, 125, 5);
    noStroke();
    fill(0);
    textAlign(CENTER);
    textSize(80);
    text("Congratulations !", width / 2, 200);
    textSize(50);
    fill(255);
    text("You have turned over all the cards.", width / 2, 330);
    textSize(80);
    rejouer.draw(mouseX, mouseY);
    textSize(40);
    retour.draw(mouseX, mouseY);
    if (retour.click(mouseX, mouseY)) {
      menu = 1;
      background(110, 200, 255);
    }
    if (rejouer.click(mouseX, mouseY)) {
      nbrValide = 0;
      win = false;
      tableau.reset();
      tableau.melange();
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      menu = 2;
      background(110, 200, 255);
      joueur = 3;
    }
  }

  if (menu == 4) {
    fill(255);
    joueur1.draw(mouseX, mouseY);
    joueur2.draw(mouseX, mouseY);
    textSize(40);
    retour.draw(mouseX, mouseY);
    textSize(80);
    textAlign(CENTER);
    text("1    Player", joueur1.x + joueur1.largeur / 2, 500);
    text("2    Players", joueur2.x + joueur2.largeur / 2, 500);

    image(cartes[0].dos, joueur1.x + 150, 190, 70, 90);
    image(cartes[0].bordureBlanche, joueur1.x + 150, 190, 70, 90);
    image(cartes[0].face, joueur1.x + 180, 220, 70, 90);
    image(cartes[0].bordureVerte, joueur1.x + 180, 220, 70, 90);


    image(cartes[0].dos, joueur2.x + 60, 190, 70, 90);
    image(cartes[0].bordureBlanche, joueur2.x + 60, 190, 70, 90);
    image(cartes[0].face, joueur2.x + 90, 220, 70, 90);
    image(cartes[0].bordureOrange, joueur2.x + 90, 220, 70, 90);

    image(cartes[0].dos, joueur2.x + 230, 190, 70, 90);
    image(cartes[0].bordureBlanche, joueur2.x + 230, 190, 70, 90);
    image(cartes[0].face, joueur2.x + 260, 220, 70, 90);
    image(cartes[0].bordureBleue, joueur2.x + 260, 220, 70, 90);

    fill(0);
    noStroke();
    textSize(40);
    text(1, joueur1.x + 215, 280);
    text(1, joueur2.x + 125, 280);
    text(2, joueur2.x + 295, 280);

    if (retour.click(mouseX, mouseY)) {
      menu = 1;
    }

    if (joueur1.click(mouseX, mouseY)) {
      tableau.reset();
      tableau.melange();
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      menu = 2;
      background(110, 200, 255);
      joueur = 3
    }

    if (joueur2.click(mouseX, mouseY)) {
      tableau.reset();
      tableau.melange();
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      joueur = 1;
      f = 1;
      menu = 5;
      background(110, 200, 255);
    }
  }

  if (menu == 5) {
    if (joueur > 2) {
      joueur = 1;
    }
    
    if (mouseIsPressed && mouseButton === LEFT && click == true) {
      //pour chaque carte : retourner
      for (let i = 0; i < cartes.length; i++) {
        if (cartes[i].click(mouseX, mouseY)) {
          cartes[i].retourner();
        }
      }
    }

    textSize(40);
    retour.draw(mouseX, mouseY);
    if (joueur == 1) {
      fill(255, 200, 60);
      stroke(0);
    } else if (joueur == 2) {
      fill(60, 60, 255);
      stroke(0);
    }
    strokeWeight(5);
    textSize(50);
    text("Player", width / 2, 50);
    text(joueur, 815, 50);

    //pour chaque carte : dessiner
    for (let i = 0; i < cartes.length; i++) {
      cartes[i].draw();
    }
    testPaire2();
    if (f >= 32) {
      joueur += 1;
      if (joueur > 2) {
        joueur = 1;
      }
      f = 1;
      }
    testWin();
    if (retour.click(mouseX, mouseY, joueur)) {
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      menu = 1;
      background(110, 200, 255);
    }
    if (win == true) {
      menu = 6;
      click = false;
    }
  }
  
  if (menu == 6) {
    strokeWeight(3);
    stroke(255);
    fill(230, 60, 60);
    rect(400, 160, 70, 90, 5);
    rect(810, 160, 70, 90, 5);
    fill(220);
    rect(430, 100, 420, 125, 5);
    noStroke();
    fill(0);
    textAlign(CENTER);
    textSize(80);
    if (compteJoueur1 !== compteJoueur2) {
    text("Congratulations !", width / 2, 200);
    } else {
      text("It Is A Tie !", width / 2, 200);
    }
    textSize(50);
    strokeWeight(5);
    if (compteJoueur1 > compteJoueur2) {
      stroke(255);
      fill(255, 200, 60);
      text("Player      Won !", width / 2, 330);
      text("1", width/2 + 26 , 330);
    } else if (compteJoueur1 < compteJoueur2) {
      stroke(255);
      fill(60, 60, 255);
      text("Player      Won !", width / 2, 330);
      text("2", width/2 + 26 , 330);
    } else {
      fill(255);
      text("Too Bad Replay To Decide", width / 2, 330);
    }
    textSize(80);
    rejouer.draw(mouseX, mouseY);
    textSize(40);
    retour.draw(mouseX, mouseY);
    if (retour.click(mouseX, mouseY)) {
      menu = 1;
      background(110, 200, 255);
    }
    if (rejouer.click(mouseX, mouseY)) {
      nbrValide = 0;
      win = false;
      tableau.reset();
      tableau.melange();
      for (let i = 0; i < cartes.length; i++) {
        cartes[i].valide = false;
        cartes[i].hide = true;
        cartes[i].choix = false;
        cartes[i].changeChiffre(tableau);
        click = true;
      }
      menu = 5;
      background(110, 200, 255);
      joueur = 1;
    }
  }


  if (delay == true) {
    ms += 1;
  } else {
    ms = 0;
  }
}
