class bottleInSand extends drawableObject{

    height = 60;
    width = 60;
    y = 360;
    
   
        constructor(){
            super().loadImage('img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
    
            this.x = 200 + Math.random() * 1700;
        }
}