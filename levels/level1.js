/**
 * Initializes the game level with various objects and assigns it to the global variable `level1`.
 */
function initLevel() {
  level1 = new Level(
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
    ],

    [new Endboss()],

    [new Clouds(), new Clouds(), new Clouds(), new Clouds()],

    [
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
      new coins(),
    ],

    [
      new Background("img_pollo_locco/img/5_background/layers/air.png", -719),
      new Background(
        "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
        -719
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
        -719
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
        -719
      ),
      new Background("img_pollo_locco/img/5_background/layers/air.png", 0),
      new Background(
        "img_pollo_locco/img/5_background/layers/3_third_layer/1.png",
        0
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/2_second_layer/1.png",
        0
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/1_first_layer/1.png",
        0
      ),
      new Background("img_pollo_locco/img/5_background/layers/air.png", 719),
      new Background(
        "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
        719
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
        719
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
        719
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/air.png",
        719 * 2
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/3_third_layer/1.png",
        719 * 2
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/2_second_layer/1.png",
        719 * 2
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/1_first_layer/1.png",
        719 * 2
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/air.png",
        719 * 3
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
        719 * 3
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
        719 * 3
      ),
      new Background(
        "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
        719 * 3
      ),
    ],

    [
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
      new bottleInSand(),
    ]
  );
}
