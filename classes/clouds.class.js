/**
 * The Clouds class represents cloud objects in the game, extending the movableObject class.
 */
class Clouds extends movableObject {
    y = 50;
    height = 250;
    width = 500;

    /**
     * Constructs a new Clouds instance.
     * Initializes the cloud with a random x-coordinate and starts its animation.
     */
    constructor() {
        super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; // Random clouds placement on x-axis
        this.animate();
    }

    /**
     * Starts the animation for the clouds, moving them to the left.
     */
    animate() {
        this.moveLeft();
    }
}

