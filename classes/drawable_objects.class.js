class drawableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;


   //_--------------Loading---------------

   loadImage(path){
    this.img = new Image();
    this.img.src = path;
        }
    
        loadImages (arr) {
            arr. forEach((path) => {
            let img = new Image();
            img. src = path;
            this.imageCache[path] = img;
            });
        }
    
        draw(ctx){
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }

        //draws Frames around certain objects for hitdetection
        drawFrame(ctx){         
            if (this instanceof bottleInSand || this instanceof Character || this instanceof coins ){
                ctx.beginPath();
                ctx.lineWidth ='2';                                          
                ctx.strokeStyle = 'yellow';
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.stroke();
            }
         
        }
}