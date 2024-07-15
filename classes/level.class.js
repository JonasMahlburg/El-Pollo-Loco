class Level {
    enemies;
    endboss;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 2200;
    bottleInSand;

    constructor(enemies, endboss, clouds, coins, backgroundObjects, bottleInSand){
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        this.bottleInSand = bottleInSand;
    };
}