class Plinkos{
    constructor(x, y, radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 7.5, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255, 255, 255);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 7.5, 7.5);
    }
}