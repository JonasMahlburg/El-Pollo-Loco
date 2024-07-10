class World {
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

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
    }, 200);
  }

  checkThrowableObjects() {
    if (this.keyboard.D) {
      if (this.character.AMMONITION.length >0){
         let Bottle = new throwableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(Bottle);
      this.character.AMMONITION.splice(0, 1)
    this.character.throwBottle();
      this.salsaBar.setPercentage(this.character.Bottle);
      }
     
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        console.log(enemy, "hurt Pepe");
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
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
  }

 

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
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottleInSand);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
