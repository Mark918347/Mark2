class Ball {
 constructor(){
    this.width = 10;
    this.height = 10;   
    this.xPosition = 200;
    this.yPosition = 200;
 }

 display(){
   rect(this.xPosition, this.yPosition, this.width, this.height);
 }

}

