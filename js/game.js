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
  clearInterval();
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

  window.addEventListener("touchstart", (e) => {
    if(e ==document.getElementById('mobile_left')){
      keyboard.LEFT = true;
      console.log('links funzt');
    }
    if(document.getElementById('mobile_right')){
      keyboard.RIGHT = true;
      console.log('rechts funzt');
    }
    if(document.getElementById('mobile_jump')){
      keyboard.SPACE = true;
      console.log('jump funzt');
    }
    if(document.getElementById('mobile_throw')){
      keyboard.D = true;
      console.log('throw funzt');
    }
  })

  window.addEventListener("touchend", (e) => {
    if(document.getElementById('mobile_left')){
      keyboard.LEFT = false;
    }
    if(document.getElementById('mobile_right')){
      keyboard.RIGHT = false;
    }
    if(document.getElementById('mobile_jump')){
      keyboard.SPACE = false;
    }
    if(document.getElementById('mobile_throw')){
      keyboard.D = false;
    }
  })