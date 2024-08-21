class Character extends movableObject{
 height = 280;
 y = 50;
 speed = 5;
IMAGES_WALKING = [
    'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
];

IMAGES_JUMPING = [
    'img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
    'img_pollo_locco/img/2_character_pepe/3_jump/J-39.png',
];

IMAGES_HURT = [
    'img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
    'img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
    'img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png'
];

IMAGES_DEAD = [
    'img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
    'img_pollo_locco/img/2_character_pepe/5_dead/D-57.png'
];

IMAGES_STANDING = [
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png',
    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png'
];

COINS = [];

AMMONITION = [];

Offset = {
    bottom: 10,
    top: 120,
    left: 10,
    right: 10,
};

world;
isReallyDead= false;
walking_sound = audioElements[1] ;
isHurt_sound = audioElements[3] ;
dead_sound = audioElements[2] ;


/**
 * The constructor for the class. It initializes the character by loading images, 
 * applying gravity, and starting the animation loops.
 */
constructor(){
    super().loadImage('./img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
    this.loadImages(this.IMAGES_STANDING);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();
    
}

/**
 * Handles the animation and movement logic for the character.
 * Two setInterval loops are used: one for updating the position and 
 * handling the keyboard input, and another for handling the character's 
 * animation based on its state (e.g., walking, jumping, hurt, dead).
 */
animate(){
setInterval(()=> {
    this.walking_sound.pause();
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
       this.moveRight();
       this.otherDirection = false;
       this.walking_sound.play();
    }
    if (this.world.keyboard.LEFT && this.x > 0){
       this.moveLeft();
       this.otherDirection = true;
        this.walking_sound.play();
   }

   if(this.world.keyboard.SPACE && !this.isAboveGround()) {
    this.jump();

    }
  
   this.world.camera_x = -this.x + 100;
   
}, 1000/60)

setInterval(()=> {
     if (this.isDead() && !this.isReallyDead){
        this.isReallyDead= true;
        this.playAnimation(this.IMAGES_DEAD)
        this.dead_sound.play();
        setTimeout(endGame(3), 1500);
    }else{ if (this.isHurt()){
        this.playAnimation(this.IMAGES_HURT)
        this.isHurt_sound.play();
    }else{
         if (this.isAboveGround()){
        this.playAnimation(this.IMAGES_JUMPING)
    }else{ if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //walking Animation
   this.playAnimation(this.IMAGES_WALKING)
    }else {
        this.playAnimation(this.IMAGES_STANDING)
    }
    }      
    }  
    }    
}, 50);
};

}