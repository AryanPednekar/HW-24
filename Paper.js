class Paper{
    constructor(x, y, diameter) {
        var options = {
          isStatic:false,
            'friction':0.5,
            'density':1.2,
            'restitution':0.3
            
        }
        this.body = Bodies.circle(x,y ,diameter,options );
        
        this.diameter = diameter;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        
        
        
        ellipseMode(CENTER);
        
       ellipse(pos.x, pos.y, this.diameter);
        
      }
    
   
  };