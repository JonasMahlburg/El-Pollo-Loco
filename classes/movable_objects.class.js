class movableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

   //_--------------Loading---------------

    loadImage(path){
this.img = new Image();
this.img.src = path;
    }

    loadImages (arr) {
        arr. forEach((path) => {
        let img = new Image();
        img. src = path;
        this.imageCache[path] = img;
        });
    }

    //---------Moving---------

    moveRight(){
        console.log('moving Right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;  
         }, 1000/ 60);
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround()|| this.speedY > 0){
                   this.y -= this.speedY;
                   this.speedY -= this.acceleration;
            }
        }, 1000/ 25);
    }

    isAboveGround(){
        return this.y <150;
    }

}

