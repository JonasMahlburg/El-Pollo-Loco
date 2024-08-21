/**
 * The npc class represents a non-player character (NPC) in the game, extending the drawableObject class.
 */
class npc extends drawableObject {
  height = 280;
  width = 280;
  x = -100;
  y = 200;

  /**
   * Constructs a new npc instance.
   * Initializes the NPC with a specified image and sets its default position and dimensions.
   */
  constructor() {
    super().loadImage(
      "img_pollo_locco/img/10_own_images/musician-4207759_1280.png"
    );
  }
}
