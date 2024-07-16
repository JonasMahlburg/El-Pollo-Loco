class throwableObject extends movableObject{

    Offset = {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    };

    BOTTLE_BURST =[
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    constructor(x, y){
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.BOTTLE_BURST);
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