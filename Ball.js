  
  class Ball {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,23,options);
        fill('blue');
        stroke('skyblue')
        strokeWeight(5)
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,47,47);
            translate(pos.x,pos.y);
            pop();
        }

};