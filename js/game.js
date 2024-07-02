let canvas;
let ctx;
let charackter = new Image();

function init(){
   canvas = document.getElementById('canvas');
   ctx = canvas.getContext('2d');
   charackter.src = '../img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png';

   setTimeout(function() {
     ctx.drawImage(charackter, 20, 20, 50, 150)
   }, 2000)
  
}