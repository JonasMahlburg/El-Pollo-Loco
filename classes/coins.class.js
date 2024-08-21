/**
 * The coins class represents coin objects in the game, extending the drawableObject class.
 */
class coins extends drawableObject {
  height = 100;
  width = 100;

  IMAGES = [
    "img_pollo_locco/img/8_coin/coin_1.png",
    "img_pollo_locco/img/8_coin/coin_2.png",
  ];

  /**
   * Constructs a new coins instance.
   * Initializes the coin with a random position within specified ranges and loads the initial image.
   */
  constructor() {
    super().loadImage("img_pollo_locco/img/8_coin/coin_1.png");
    this.x = 200 + Math.random() * 1700;
    this.y = Math.random() * 280;
  }
}
