class bossBar extends drawableObject{

    IMAGES = [
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];

  
/**
 * access functions of superior class and set characteristics of Bossbar
 */
    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x= 320;
        this.y= 400;
        this.width = 400;
        this.height = 60;
        this.setPercentage(100);
        }

    
/**
 * loading the right Image for the energyBar of the endboss
 * 
 * @param {percentage} percentage -parameter sets the right Image for Bar
 */    
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        }

   /**
    * gives the Image Number for Bossbar
    * 
    * @returns - gives back the number wich Image should be loaded from Array
    */
     resolveImageIndex(){
        if (this.percentage == 100){
            return 5;
        }else if(this.percentage >= 80){
            return 4
        }else if(this.percentage >= 60){
            return 3
        }else if(this.percentage >= 40){
            return 2
        }else if(this.percentage >= 20){
            return 1
        }else{
            return 0
        }
    }

    
}