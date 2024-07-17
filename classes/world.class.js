class World {
  // introImage = new startAndFinish();
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new statusBar();
  salsaBar = new salsaBar();
  coinBar = new coinBar()
  bossBar = new bossBar();
  coins = new coins();
  throwableObjects = [];
  npc = new npc();
  bottleInSand = new bottleInSand();
  start = new finish()
  intervals = [];


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    
  }
/**
 * hands over the world class over to character class
 */
  setWorld() {
    this.character.world = this;
  }
/**
 * this function is for setting an interval that runs the checkCollision and checkThrowableObjects functions in a certain time interval
 */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
    }, 200);
  }

  /**
   * if the throwbutton (D) is pressed, this function checks if you have salsa bottles to throw. i fit so one bottle will be spliced out from the Array 
   */
  checkThrowableObjects() {
    if (this.keyboard.D) {
      if (this.character.AMMONITION.length >0){
         let Bottle = new throwableObject(
        this.character.x + 100,
        this.character.y + 100,
      );
      this.throwableObjects.push(Bottle);
      this.character.AMMONITION.splice(0, 1)
    this.character.throwBottle();
      this.salsaBar.setPercentage(this.character.Bottle);
      }
     
    }
  }
/**
 * checks if the character is colliding with sertain objects or enemies
 */
  checkCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if(!this.character.isAboveGround()){
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        }else if(this.character.isAboveGround()){
          enemy.loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
          this.level.enemies.splice(index, 1);
        }

      }
    });
    //Hit detection for Ultra Chicken
    this.level.endboss.forEach((boss) => {
        if(this.character.isColliding(boss)){
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
    });
// Münzen sammeln
    this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          this.character.collectCoin();
          level1.coins.splice(index, 1);
          this.coinBar.setPercentage(this.character.Coin);
        }
      });
    
      this.level.bottleInSand.forEach((salsa, index) => {
        if (this.character.isColliding(salsa)) {
          this.character.collectBottle();
          level1.bottleInSand.splice(index, 1);  // delete bottle from screen
        this.salsaBar.setPercentage(this.character.Bottle);
        this.character.AMMONITION.push('salsa')
        }
      });

      this.throwableObjects.forEach((bottle) => {
        if(bottle.isColliding(this.level.endboss[0])){
          this.level.endboss[0].hit();
          this.bossBar.setPercentage(  this.level.endboss[0].energy);
          
        }
      });
  }

  /**
   * draws every Object onto the canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.salsaBar);
    this.addToMap(this.coinBar);
    if(this.character.x >= 1700){
        this.addToMap(this.bossBar);
    }
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addToMap(this.npc);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottleInSand);

    this.ctx.translate(-this.camera_x, 0);


    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * adding the objects to canvas there are going from right to left
   * 
   * @param {object} objects - objects like, enemies, coins and bottles
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * adding object that is going from left to right
   * 
   * @param {moveableObject} mo - character
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
  
  

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * mirroring the image of character
   * 
   * @param {moveableObject} mo - the Character
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * reseting the Image from turning
   * 
   * @param {moveableObject} mo  - the character
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  

}
