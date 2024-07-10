class movableObject extends drawableObject{
   
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    Bottle = 0;
    Coin = 0;

    //---------Moving---------

    moveRight(){
        this.x += this.speed;
    }

    moveLeft(){
            this.x -= this.speed;      
    }

    jump(){
        this. speedY = 20;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
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
        if (this instanceof throwableObject){
            return true
        }else{
            return this.y <150;
        }
        
    }


    isColliding(mo) {
return this.x + this.width > mo.x && 
this.y + this.height > mo.y &&
 this.x < mo.x && 
 this.y < mo.y + mo.height
}

 hit(){
    this.energy -= 5;
    if (this.energy < 0){
        this.energy = 0;
    }else{
        this.lastHit = new Date().getTime();
    }
 }

 isHurt(){
    let timepassed = new Date().getTime() - this.lastHit; // Time passed in ms
    timepassed = timepassed / 1000; // Time passed in s
    return timepassed < 1.5;

 }

 isDead(){
    return this.energy ==0;

 }

 collectBottle(){
    this.Bottle += 10;
    
 }

 throwBottle(){
    this.Bottle -= 10;
 }

 collectCoin(){
    this.Coin += 10;
    
 }

}

