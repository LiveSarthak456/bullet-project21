

var bullet,wall,wall2,wall3;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90);
	weight=random(400,1500);


	bullet=createSprite(50, 200, 40,5);   
    bullet.velocityX = speed;
	bullet.shapeColor=color(255);


  	wall=createSprite(1500,200, 30, height/2)
  	wall.shapeColor=color("grey");

	  wall2=createSprite(750,103,1500,6);
	  wall2.shapeColor=color("grey");

	  wall3=createSprite(750,297,1500,6);
	  wall3.shapeColor=color("grey");
}


function draw() {
  background("black");

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
  
  
  drawSprites();
 
}


