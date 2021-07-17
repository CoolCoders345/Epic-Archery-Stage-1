class Player{
    constructor(x, y, w, h){
       var options = {
           isStatic:false
       }
       this.image = loadImage("assets/player.png")
        this.x = x 
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
        World.add(world,this.body)
    }
    show(){

imageMode(CENTER)
image(this.image,300,300,this.w,this.h)    }
}