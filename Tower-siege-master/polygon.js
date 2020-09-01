class Polygon {
    constructor(x,y){
      var options={
       density:1.0
      }
      this.body=Bodies.circle(x,y,50,options);
      this.image = loadImage("Capture.PNG");
      World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y)
    }
  }