function setup() {
  createCanvas(800, 400);
  obor = new Obor();
}

function draw() {
	background(220);
  
  	obor.display();
	obor.update(0); // 0 -> circular; 1 -> random
}

// Obor -- a robotic arm with sound sensors 
function Obor(){
	
  //parameters for the base
  this.base_w = 100;
  this.base_h = 10;  
  this.base_x = 600;
  this.base_y = height - this.base_h/2 - 1;
  
  //parameters for the stand
  this.stand_w = 5;
  this.stand_h = 200;
  this.stand_x = this.base_x;
  this.stand_y = this.base_y - this.base_h/2 - this.stand_h/2;
  
  //parameters for the arm
  this.arm_w = 4;
  this.arm_h = 100;
  this.arm_x_start = this.base_x;
  this.arm_y_start = this.stand_y - this.stand_h/2;
  this.arm_x_end = this.arm_x_start;
  this.arm_y_end = this.arm_y_start + this.arm_h;
  this.angle = 90;
  
  this.display = function(){
  	
    //draw the base & the stand, static 
    rectMode(CENTER);
    strokeWeight(1);
    fill(255);
    rect(this.base_x, this.base_y, this.base_w, this.base_h);
    rect(this.stand_x, this.stand_y, this.stand_w, this.stand_h);
    
    //draw the arm
    strokeWeight(this.arm_w);
    stroke(100);
    line(this.arm_x_start, this.arm_y_start, this.arm_x_end, this.arm_y_end);
  }
  
  this.update = function(move_mode){
    if(move_mode == 0) this.angle += 0.01;
    // to-do: make the random movement more natural
    else if(move_mode == 1) this.angle += random(-0.01, 0.01);
  	
    this.arm_x_end = this.arm_x_start + (this.arm_h) * cos(this.angle);
    this.arm_y_end = this.arm_y_start + (this.arm_h) * sin(this.angle);
  }
} 