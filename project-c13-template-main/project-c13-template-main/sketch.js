var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var leafR,leafRImg;
        
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 
        leafImg = loadImage("leaf.png");
  leafRImg = loadImage("redImage.png"); 
}
function createleaf(){

  leaf = createSprite(random(50,350),10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.07;
  leaf.velocityY = 3;
  leaf.lifetime=150;

  garden.dept = leaf.dept;
  leaf.dept = leaf.dept + 356;
  }function createleafR(){

    leafR = createSprite(random(50,350),10,10);
    leafR.addImage(leafRImg);
    leafR.scale=0.07;
    leafR.velocityY = 3;
    leafR.lifetime=150;

    garden.dept = leafR.dept;
    leafR.dept = leafR.dept + 356;
    }function createapple(){

      apple = createSprite(random(50,350),10,10);
      apple.addImage(appleImg);
      apple.scale=0.07;
      apple.velocityY = 3;
      apple.lifetime=150;

      garden.dept = apple.dept;
      apple.dept = apple.dept + 356;
      }
      
  function setup(){
  createCanvas(400,400);
   
// mover o fundo
garden=createSprite(200,200);
garden.addImage("normal",gardenImg);

score = 0;
//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("mover",rabbitImg);
}

function draw() {
  background(0);
  //if (rabbit.isTouching(leaf)){  
    //leaf.destroy(); }

  //if (rabbit.isTouching(leafR)){ 
    //leafR.destroy();}

  //if (rabbit.isTouching(apple)){
   // apple.destroy();
 //;}
  rabbit.x=World.mouseX;
var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
        if(select_sprites == 1){
          createapple();
        } else if (select_sprites == 2){
          createleaf();
        }else{
          createleafR();
        }}
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

