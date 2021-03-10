class drop {
    constructor(x){
        var options = { 
         restitution:1.3, 
         friction:0.1, 
         density:3 
        }
    
        this.body = Bodies.circle(x, 1, 2, options);
    this.radius = 2;
    this.image = loadImage("images/drop.png");
  

    World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius) 

    

  
        for(var i = 0; i < 900; i=i+1){

           this.body.y = i

                }

    }
}