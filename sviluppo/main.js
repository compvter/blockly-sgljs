var y;

function update() {
  cls(display, '#ffffff');
  window.text(window.display, 20, y, 20, '#ff0000','ciao ciao');
  y = y - -1;
  if (y == 480) {
    y = 0;
  }
}


setdisplay(640,480);
setfps(50);
y = 50;

setdisplay(640,480);
