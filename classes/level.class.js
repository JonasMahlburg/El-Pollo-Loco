/**
 * The Level class represents a game level, including its enemies, endboss, clouds, coins, 
 * background objects, and bottles in sand.
 */
class Level {
    enemies;
    endboss;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 2200;
    bottleInSand;

    /**
     * Constructs a new Level instance.
     * 
     * @param {Array} enemies - The array of enemy objects in the level.
     * @param {Object} endboss - The endboss object of the level.
     * @param {Array} clouds - The array of cloud objects in the level.
     * @param {Array} coins - The array of coin objects in the level.
     * @param {Array} backgroundObjects - The array of background objects in the level.
     * @param {Array} bottleInSand - The array of bottle objects in the sand in the level.
     */
    constructor(enemies, endboss, clouds, coins, backgroundObjects, bottleInSand) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        this.bottleInSand = bottleInSand;
    }
}
