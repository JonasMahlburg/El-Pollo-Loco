class Chicken extends movableObject {
constructor(){
    super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

    this.x = 200 + Math.random() * 500; // random chicken placement at 200 - 700 pixel on x-axis
};
  
    
}