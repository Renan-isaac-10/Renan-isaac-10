//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//variáveis da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variedade da bolinha 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteaAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  backgrounf(0)
  mostrabolinha();
  movimentabolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function mostraBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisapBorda () {
  if (xBolinha + raio > width || yBolinha - raio < 0) {
    velocidadeXBolinha
  }
  if (yBolinha + raio> height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete () {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

  function movimentaMinhaRaquete() {
    if(kevIsDown(UP_ARROW )) {
      yRaquete -= 10;
     if (keyIsDpwn(DOWN_ARROW))
      yRaquete += 10;
  }
}

function mostrarRaquete(x,y) {
  rect(x,y raqueteLargura, raqueteAltura);
}

function movimentaMinhaBolinha () {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(KeyISDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
 colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
   if (colidiu) {
     velocidadeXBolinha *= -1;
   }
}

function movimentoRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente -
raqueteComprimento / 2 - 30;
  yRaqueteOponenete += velocidadeYOponente
}

  
