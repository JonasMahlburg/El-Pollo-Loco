class Clouds extends movableObject{

    y = 50;
    height = 250;
    width = 500;

constructor(){
    super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
    this.x = Math.random() * 500; //random clouds placement on x- and y axis
    this.animate();
}
   

animate() {
    setInterval(() => {
       this.x -= 0.15;  
    }, 1000/ 60);
}
}
