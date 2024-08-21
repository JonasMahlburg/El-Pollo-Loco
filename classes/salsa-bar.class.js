/**
 * The salsaBar class represents a status bar for displaying salsa bottle fill levels in the game,
 * extending the drawableObject class.
 */
class salsaBar extends drawableObject {
  IMAGES = [
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  percentage = 0;

  /**
   * Constructs a new salsaBar instance.
   * Loads the images for different fill levels, sets the position and dimensions of the salsa bar,
   * and initializes it with a percentage of 0.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage of the salsa bar and updates the displayed image accordingly.
   *
   * @param {number} percentage - The percentage of salsa fill level to be displayed (0 to 100).
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index based on the current percentage of salsa fill level.
   *
   * @returns {number} The index of the image to be displayed based on the percentage.
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
