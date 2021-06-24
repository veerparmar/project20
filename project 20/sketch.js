var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit;catWalk,catCollide;
var bg,bgImg;





function preload() {
    
  mouseCheese = loadImage("mouse1.png");

  mouseDance = loadAnimation("mouse2.png","mouse3.png");

  mouseCollide = loadImage("mouse4.png",);


  catSit = loadImage("cat1.png");

  catWalk = loadAnimation("cat2.png","cat3.png");

  catCollide = loadImage("cat4.png");


    bgImg = loadImage("garden.png");

}

function setup(){

    createCanvas(1400,700);

    bg = createSprite(200,200,20,20);

    bg.addImage("bg",bgImg);

    mouse = createSprite(100,420,20,20);

    mouse.addAnimation("mouse1",mouseCheese);



    mouse.addAnimation("mouse4",mouseCollide);

    mouse.addAnimation("mouse2,mouse3",mouseDance);

    mouse.scale = 0.1;


    cat = createSprite(580,420,20,20);

    cat.addAnimation("cat1",catSit);



    cat.addAnimation("cat4",catCollide);

    cat.addAnimation("cat2,cat3",catWalk);


    cat.scale = 0.16;

   // mouse.debug = true;

   // cat.debug = true;
    
      /*&& mouse.x - cat.x < cat.width/2 + mouse.width/2
      && mouse.y - cat.y < cat.height/2 + mouse.height/2
      && cat.y - mouse.y <cat.height/2 + mouse.height/2 90 130 */


}

function draw() {

    background(255);
 
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
      ){

        mouse.changeAnimation("mouse4",mouseCollide);

        cat.velocityX = 0;

        cat.changeAnimation("cat4",catCollide);

    }

    keyPressed();

    drawSprites();

    //text(mouseX+','+mouseY,580,100);
}


function keyPressed(){

  if(keyDown("left")) {

    cat.velocityX = -3;

    cat.changeAnimation("cat2,cat3",catWalk);

    mouse.changeAnimation("mouse2,mouse3",mouseDance);

    


  }


}
