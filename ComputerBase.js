class CBase{
    constructor(x, y, w, h){
       var options = {
           isStatic:true
       }
       this.image = loadImage("assets/base2.png")
        this.x = x 
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
    }
    show(){

imageMode(CENTER)
image(this.image,300,400,this.w,this.h)    }
}