function fase_1 () {
  var x = 30;
  var v = 0;
  var i=0;
  var tempo=30;
  var fr=0;
  var alt=window.innerHeight;
  var larg=window.innerWidth;
  var LIFE=[], TERRA=[];
  var vidas=3, R1, R2, R3, R4, R5;

 function preload() {
      for(a=0; a<5; a++) {
          if(a<3) {
              LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
          }
          else {
              LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
          }
      }
      for(b=0; b<2; b++) {
          TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
      }
  }


  function setup() {
  createCanvas(larg, alt);
  frameRate(60);

  }

  function draw() {
  //R, G, B
  background('#7C3D99');

  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(0, larg/3, larg/3, alt, 10);
  rect(larg/3, larg/3, larg/3, alt, 10);
  rect(2*larg/3, larg/3, larg/3, alt, 10);

  if (x<larg/3) {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(0, larg/3, larg/3, alt, 10);
  }
  else if (x>larg/3 && x<2*larg/3) {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(larg/3, larg/3, larg/3, alt, 10);
  }
  else {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(2*larg/3, larg/3, larg/3, alt, 10);
  }

  //TEMPO:
      fr=frameCount;
      if(fr%60==0) {
          if(tempo>0) {
              tempo--;
          }
          else {
              tempo=0;
          }
      }
  //LIFE:
      if(fr%20==0) {
          i++;
          if(i==5) {
              i=0;
          }
      }

  fill('black');
  textSize(30);

  text('ACRE, TOCANTINS,', 0.0585*larg, 540);
  text('MARANHÃO, BAHIA E PARÁ', 0.022*larg, 575);

  text('AMAZONAS, ACRE,', 0.41*larg, 520);
  text('RORAIMA, PARÁ, AMAPÁ', 0.381*larg, 555);
  text('RONDÔNIA, TOCANTINS', 0.388*larg, 590);

  text('RIO GRANDE DO NORTE', 0.710*larg, 540);
  text('E RIO GRANDE DO SUL', 0.715*larg, 575);

  text('TEMPO: '+tempo, 30, 50);
  image(LIFE[i], 0.805*larg, 10, 80, 80);
  image(LIFE[i], 0.864*larg, 10, 80, 80);
  image(LIFE[i], 0.922*larg, 10, 80, 80);
  textSize(50);
  text('A FLORESTA AMAZÔNICA SE ESTENDE POR QUAIS', 60, 150);
  text('ESTADOS BRASILEIROS?', 350, 220);

  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130)

  //VELOCIDADE DA BOLA
      if(x<larg) {
          x+=10+v;
      }
      else {
          x=0;
          if(v<35) {
              v+=3;
          }
          else {
              v=35;
          }
      }
  }
  function keyPressed () {
  if(x>=0 && x<larg/3 && keyCode===ENTER) {
          R1="ERROU";
          vidas--;
      }
  if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
          R1="ACERTOU";
      }
  if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
          R1="ERROU";
          vidas--;
      }
  }
}
function fase_2 () {

}
