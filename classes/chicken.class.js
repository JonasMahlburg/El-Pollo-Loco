class Chicken extends movableObject {
height = 90;
y = 330;
energy = 1;
IMAGES_WALKING =[
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
];
Offset = {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
};


dead_sound = new Audio('audio/splash.mp3');

/**
 * access function of superior class and set characteristcs (walking-speed and position on X-axis) for the chickens
 */
constructor(){
    super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 300 + Math.random() * 1500; 
    this.speed = 0.15 + Math.random() * 0.25;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
};
  
/**
 * let the chickens move from right to left and gives them a walking Animation
 */
animate(){
    setInterval(() => {
         this.moveLeft(); 
    }, 1000/ 60);
   
    setInterval(()=> {
 this.playAnimation(this.IMAGES_WALKING)
    },1000/ 60);

    if(this.energy==0){
        this.dead_sound.play();
        
     }
    
    }
    
}