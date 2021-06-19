class paper
{
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            //either modify friction/density or apply force parameters in sketch.js
            restitution:0,
            friction:1.0,
            density:1.0
        }
        this.x=x;
		this.y=y;
		this.r=70;
		this.body=Bodies.circle(this.x, this.y, this.r/3, options)
        this.image = loadImage("Crumpledpaper.png");
		World.add(world, this.body);

    }

    display()
    {
        var pos=this.body.position;		
        

			push()
			translate(pos.x, pos.y);
            fill(255,0,255)
			imageMode(CENTER)
			strokeWeight(4);
			image(this.image,0,0,this.r, this.r);
			pop()
    }
}