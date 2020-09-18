var playerPaddle;
var computerPaddle;
var ball;

function setup(){
  createCanvas(400,400);
  //Player Paddle
  playerPaddle = new Paddle();
  //Computer Paddle
  computerPaddle = new Paddle();
  //Ball
  ball = new Ball();
}

function draw() {
  //set background to white
  background("white");
  
  //Player Paddle
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  playerPaddle.display();
  
  //Computer Paddle
  computerPaddle.xPosition = 0;
  computerPaddle.yPosition = 330;
  computerPaddle.display();
  
  //Ball
  ball.display();
  
}