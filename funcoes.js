function menu () {
  background('#7C3D99');

  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(560, 305, 220, 55, 10);
  rect(560, 375, 220, 55, 10);
  rect(560, 445, 220, 55, 10);
  textSize(120);
  fill(225, 215, 0);
  text('GEOQUEST', 347, 150);
  textSize(30);
  fill(225, 215, 0);
  text('EXTRATIVISMO E IMPACTOS AMBIENTAIS', 387, 190);
  
  textSize(18);
  fill('black');
  text('PRESSIONE ENTER PARA SELECIONAR', 500, 280);
  textSize(32);
  fill('black');
  
  text('JOGAR', 617, 342);
  text('INSTRUÇÕES', 567, 412);
  text('SAIR', 632, 482);
  
  noFill();
  stroke(225, 215, 0);
  strokeWeight(7);
  rect(560, y, 220, 57, 10);
}

function fase1 () {
  background('#7C3D99');
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(0, larg/3, larg/3, alt, 10);
  rect(larg/3, larg/3, larg/3, alt, 10);
  rect(2*larg/3, larg/3, larg/3, alt, 10);

  if (x < larg/3) {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(0, larg/3, larg/3, alt, 10);
  }
  else if (x > larg/3 && x < 2*larg/3) {
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

  fill('black');
  textSize(30);
  text('ACRE, TOCANTINS,', 0.0585*larg, 0.864*alt);
  text('MARANHÃO, BAHIA E PARÁ', 0.022*larg, 0.92*alt);
  text('AMAZONAS, ACRE,', 0.41*larg, 0.832*alt);
  text('RORAIMA, PARÁ, AMAPÁ', 0.381*larg, 0.888*alt);
  text('RONDÔNIA, TOCANTINS', 0.388*larg, 0.944*alt);
  text('RIO GRANDE DO NORTE', 0.710*larg, 0.864*alt);
  text('E RIO GRANDE DO SUL', 0.715*larg, 0.92*alt);
  text('TEMPO: '+tempo, 30, 0.08*alt);
  image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
  image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
  image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  textSize(50);
  text('A FLORESTA AMAZÔNICA SE ESTENDE POR QUAIS', 0.044*larg, 0.24*alt);
  text('ESTADOS BRASILEIROS?', 0.256*larg, 0.352*alt);
  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130)

  //TEMPO:
  fr = frameCount;

  if(fr % 60 == 0) {
      if(tempo > 0) {
          tempo--;
      }
      else {
          fase++;
          vidas--;
          tempo = 31;
          v = 0;
      }
  }

  //LIFE:
      if(fr % 20 == 0) {
          i++;
          if(i == 5) {
              i = 0;
          }
      }

  //VELOCIDADE DA BOLA
      if(x < larg) {
          x += 10 + v;
      }
      else {
          x = 0;
          if(v < 35) {
              v += 3;
          }
          else {
              v = 35;
          }
      }
}

function fase2 () {
  background('#7C3D99');
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(0, larg/3, larg/3, alt, 10);
  rect(larg/3, larg/3, larg/3, alt, 10);
  rect(2*larg/3, larg/3, larg/3, alt, 10);

  if (x < larg/3) {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(0, larg/3, larg/3, alt, 10);
  }
  else if (x > larg/3 && x < 2*larg/3) {
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
  
  fill('black');
  textSize(30);
  text('CORAÇÃO DO MUNDO', 0.0485*larg, 0.864*alt);
  text('ESTÔMAGO DO MUNDO', 0.371*larg, 0.864*alt);
  text('PULMÃO DO MUNDO', 0.730*larg, 0.864*alt);
  text('TEMPO: '+tempo, 30, 0.08*alt);

  if(vidas==3) {
      image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  } 
  if(vidas==2) {
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }

  textSize(50);
  text('A FLORESTA AMAZÔNICA TAMBÉM É', 0.176*larg, 0.24*alt);
  text('CONHECIDA COMO:', 0.307*larg, 0.352*alt);
  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130)

  //TEMPO:
  fr = frameCount;

  if (fr % 60 == 0) {
    if (tempo > 0) {
      tempo--;
    }
    else {
      fase++;
      vidas--;
      tempo = 31;
      v = 0;
    }   
  }

  //LIFE:
  if (fr % 20 == 0) {
    i++;
    if (i == 5) {
        i = 0;
    }
  }

  //VELOCIDADE DA BOLA
  if (x < larg) {
    x += 10 + v;
  }
  else {
    x = 0;
    if (v < 35) {
        v += 3;
    }
    else {
        v = 35;
    }
  }
}

function fase3 () {
  background('#7C3D99');
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(0, larg/3, larg/3, alt, 10);
  rect(larg/3, larg/3, larg/3, alt, 10);
  rect(2*larg/3, larg/3, larg/3, alt, 10);

  if (x < larg/3) {
      fill('#008080');
      stroke('black');
      strokeWeight(2);
      rect(0, larg/3, larg/3, alt, 10);
  }
  else if (x > larg/3 && x < 2*larg/3) {
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

  fill('black');
  textSize(30);
  text('PICO 31 DE MARÇO', 0.0585*larg, 0.864*alt);
  text('PICO GUIMARÃES ROSA', 0.371*larg, 0.864*alt);
  text('PICO DA NEBLINA', 0.740*larg, 0.864*alt);
  text('TEMPO: '+tempo, 30, 0.08*alt);

  if(vidas==3) {
      image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  } 
  if(vidas==2) {
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }
  if(vidas==1) {
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }

  textSize(50);
  text('QUAL O NOME DA MAIOR SERRA QUE', 0.166*larg, 0.24*alt);
  text('TEMOS NO TERRITÓRIO BRASILEIRO?', 0.166*larg, 0.352*alt);
  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130);

  //TEMPO:
  fr = frameCount;

  if(fr % 60 == 0) {
    if (tempo > 0) {
      tempo--;
    }
    else {
      fase++;
      vidas--;
      tempo = 31;
      v = 0;
    }
  }

  //LIFE:
  if (fr % 20 == 0) {
    i++;
    if (i == 5) {
        i = 0;
    }
  }

  //VELOCIDADE DA BOLA
  if (x < larg) {
    x += 10 + v;
  }
  else {
    x = 0;
    if (v < 35) {
        v += 3;
    }
    else {
        v = 35;
    }
  }
}

function fase4 () {
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

  fill('black');
  textSize(30);
  text('CARNE BOVINA', 0.0785*larg, 0.864*alt);
  text('E SOJA', 0.12*larg, 0.924*alt);
  text('CANA-DE-AÇÚCAR', 0.4*larg, 0.864*alt);
  text('E CAFÉ', 0.457*larg, 0.924*alt);
  text('PETRÓLEO', 0.770*larg, 0.864*alt);
  text('E LATÉX', 0.782*larg, 0.924*alt);
  text('TEMPO: '+tempo, 30, 0.08*alt);

  if(vidas==3) {
      image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  } 
  if(vidas==2) {
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }
  if(vidas==1) {
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }

  textSize(40);
  text('COM A ABERTURA DAS RODOVIAS E A IMPLEMENTAÇÃO', 0.086*larg, 0.24*alt);
  text('DE HIDROVIAS EM ALGUNS RIOS AMAZÔNICOS, A', 0.136*larg, 0.352*alt);
  text('AMAZÔNIA COMEÇOU A ATRAIS PRODUTORES DE: ', 0.13*larg, 0.452*alt);
  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130)

  //TEMPO:
  fr = frameCount;
  
  if(fr % 60 == 0) {
    if(tempo > 0) {
      tempo--;
    }
    else {
      fase++;
      vidas--;
      tempo = 31;
      v = 0;
    }
  }

  //LIFE:
  if(fr % 20 == 0) {
    i++;
    if(i == 5) {
      i = 0;
    }
  }

  //VELOCIDADE DA BOLA
  if(x < larg) {
    x += 10 + v;
  }
  else {
    x = 0;
    if(v < 35) {
        v += 3;
    }
    else {
        v = 35;
    }
  }
}

function fase5 () {
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

  fill('black');
  textSize(30);
  text('CAFÉ', 0.13*larg, 0.864*alt);
  text('LATÉX', 0.46*larg, 0.864*alt);
  text('ALGODÃO', 0.8*larg, 0.864*alt);
  text('TEMPO: '+tempo, 30, 0.08*alt);

  if(vidas==3) {
      image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  } 
  if(vidas==2) {
      image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }
  if(vidas==1) {
      image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
  }

  textSize(50);
  text('NO FIM DO SÉCULO XIX E INÍCIO DO SÉCULO XX,', 0.056*larg, 0.24*alt);
  text('O BRASIL TORNOU-SE O MAIOR FORNECEDOR DE: ', 0.04*larg, 0.352*alt);
  fill('blue');
  stroke('black');
  strokeWeight(1);
  ellipse(x, larg/3-40, 80, 80);
  image(TERRA[1], x-67, larg/3-120, 130, 130);

  //TEMPO:
  fr = frameCount;
  
  if(fr % 60 == 0) {
    if(tempo > 0) {
      tempo--;
    }
    else {
      fase++;
      vidas--;
      tempo = 31;
      v = 0;
    }
  }

  //LIFE:
  if(fr % 20 == 0) {
    i++;
    if(i == 5) {
      i = 0;
    }
  }

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

function instrucoes() {
  background('#7FDBFF');
  
  fill('white');
  stroke('black');
  strokeWeight(2);
  rect(200, 150, 940, 350, 10);
  textSize(22);
  fill('black');
  text('--> VOCÊ DEVERÁ APERTAR A TECLA ENTER QUANDO O PERSONAGEM ESTIVER ', 0.183*larg, 230);
  text('SOBRE A RESPOSTA QUE VOCÊ DESEJA SELECIONAR', 0.183*larg, 260);
  text('--> TERÁ 30 SEGUNDOS PARA RESPONDER CADA QUESTÃO E 3 VIDAS PARA', 0.183*larg, 320);
  text('COMPLETAR O QUEST', 0.183*larg, 350);
  text('--> CASO O TEMPO PARA RESPONDER ACABE, VOCÊ PERDERÁ UMA VIDA ', 0.183*larg, 410);
  text('BOA SORTE, QUE A FORÇA ESTEJA COM VOCÊ! ', 0.183*larg, 460);
  text('PRESSIONE A SETA ESQUERDA PARA VOLTAR', 400, 550);
  fill('white');
  stroke('black');
  strokeWeight(1);
  textSize(36);
  fill('black');
  text('INSTRUÇÕES DO GEOQUEST', 420, 55);

  if(keyCode===LEFT_ARROW){
    fase=0;
  }
}

function fim () {
  background('#7C3D99');
  textSize(70);
  fill(225, 215, 0);
  text('FIM DE JOGO', 0.34*larg, 0.47*alt);
}

function parabens () {
  background('#7C3D99');
  textSize(70);
  fill(225, 215, 0);
  text('PARABÉNS', 0.36*larg, 0.3*alt);
  fill('#00FFFF');

  if(vidas == 1) {
    text('VOCÊ FICOU COM '+vidas+' VIDA', 0.17*larg, 0.5*alt );
  }
  else {
    text('VOCÊ FICOU COM '+vidas+' VIDAS', 0.17*larg, 0.5*alt );
  }

  text('E ACERTOU '+(2+vidas)+' PERGUNTAS', 0.17*larg, 0.7*alt );
}