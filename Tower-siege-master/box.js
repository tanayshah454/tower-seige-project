class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.4,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y,30,40, options);
        this.width = 30;
        this.height =40;
        this.image=loadImage("Capture2.PNG")
        this.visibility=255
        World.add(world, this.body);
      }
      display(){    
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(this.body.angle)
          imageMode(CENTER);
          image(this.image,0,0,30,40);
          pop();
        }else{
          World.remove(world,this.body);
          push()
       console.log("hit");
          this.visibility=this.visibility-5;
          tint(255,this.visibility)
          image(this.image,this.body.position.x, this.body.position.y,30,40);
          pop();
        }
         
        }
      }