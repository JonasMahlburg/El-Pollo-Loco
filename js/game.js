let canvas;
let world;
let keyboard = new Keyboard();
let firstPlayTrough = false;
let mariachi = new Audio('audio/Titlemelody.mp3');


function showStory(){
  document.getElementById('storyBoard').style.display="flex"
  document.getElementById('storyBoard').innerHTML= `<div class="storyBoardContainer">
  <span>Pepe <br> please help the Mariachi musicians to get smooth fresh chickenbreasts for there Tacos</span>
  <button class="closeBtn" onclick="closeStory()">Story told</button>
  </div>`
}

function closeStory(){
  document.getElementById('storyBoard').style.display="none";
}

function playMariachi(){
  mariachi.volume= 0.2;
  mariachi.play();
}

function toggleMusic(){
 mariachi.volume= 0.2;
 if(mariachi.paused) {
  mariachi.play();
 }else{
  mariachi.pause();
 };
}

function startGame(){
  if(!firstPlayTrough){
      document.getElementById('startScreen').style.display="none";
  clearAllIntervals()
  initLevel();
  init();
  
  }
firstPlayTrough = true;
}

 function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function endGame(id){
  clearAllIntervals();
  document.getElementById('startScreen').style.display="flex";
  if (id == 1){
    document.getElementById('startScreenImage').src= "img_pollo_locco/img/9_intro_outro_screens/win/won_1.png";
  }else if (id == 2){
    document.getElementById('startScreenImage').src= "img_pollo_locco/img/9_intro_outro_screens/win/won_2.png";
  }else if (id == 3){
    document.getElementById('startScreenImage').src= "img_pollo_locco/img/9_intro_outro_screens/game_over/oh no you lost!.png";
  }
  firstPlayTrough = false;
  mariachi.pause();
 }

function init(){
   
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
   
}

window.addEventListener ("keydown", (e) => {
 if(e.keyCode == 39){
   keyboard.RIGHT = true;
 };
 if(e.keyCode == 37){
   keyboard.LEFT = true;
 };
 if(e.keyCode == 38){
   keyboard.UP = true;
 };
 if(e.keyCode == 40){
   keyboard.DOWN = true;
 };
 if(e.keyCode == 32){
   keyboard.SPACE = true;
 };
 if(e.keyCode == 68){
  keyboard.D = true;
};
})

window.addEventListener ("keyup", (e) => {
   if(e.keyCode == 39){
     keyboard.RIGHT = false;
   };
   if(e.keyCode == 37){
     keyboard.LEFT = false;
   };
   if(e.keyCode == 38){
     keyboard.UP = false;
   };
   if(e.keyCode == 40){
     keyboard.DOWN = false;
   };
   if(e.keyCode == 32){
     keyboard.SPACE = false;
   };
   if(e.keyCode == 68){
    keyboard.D = false;
  };
  })

function bindPresstoBtn(){
  document.getElementById("mobile_left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("mobile_left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("mobile_right").addEventListener("touchstart", (e) => {
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

  document.getElementById("mobile_throw").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });
  document.getElementById("mobile_throw").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document.getElementById("mobile_start").addEventListener("touchstart", (e) => {
    e.preventDefault();
    startGame()
  });

  document.getElementById("mobile_mute").addEventListener("touchstart", (e) => {
    e.preventDefault();
   toggleMusic()
  });
}



