class movableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;

    moveRight(){
        console.log('moving Right');
    }

    loadImage(path){
this.img = new Image();
this.img.src = path;
    }

    moveLeft(){

    }
}