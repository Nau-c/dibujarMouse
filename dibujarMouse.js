// Primero la forma en quese llama pulsar el raton, disparador de función segundo parametro

//variable valor de apretar el ratón que es 0 hacer click
var valor = 0;
var color = "orange";
var canvas = document.getElementById("zona_de_dibujo"); //variable zona donde dibujamos
var papel = canvas.getContext("2d"); // el dibujo dentro del canavs es en 2d
var x;
var y;
var colorLinea = "red";
document.addEventListener("mouseup", dibujarMouse); //Cuando sueltas el botón
document.addEventListener("mousedown", dibujarMouse); //Cuando apretas el botón
document.addEventListener("mousemove", dibujarMouse); //Cuando mueves el mouse

// Marcos de CANVAS
dibujarLinea(color, 1, 1, 1, 299, papel);
dibujarLinea(color, 1, 299, 299, 299, papel);
dibujarLinea(color, 299, 299, 299, 1, papel);
dibujarLinea(color, 1, 299, 299, 299, papel);
dibujarLinea(color, 299, 1, 1, 1, papel);
dibujarLinea(color, 1, 299, 1, 1, papel);

//funcion dibujar mouse

function dibujarMouse (evento) {
  if (valor == 1) {
    dibujarMouse(colorlinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

function presionarMouse(evento) {
  valor = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento) {
  valor = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarMouse(color, Xinicial, Yinicial, Xfinal, Yfinal, LIENZO) 
{
  LIENZO.beginPath();
  LIENZO.strokeStyle = color;
  LIENZO.lineWidth = 2;
  LIENZO.moveTo(Xinicial, Yinicial);
  LIENZO.lineTo(Xfinal, Yfinal);
  LIENZO.stroke();
  LIENZO.closePath();
}
