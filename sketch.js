const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber, rubber2, rubber3, rubber4;
var iron, iron2, iron3;
var stone1, stone2, stone3, stone4, stone4, stone5, stone6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);    
    rubber = new Rubber(900,450,70);
    iron = new Iron(600, 100);
    iron2 = new Iron(200, 200);
    iron3 = new Iron(800, 200);
    stone1 = new Stone(400, 300, 100, 100);
    stone2 = new Stone(500, 300, 100, 100);
    stone3 = new Stone(200, 300, 100, 100);
    stone4 = new Stone(700, 300, 100, 100);
    stone5 = new Stone(1000, 300, 100, 100);
    stone6 = new Stone(900, 300, 100, 100);
    rubber2 = new Rubber(800, 50, 70);
    rubber3 = new Rubber(400, 50, 70);
    rubber4 = new Rubber(300, 50, 70);
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    iron.display();
    iron2.display();
    iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();





    
 
}