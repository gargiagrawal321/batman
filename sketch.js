const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

function preload(){
    thunder1 = loadImage("thunderbolt1.png");
    thunder2 = loadImage("thunderbolt2.jpeg");
    thunder3 = loadImage("thunderbolt3.jpeg");
    thunder4 = loadImage("thunderbolt4.jpeg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,500);
    umbrella = new Umbrella(200,215);

    //creating drops
    if(frameCount % 150 === 0){
        for(var i=0; i<100; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){

    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = 0.3;
    }

    if(frameCount%90===0){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<100; i++){
        drops[i].showDrop();
        drops[i].updateY()
}
drawSprites();
}