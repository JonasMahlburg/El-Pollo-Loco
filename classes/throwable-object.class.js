class throwableObject extends movableObject{

    Offset = {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    };

    constructor(x, y){
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width =50;
        this.throw();

    }

    throw(){
        this.speedY = 10;
        this.applyGravity();
        setInterval(() =>{
            this.x += 10;
        }, 50)
    }
}