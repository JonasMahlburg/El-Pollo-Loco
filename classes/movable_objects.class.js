class movableObject extends drawableObject{
   
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    Bottle = 0;
    Coin = 0;
    Offset = {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    };

    //---------Moving---------

    /**
     * moves object to the right
     */
    moveRight(){
        this.x += this.speed;
    }
    /**
     * moves object to the left
     */
    moveLeft(){
            this.x -= this.speed;      
    }

    /**
     * let the character jump
     */
    jump(){
        this. speedY = 20;
    }

    /**
     * goes trough the Array of Images and displays them one by one
     * 
     * @param {images} images - path of Image source
     */
    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * sets gravity 
     */
    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround()|| this.speedY > 0){
                   this.y -= this.speedY;
                   this.speedY -= this.acceleration;
            }
        }, 1000/ 25);
    }

    /**
     * 
     * @returns - gives back that the Y Coordinate of the object is 150 -> character is the air
     */
    isAboveGround(){
        if (this instanceof throwableObject){
            return true
        }else{
            return this.y <150;
        }
        
    }

    /**
     * calculate if objects are colliding
     * 
     * @param {movableObject} mo - the object the character is colliding with 
     * @returns - gives back the result
     */
    isColliding(mo) {
return this.x + this.width - this.Offset.right > mo.x + mo.Offset.left && 
this.y + this.height - this.Offset.bottom > mo.y + mo.Offset.top &&
 this.x + this.Offset.left < mo.x + mo.width - mo.Offset.right && 
 this.y + this.Offset.top < mo.y + mo.height - mo.Offset.bottom
}

/**
 * energy of Object (character or enemy) depleets by 5. Timestamp at hit
 */
 hit(){
    this.energy -= 5;
    if (this.energy < 0){
        this.energy = 0;
    }else{
        this.lastHit = new Date().getTime();
    }
 }

 /**
  * in the time of 1 second the object cant get hurt
  * 
  * @returns -gives back the time that passed afetr hit when its under 1 second
  */
 isHurt(){
    let timepassed = new Date().getTime() - this.lastHit; // Time passed in ms
    timepassed = timepassed / 1000; // Time passed in s
    return timepassed < 1;

 }

 /**
  * checks if the energy is 0
  * 
  * @returns - give back true if energy is 0
  */
 isDead(){
    return this.energy ==0;

 }

 /**
  * increase the number of bottles for salsa-Bar
  */
 collectBottle(){
    this.Bottle += 10;
    
 }
/**
 * decrease the number of bottles for salsa-Bar
 */
 throwBottle(){
    this.Bottle -= 10;
 }
/**
 * increase the number of Coins for coin-Bar
 */
 collectCoin(){
    this.Coin += 10;
    
 }

}

