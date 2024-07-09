class Chicken extends movableObject {
height = 90;
y = 330;
IMAGES_WALKING =[
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
];
walking_sound = new Audio('audio/chicken.mp3');

constructor(){
    super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

    this.x = 200 + Math.random() * 500; // random chicken placement at 200 - 700 pixel on x-axis
    this.speed = 0.15 + Math.random() * 0.25;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
};
  
animate(){
    setInterval(() => {
         this.moveLeft(); 
    }, 1000/ 60);
   
    setInterval(()=> {
 this.playAnimation(this.IMAGES_WALKING)
//  this.walking_sound.play();
    },1000/ 60);
    
    }
    
}