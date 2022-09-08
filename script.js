const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const ANCHO = canvas.width;
const ALTO = canvas.height;

let figuras = [];

function dibujar(figura) {
  agregarFigura(figura);
  figuras[figuras.length-1].draw();
}

function agregarFigura(figura) {
  let posX = random(ANCHO);
  let posY = random(ALTO);
  let width = random(60);
  let height = random(60);
  let color = getRandomRGBA();

  if (figura) {
    rectangulo = new Rectangulo(posX, posY, width, height, color, ctx);
    figuras.push(rectangulo);
  } else {
    circulo = new Circulo(posX, posY, width, height, color, ctx);
    figuras.push(circulo);
  }
}

function getRandomRGBA() {
  let r = Math.round(Math.random() * 255)+10;
  let g = Math.round(Math.random() * 255)+10;
  let b = Math.round(Math.random() * 255)+10;
  let a = 255;
  return `rgba(${r},${g},${b},${a})`;
}

function random(maximo) {
  return Math.round(Math.random() * maximo);
}

