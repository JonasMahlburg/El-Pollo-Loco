let canvas;
let world;
let keyboard = new Keyboard();
let firstPlayTrough = false;
let audioElements = [
  new Audio("audio/Titlemelody.mp3"),
  new Audio("audio/walking.mp3"),
  new Audio("audio/DIED_sound.mp3"),
  new Audio("audio/hit.mp3"),
  new Audio("audio/angryChicken.mp3"),
  new Audio("audio/winning_Sound.mp3"),
];
let mariachi = audioElements[0];
let isMuted = false;

audioElements.forEach((audio) => {
  audio.volume = 0.2;
});

/**
 * Displays the backstory of the game in a popup over the canvas.
 */
function showStory() {
  document.getElementById("storyBoard").style.display = "flex";
  document.getElementById(
    "storyBoard"
  ).innerHTML = `<div class="storyBoardContainer">
  <span>Pepe <br> please help the Mariachi musicians to get smooth fresh chickenbreasts for there Tacos</span>
  <button class="closeBtn" onclick="closeStory()">Story told</button>
  </div>`;
}

/**
 * Closes the popup displaying the game's backstory.
 */
function closeStory() {
  document.getElementById("storyBoard").style.display = "none";
}

/**
 * Toggles the mute state for all audio elements and adjusts the music accordingly.
 */
function toggleMute() {
  isMuted = !isMuted;
  audioElements.forEach((audio) => {
    audio.muted = isMuted;
    if (!isMuted) {
      audio.pause();
    }
  });
  toggleMusic();
  if (!isMuted) {
    document.getElementById("musicButton").style.backgroundImage =
      "url('img_pollo_locco/img/10_own_images/soundOn.png')";
    document.getElementById("mobile_mute_img").src =
      "img_pollo_locco/img/10_own_images/soundOn.png";
  } else {
    document.getElementById("musicButton").style.backgroundImage =
      "url('img_pollo_locco/img/10_own_images/soundOff.png')";
    document.getElementById("mobile_mute_img").src =
      "img_pollo_locco/img/10_own_images/soundOff.png";
  }
}

/**
 * Toggles the background music on or off based on its current state and the mute status.
 */
function toggleMusic() {
  if (mariachi.paused && !isMuted) {
    mariachi.play();
  } else {
    mariachi.pause();
  }
}

/**
 * Starts the game by initializing the level and world, and removing the titlescreen.
 * Plays the background music if it is the first playthrough.
 */
function startGame() {
  if (!firstPlayTrough) {
    document.getElementById("startScreen").style.display = "none";
    clearAllIntervals();
    initLevel();
    init();
    toggleMusic();
  }
  firstPlayTrough = true;
}

/**
 * Stops all currently running intervals in the game.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Ends the game, displays the appropriate end screen based on the game result, and stops all intervals.
 *
 * @param {number} id - Indicates the condition to determine which end screen to display.
 */
function endGame(id) {
  clearAllIntervals();
  document.getElementById("startScreen").style.display = "flex";
  if (id == 1) {
    document.getElementById("startScreenImage").src =
      "img_pollo_locco/img/9_intro_outro_screens/win/won_1.png";
  } else if (id == 2) {
    document.getElementById("startScreenImage").src =
      "img_pollo_locco/img/9_intro_outro_screens/win/won_2.png";
  } else if (id == 3) {
    document.getElementById("startScreenImage").src =
      "img_pollo_locco/img/9_intro_outro_screens/game_over/oh no you lost!.png";
  }
  firstPlayTrough = false;
  mariachi.pause();
}

/**
 * Initializes the game by setting up the canvas and world with the keyboard controls.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * Detects which key is pressed and updates the corresponding property in the `keyboard` object.
 */
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

/**
 * Detects which key is released and updates the corresponding property in the `keyboard` object.
 */
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    e.preventDefault();
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

/**
 * Binds touch events on mobile controls to the corresponding properties in the `keyboard` object.
 * This function ensures mobile devices can control the game similarly to keyboard inputs.
 */
function bindPresstoBtn() {
  document.getElementById("mobile_left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("mobile_left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document
    .getElementById("mobile_right")
    .addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
    });
  document.getElementById("mobile_right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("mobile_jump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById("mobile_jump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document
    .getElementById("mobile_throw")
    .addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.D = true;
    });
  document.getElementById("mobile_throw").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document
    .getElementById("mobile_start")
    .addEventListener("touchstart", (e) => {
      e.preventDefault();
      startGame();
    });

  document.getElementById("mobile_mute").addEventListener("touchstart", (e) => {
    e.preventDefault();
    toggleMute();
  });
}
