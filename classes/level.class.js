class Level {
    enemies;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 2200;
    bottleInSand;

    constructor(enemies, clouds, coins, backgroundObjects, bottleInSand){
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        this.bottleInSand = bottleInSand;
    }
}