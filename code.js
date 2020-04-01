var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00affe2c-c384-4b7f-a220-7082b07922e0","af21d98b-8b47-415a-8803-b5a7cc054dd2","0b2ce871-c6a1-44c4-81bc-d3de72ee1f0a","9cbbcd7f-e0b3-4318-aefa-116393d2665d","c05c44be-e836-471f-bfcf-3f772bd5c790","cea0153f-1dc6-402d-be7f-8ba90a256e8f","76f68b0b-2355-4372-9b9d-26b1f1fe7a2b","3b161f6d-5dae-4dbd-a7f2-bd41d78d4cf7","29625572-51d2-4b97-a5dd-86e9f56a990b"],"propsByKey":{"00affe2c-c384-4b7f-a220-7082b07922e0":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"af21d98b-8b47-415a-8803-b5a7cc054dd2":{"name":"Animation 1.jpg_1","sourceUrl":null,"frameSize":{"x":274,"y":241},"frameCount":9,"looping":true,"frameDelay":2,"version":"hz1d105act0gqWxXjwFOFwL.lV813f6J","loadedFromSource":true,"saved":true,"sourceSize":{"x":822,"y":723},"rootRelativePath":"assets/af21d98b-8b47-415a-8803-b5a7cc054dd2.png"},"0b2ce871-c6a1-44c4-81bc-d3de72ee1f0a":{"name":"sun_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"9cbbcd7f-e0b3-4318-aefa-116393d2665d":{"name":"game over.png_1","sourceUrl":"assets/v3/animations/yJvgxh7Ox6KsUs2y3qxWG9JARESicHLPwWGPUmtGpBM/9cbbcd7f-e0b3-4318-aefa-116393d2665d.png","frameSize":{"x":920,"y":338},"frameCount":1,"looping":true,"frameDelay":4,"version":"RZf4stfFZdVD14jxCjSsifSOyX4irjzG","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":338},"rootRelativePath":"assets/v3/animations/yJvgxh7Ox6KsUs2y3qxWG9JARESicHLPwWGPUmtGpBM/9cbbcd7f-e0b3-4318-aefa-116393d2665d.png"},"c05c44be-e836-471f-bfcf-3f772bd5c790":{"name":"restart.png_1","sourceUrl":"assets/v3/animations/yJvgxh7Ox6KsUs2y3qxWG9JARESicHLPwWGPUmtGpBM/c05c44be-e836-471f-bfcf-3f772bd5c790.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"a3Bw7hKtJDmwuj7ysssebx86m8AyE8mJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/yJvgxh7Ox6KsUs2y3qxWG9JARESicHLPwWGPUmtGpBM/c05c44be-e836-471f-bfcf-3f772bd5c790.png"},"cea0153f-1dc6-402d-be7f-8ba90a256e8f":{"name":"obstacle2","sourceUrl":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png","frameSize":{"x":160,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png"},"76f68b0b-2355-4372-9b9d-26b1f1fe7a2b":{"name":"obstacle3","sourceUrl":"assets/api/v1/animation-library/gamelab/MatyzuecEWjBMV8EmXXC1W7PqpeBhK.t/category_animals/bear_with_fish.png","frameSize":{"x":222,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"MatyzuecEWjBMV8EmXXC1W7PqpeBhK.t","loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MatyzuecEWjBMV8EmXXC1W7PqpeBhK.t/category_animals/bear_with_fish.png"},"3b161f6d-5dae-4dbd-a7f2-bd41d78d4cf7":{"name":"obstacle1","sourceUrl":"assets/api/v1/animation-library/gamelab/.VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN/category_animals/turtle.png","frameSize":{"x":300,"y":146},"frameCount":1,"looping":true,"frameDelay":2,"version":".VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":146},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.VAoZg.mBSE5KfYeq6Q44cUk8RhGhBYN/category_animals/turtle.png"},"29625572-51d2-4b97-a5dd-86e9f56a990b":{"name":"obstacle4","sourceUrl":"assets/api/v1/animation-library/gamelab/jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq/category_animals/cow.png","frameSize":{"x":265,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq","loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq/category_animals/cow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 0;
var END = 1;

var gameState = PLAY;

var score = 0;

var sprite = createSprite(200, 280, 0, 0);
sprite.setAnimation("farm_land_1");
sprite.scale = 1.5;
sprite.x = sprite.width/2;

var player = createSprite(50,390,8,20);
player.setAnimation("Animation 1.jpg_1");
player.scale = 0.4;
player.setCollider("circle",0,0,100);


var ground = createSprite(200,390,400,10);
ground.visible = false;

var ObstaclesGroup = createGroup();

var sun = createSprite(350,50,20,20);
sun.setAnimation("sun_1");
sun.scale = 0.5;

var Obstacles = createSprite(400,350,5,20);
Obstacles.velocityX = -3;
Obstacles.scale =  0.2;

var restart = createSprite(200,255,20,20);
restart.setAnimation("restart.png_1");
restart.scale = 0.25;
restart.visible = false;

var gameOver = createSprite(200,190,20,20);
gameOver.setAnimation("game over.png_1");
gameOver.scale = 0.175;
gameOver.visible = false;

textSize(30);
textFont("Arial Black");
textStyle(BOLD);
stroke("red");
fill("white");

function draw() {
  background("white");
  //console.log(player.y);   
  
  if (gameState === PLAY) {
    sprite.velocityX = -(6 + 4*score/100);
    
    score = score + Math.round(World.frameRate/60);
    
    if (sprite.x<100) {
      sprite.x = sprite.width/2; 
    } 
    
    if(keyDown("space") && player.y >= 345){
      player.velocityY = -19;
      playSound("assets/category_jump/arcade_game_jump_1.mp3");
    }
    
    player.velocityY = player.velocityY + 0.8;
    
    if(score%100 === 0 && score > 0){
      playSound("assets/category_achievements/vibrant_game_slot_machine_win_3.mp3");
    }
  
    spawnObstacles();   
    
    if(ObstaclesGroup.isTouching(player)){
      gameState = END;
      playSound("assets/category_digital/failure.mp3");
    }
    
  } else if(gameState === END) {
    restart.visible = true;
    gameOver.visible = true;
    
    sprite.velocityX = 0;
    player.velocityY = 0;
    
    ObstaclesGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
  }
  
  if(mousePressedOver(restart)){
    reset();
  }
  
  player.collide(ground);
 
  drawSprites();
  
  text("Score:" + score,50,50);
}

function reset(){
  gameState = PLAY;
  
  restart.visible = false;
  gameOver.visible = false;
  
  ObstaclesGroup.destroyEach();
  
  score = 0;
}

function spawnObstacles(){
  if (World.frameCount%100 ===0) {
    var Obstacles = createSprite(400,350,5,20);
    Obstacles.velocityX = -(5 + 3*score/100);
    
    var rand  = randomNumber(1,4);
    Obstacles.setAnimation("obstacle" + rand);
    Obstacles.scale = 0.4;
    
    Obstacles.lifetime = 136;
    
    ObstaclesGroup.add(Obstacles);
  }
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
