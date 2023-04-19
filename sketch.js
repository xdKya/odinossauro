var dinossauro, dinossauroImg;

function preload() {
  //pré carrega imagens, animações, sons etc

  dinossauroImg = loadAnimation("trex3.png", "trex4.png");
}

function setup() {
  //função de configuração

  dinossauro = createSprite(50, 100, 10, 10);
  dinossauro.addAnimation("correndinho", dinossauroImg);
  dinossauro.scale = 0.5;

  //muda o tamanho da tela
  createCanvas(600, 200);
}

function draw() {
  background("white");

  drawSprites();
}
