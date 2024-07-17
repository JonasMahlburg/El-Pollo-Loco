class Endboss extends movableObject {

    height = 500;
    width = 300;
    y = -55;
    x = 2200;
    energy = 100;
 

    IMAGES_ALERT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_HURT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_ATTACK = [
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

hadFirstContact = false;

Offset = {
    bottom: 20, 
    top: 90,
    left: 10,
    right: 0,
};

bagook = new Audio('audio/angryChicken.mp3');
   

    constructor(){
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }
     

    animate(){
        let i = 0;

setInterval(()=> {
    
            if (i < 50) {
                this.playAnimation(this.IMAGES_ALERT);
                
                } else {
                    this.playAnimation(this.IMAGES_WALKING);
                }
                i++;
                if(world.character.x >= 1900 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact= true;
                }
                }, 150);

 setInterval(() => {

    if (this.energy <= 0) {
        if (i < this.IMAGES_DEAD.length) { 
            this.playAnimation(this.IMAGES_DEAD);
            i++;
        } else{
            this.loadImage('img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png');
            clearInterval();
           

               if(world.character.Coin >= 50){
                setTimeout(endGame(2), 1500);
               }
            else{
                setTimeout(endGame(1), 1500);
            }
        }
    }
}, 300);

setInterval(() => {
if(this.energy <= 80){
    this.playAnimation(this.IMAGES_ATTACK)
    this.speed = 15;
}
},150);


};


}
