const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,ground2,ground3,can1,can2,can3,can4,can5,can6,can7,can8,can9
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(450,390,900,20)
  ground2=new Ground(390,300,250,10)
  ground3=new Ground(700,200,200,10)
  //level 1
  can1=new Box(300,275,30,40)
  can2=new Box(330,275,30,40)
  can3=new Box(360,275,30,40)
  can5=new Box(390,275,30,40)
  can6=new Box(420,275,30,40)
  can7=new Box(450,275,30,40)
  can4=new Box(480,275,30,40)
  //level 2
  can8=new Box(330,235,30,40)
  can9=new Box(360,235,30,40)
  can10=new Box(390,235,30,40)
  can11=new Box(420,235,30,40)
   can12=new Box(450,235,30,40)
//level 3
can13=new Box(360,195,30,40)
 can14=new Box(390,195,30,40)
 can15=new Box(420,195,30,40)
 //level 4
 can16=new Box(390,155,30,40)
//level 1
can17=new Box(640,175,30,40)
can18=new Box(670,175,30,40)
can19=new Box(700,175,30,40)
can20=new Box(730,175,30,40)
can21=new Box(760,175,30,40)
//level 2
can22=new Box(670,135,30,40)
can23=new Box(700,135,30,40)
can24=new Box(730,135,30,40)
//level 3
can25=new Box(700,95,30,40)

polygon=new Polygon(50,200)
slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display()
   ground2.display()
   ground3.display()
  can1.display()
  can2.display()
  can3.display()
  can4.display()
  can5.display()
  can6.display()
  can7.display()
  can8.display()
  can9.display()
  can10.display()
  can11.display()
  can12.display()
  can13.display()
  can14.display()
  can15.display()
  can16.display()
  can17.display()
  can18.display()
  can19.display()
  can20.display()
  can21.display()
  can22.display()
  can23.display()
  can24.display()
  can25.display()
  polygon.display()
  slingshot.display()
  drawSprites();
}
function mouseDragged(){
 
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polygon.body,{x:200,y:50})
        slingshot.attach(polygon.body);      
        Matter.Body.setAngularVelocity(polygon.body,0)
    }
}