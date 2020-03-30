//Creates the Baseclass.
class BaseClass{
  //Creates the constructor.
  constructor(x, y, radius) {
    //Makes the objects static
    var options = {
          isStatic: true
    }
    //Creates the bodies.
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    //Adds the bodies to the world.
    World.add(world, this.body);
  }
  display(){
    //Stores the position of the bodies inside pos variable.
    var pos = this.body.position;
    //Stores the angle of the bodies inside angle variable.
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius, this.radius);
    pop();
    }
}