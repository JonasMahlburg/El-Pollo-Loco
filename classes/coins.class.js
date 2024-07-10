class coins extends drawableObject{
height = 100;
width = 100;

    IMAGES = [
        'img_pollo_locco/img/8_coin/coin_1.png',
         'img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor(){
        super().loadImage('img_pollo_locco/img/8_coin/coin_1.png');

        this.x = 200 + Math.random() * 1700;
        this.y = Math.random() * 280;
    }
}