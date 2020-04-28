function keyPressed () {
  if (vidas == 0 && keyCode === ENTER) {
          fase = 0;
          vidas = 3;
  }
  else if (fase == 0) {
        if (keyCode === DOWN_ARROW && y < 445) {
            y += 70;
        }
        if (keyCode === UP_ARROW && y > 305) {
            y -= 70;
        }
        if(y >= 305 && y <= 360 && keyCode === ENTER) {
            fase = 1;
        }
        if(y >= 375 && y <= 430 && keyCode === ENTER) {
            fase =- 1;
        }
        if(y>=445 && y<=500 && keyCode===ENTER) {
            alert("ADEUS...");
        }
  }
  else if (fase == 1) {
      if(x >= 0 && x < larg/3 && keyCode === ENTER) {
        vidas--;
        fase++;
        tempo = 30;
        v = 0;
      }
      if(x >= larg/3 && x < 2*larg/3 && keyCode === ENTER) {
          alert("PARABENS");
          fase++;
          tempo = 30;
          v = 0;
      }
      if(x >= 2*larg/3 && x <= larg && keyCode === ENTER) {
          vidas--;
          fase++;
          tempo = 30;
          v = 0;
      }
  }
  else if (fase == 2) {
      if(x >= 0 && x < larg/3 && keyCode === ENTER) {
        vidas--;
        fase++;
        tempo = 30;
        v = 0;
      }

      if(x >= larg/3 && x < 2*larg/3 && keyCode === ENTER) {
          vidas--;
          fase++;
          tempo = 30;
          v = 0;
      }

      if(x >= 2*larg/3 && x <= larg && keyCode === ENTER) {
          alert("PARABENS");
          fase++;
          tempo = 30;
          v = 0;
      }
  }
  else if (fase == 3) {
      if(x >= 0 && x < larg/3 && keyCode === ENTER) {
        vidas--;
        fase++;
        tempo = 30;
        v = 0;
      }

      if(x >= larg/3 && x < 2*larg/3 && keyCode === ENTER) {
          vidas--;
          fase++;
          tempo = 30;
          v = 0;
      }

      if(x >= 2*larg/3 && x <= larg && keyCode === ENTER) {
          alert("PARABENS");
          fase++;
          tempo = 30;
          v = 0;
      }
  }
  else if (fase == 4) {
      if(x >= 0 && x < larg/3 && keyCode === ENTER) {
        alert("PARABENS");
        fase++;
        tempo = 30;
        v = 0;
      }

      if(x >= larg/3 && x < 2*larg/3 && keyCode === ENTER) {
          vidas--;
          fase++;
          tempo = 30;
          v = 0;
      }

      if(x >= 2*larg/3 && x <= larg && keyCode === ENTER) {
        vidas--;
        fase++;
        tempo = 30;
        v = 0;
      }
  }
  else if (fase == 5) {
        if(x >= 0 && x < larg/3 && keyCode === ENTER) {
          vidas--;
        }

        if(x >= larg/3 && x < 2*larg/3 && keyCode === ENTER) {
          alert("PARABENS");
          fase = 6;
        }

        if(x >= 2*larg/3 && x <= larg && keyCode === ENTER) {
          vidas--;
        }  

        if(vidas !== 0) {
          fase = 6;
        }
  }
  else if (fase == 6) {
      if(keyCode === ENTER) {
        fase = 0;
        vidas = 3;
    }
  }
}