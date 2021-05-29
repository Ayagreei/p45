class obsical{
    constructor(x,y){

        var options={
            isStatic: false
        }
        this.rad = rad;
        this.body = Bodies.circle(x, y, 20, 20, options);
        World.add(world, this.body); 
    }
    display()   {
        var pos = this.body.position;
        var angle = this.body.angle;
        if ( frameCount % 20 ===0){
            ob = createSprite(random(0,1000),0,100,100);
            ob.velocityY = 8;
            ob.lifetime = 65;
            var ran = Math.round(random(1,5))
            switch(ran){
                case 1: ob.addImage("obs",ob1);
                break
                case 2: ob.addImage("obs",ob2);
                break
                case 3: ob.addImage("obs",ob3);
                break
                case 4: ob.addImage("obs",ob4);
                break
                case 5: ob.addImage("obs",ob5);
                break
            }
            obGroup.add(ob);
        }
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0, this.rad, this.rad);
        pop();
    }
}