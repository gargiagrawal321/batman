class Umbrella {
    constructor(x,y){
      var options = {
        isStatic: true,
  }
    this.image = loadImage("man.png");
    this.umbrella = Bodies.circle(200,215,100,options);
    this.radius = 100;
    World.add(world, this.umbrella)
    }
  
  display(){
    var pos = this.umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,200,350);
  }}

