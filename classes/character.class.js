class Character extends movableObject{
 height = 280;
 y = 150;
IMAGES_WALKING = [
    'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
    'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
];
currentImage = 0;

constructor(){
    super().loadImage('./img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
}

animate(){
setInterval(()=> {
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = this.IMAGES_WALKING[i];
this.img = this.imageCache[path];
this.currentImage++;
},1000);

}
    jump(){

    }
}