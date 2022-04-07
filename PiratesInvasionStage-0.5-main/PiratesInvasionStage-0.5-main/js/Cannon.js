class Cannon{
    constructor(x, y, w, h){
this.x = x 
this.y = y 
this.w  =w 
this.h = h 
//this.angle = angle
    }
    show(){
        push()
        fill("gray")
        //rotate(this.angle)
        rect(130,80, this.w, this.h)
        arc(this.x-40,this.y+80,180,230,PI,TWO_PI)
        pop()
    }
}