//Declarações de Variaveis Gerais
var aleatorio = 0;
var r1, r2, r3;
var resultado = ''
var cara = 0;
var tr = 0;
var img = [];
var img2 = [];
var bg = [];
var probu;
var bg2;
var contador = 0;
var contador2 = 0;
var tempo = 0;
var tempo2 = 0;
var tela = 1;
var altura = 50;
var largura = 200;
var xMenu = 100;
var yMenu1 = 200;
var yMenu2 = 250;
var yMenu3 = 300;

//Pré-Carregamento de imagens  
function preload() {
  probu = loadImage('Probu.png');
  img[0] = loadImage('Coin1.png');
  img[1] = loadImage('Coin2.png');
  img[2] = loadImage('Coin3.png');
  img[3] = loadImage('Coin4.png');
  img[4] = loadImage('Coin5.png');
  img[5] = loadImage('Coin6.png');
  img2[0] = loadImage('Star(1).png');
  img2[1] = loadImage('Star(2).png');
  img2[2] = loadImage('Star(3).png');
  img2[3] = loadImage('Star(4).png');
  img2[4] = loadImage('Star(5).png');
  img2[5] = loadImage('Star(6).png');
  img2[6] = loadImage('Star(7).png');
  img2[7] = loadImage('Star(8).png');
  img2[8] = loadImage('Star(9).png');
  img2[9] = loadImage('Star(10).png');
  img2[10] = loadImage('Star(11).png');
  img2[11] = loadImage('Star(12).png');
  bg2 = loadImage('Ceu.jpg');
  bg[0] = loadImage('bg (1).png');
  bg[1] = loadImage('bg (2).png');
  bg[2] = loadImage('bg (3).png');
  bg[3] = loadImage('bg (4).png');
  bg[4] = loadImage('bg (5).png');
  bg[5] = loadImage('bg (6).png');
  bg[6] = loadImage('bg (7).png');
  bg[7] = loadImage('bg (8).png');
  bg[8] = loadImage('bg (9).png');
  bg[9] = loadImage('bg (10).png');
  bg[10] = loadImage('bg (11).png');
  bg[11] = loadImage('bg (12).png');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textStyle(NORMAL);
  //Plano de Fundo
  image(bg[contador%12], 0, 0, 400, 400);
  
  //Moeda
  image(img[contador%6], 162.5, 120, 75, 75);
  tempo ++
  if(tempo == 5){
    contador++
    tempo = 0;
  }
  //Nome
  image(probu, 125, 50, 150, 150);
  
  //Estrela 
  image(img2[contador%12], 100, 40, 200, 175);
  tempo2 ++
  if(tempo2 == 1){
    contador2++
    tempo2 = 0;
  }
  textStyle(NORMAL);
  
  //Menu
  if(tela == 1){
    textAlign(CENTER);
    textSize(26);
    //Menu
    //Iniciar Jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu1, largura, altura, 15);
    }
      fill(240);
      noStroke();
      text("Iniciar", 200, 235);
    
    //Instruções
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
    fill(240);
    noStroke();
    text("Instruções", 200, 285);
    
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu3, largura, altura, 15);
    }
    fill(240);
    noStroke();
    text("Créditos", 200, 335);
  }
  //esboço fase 1-
  else if(tela == 2){
    background(100, 100, 0);
    image(bg2, -120, 0, 0, 400);
    image(img[contador%6], 162.5, 120, 75, 75);
    tempo ++
    if(tempo == 5){
      contador++
      tempo = 0;
    }
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("Qual o percentual de caras\n ao lançar uma moeda honesta?\n", 200, 100);
    text("Digite a resposta: "+resultado, 200, 200);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
    fill(240);
    noStroke();
    text("Voltar", 200, 285);
    if(tela == 2 && keyCode === ENTER && resultado == 50 && resultado != ''){
      tela = 4;
      resultado = 'null';
    }
    else if(tela == 2 && keyCode === ENTER && resultado != 50 && resultado != ''){
      tela = 5;
      resultado = '';
    }
  }
  //Tela de Instruções
  else if(tela == 3){
    background(200, 0, 200);
    image(bg2, -120, 0, 0, 400);
    image(img[contador%6], 162.5, 120, 75, 75);
    tempo ++
    if(tempo == 5){
      contador++
      tempo = 0;
    }
    textAlign(CENTER);
    textSize(16);
    fill(0);
    text("O jogo consiste em colocar o valor da probabilidade\nde um determinado evento. Para inserir a resposta\n basta digitar o número e apertar enter.\nSe estiver correto, o será feita uma simulação\npara comparar o valor com a probabilidade experimental.", 200, 50);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
      fill(240);
      noStroke();
      textSize(26)
      text("Voltar", 200, 285);
  }
  //Tela de Resposta Certa
  else if(tela == 4){
    background(200, 0, 0);
    image(bg2, -120, 0, 0, 400);
    image(img[contador%6], 162.5, 120, 75, 75);
    tempo ++
    if(tempo == 5){
      contador++
      tempo = 0;
    }
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
    fill(240);
    noStroke();
    fill(0);
    text("Resposta Certa!", 200, 50);
    
    //Simulador
    aleatorio = Math.floor(Math.random()*2);
    if(tr <= 1000){
      if(aleatorio == 0){
        cara++
    }
    if(tr == 10){
      r1 = parseFloat((cara/10).toFixed(4));
    }
    else if(tr == 100){
      r2 = parseFloat((cara/100).toFixed(4));
    }
    else if(tr == 1000){
      r3 = parseFloat((cara/1000).toFixed(4));
      cara = 0;
    }
    tr++
    }
    fill(0);
    text("Simulando 10 jogadas:\n"+parseFloat(r1*100).toFixed(2)+"%", 200, 80);
    fill(0);
    text("Simulando 100 jogadas:\n"+parseFloat(r2*100).toFixed(2)+"%", 200, 140);
    fill(0);
    text("Simulando 1000 jogadas:\n"+parseFloat(r3*100).toFixed(2)+"%", 200, 200);
    text("Voltar", 200, 285);
  }
  //Tela de Resposta Errada
  else if(tela == 5){
    background(0, 0, 200);
    image(bg2, -120, 0, 0, 400);
    image(img[contador%6], 162.5, 120, 75, 75);
    tempo ++
    if(tempo == 5){
      contador++
      tempo = 0;
    }
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("Resposta Errada!", 200, 235);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
    fill(240);
    noStroke();
    text("Voltar", 200, 285);
  }
  
  //Tela de Créditos
  else if(tela == 6){
    background(200, 0, 200);
    image(bg2, -120, 0, 0, 400);
    image(img[contador%6], 162.5, 120, 75, 75);
    tempo ++
    if(tempo == 5){
      contador++
      tempo = 0;
    }
    textAlign(CENTER);
    textSize(16);
    fill(0);
    text("Jogo criado por um estudante do\n Bacharelado em Ciências e Tecnologia da UFRN\n para contemplar a habilidade (EF06MA30)\nCalcular a probabilidade de um evento aleatório,\n expressando-a por número racional\n(forma fracionária, decimal e percentual)\n e comparar esse número com a probabilidade obtida\n por meio de experimentos sucessivos\n"+"Orientadora e Pedagoga: Ianny Samahra Medeiros\nDev: Lucas Cardoso da Silva\nColaborador: Ivonaldo Silvestre da Silva Júnior\n", 200, 20);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
    }
      fill(240);
      noStroke();
      textSize(26)
      text("Voltar", 200, 285);
  }
  
  //Funções pro clique do mouse
}
function mouseClicked(){
  if(tela == 1 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    tela = 2;
  }
  else if(tela == 1 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 3;
  }
  else if(tela == 1 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    tela = 6;
  }
  else if(tela == 2 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 1;
  }
  else if(tela == 3 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 1;
  }
  else if(tela == 4 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 1;
    tr = 0;
    r1 = 0;
    r2 = 0;
    r3 = 0;
    resultado = '';
  }
  else if(tela == 5 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 2;
    resultado = '';
  }
  else if(tela == 6 && mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    tela = 1;
  }
}
//Funções para Teclas Especificas
function keyPressed(){
  if(tela == 2 && keyCode != ENTER){
    resultado = resultado + key;
  }
}