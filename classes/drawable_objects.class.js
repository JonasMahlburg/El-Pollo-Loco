class drawableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    Offset = {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    };


   //_--------------Loading---------------

   /**
    * loading single Image for standidols
    * 
    * @param {src} path source of the image
    */
   loadImage(path){
    this.img = new Image();
    this.img.src = path;
        }
    /**
     * loading multiple Images from Array for animation purpose
     * 
     * @param {array} arr name of the array with source
     */
        loadImages (arr) {
            arr. forEach((path) => {
            let img = new Image();
            img. src = path;
            this.imageCache[path] = img;
            });
        }
    
        /**
         * draws the Images onto the Canvas
         * 
         * @param {ctx} ctx context for canvas proportions
         */
        draw(ctx){
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }

        // drawOffsetFrame(ctx){         
        //     if (this instanceof Character || this instanceof Endboss || this instanceof throwableObject){
        //         ctx.beginPath();
        //         ctx.lineWidth ='2';                                          
        //         ctx.strokeStyle = 'red';
        //         // Berechnung der neuen Position und Größe unter Berücksichtigung des Offsets
        //         let offsetX = this.x + this.Offset.left;
        //         let offsetY = this.y + this.Offset.top;
        //         let offsetWidth = this.width - (this.Offset.left + this.Offset.right);
        //         let offsetHeight = this.height - (this.Offset.top + this.Offset.bottom);
        //         ctx.rect(offsetX, offsetY, offsetWidth, offsetHeight);
        //         ctx.stroke();
        //     }
        // }


}