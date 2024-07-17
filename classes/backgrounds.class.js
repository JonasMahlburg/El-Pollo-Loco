/**
 * The Background class represents a background image in the game, extending the movableObject class.
 */
class Background extends movableObject {
    width = 720;
    height = 480;
    
    /**
     * Constructs a new Background instance.
     * 
     * @param {string} imagePath - The path to the image file for the background.
     * @param {number} x - The x-coordinate for the background's position.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}
