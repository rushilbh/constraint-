class Chain{

constructor(bodyA,bodyB){

    var properties = {
       bodyA:bodyA,
       bodyB:bodyB,
       stiffness : 0.4,
       length : 20
    }

     this.chain = Constraint.create(properties);
     World.add(world,this.chain);
}

display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4); 
line(pointA.x,pointA.y,pointB.x,pointB.y);

}


} 