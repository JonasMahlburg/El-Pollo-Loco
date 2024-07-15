class finish extends drawableObject{
    
    START_IMAGES = [
        'img_pollo_locco/img/9_intro_outro_screens/start/startscreen_1.png',
        'img_pollo_locco/img/9_intro_outro_screens/start/startscreen_2.png'
    ];

    GAME_OVER_IMAGES = [
        'img_pollo_locco/img/9_intro_outro_screens/game_over/game over!.png',
        'img_pollo_locco/img/9_intro_outro_screens/game_over/game over.png',
        'img_pollo_locco/img/9_intro_outro_screens/game_over/oh no you lost!.png',
        'img_pollo_locco/img/9_intro_outro_screens/game_over/you lost.png'
    ];

    WIN_IMAGES = [
        'img_pollo_locco/img/9_intro_outro_screens/win/win_1.png',
        'img_pollo_locco/img/9_intro_outro_screens/win/win_2.png',
        'img_pollo_locco/img/9_intro_outro_screens/win/won_1.png',
        'img_pollo_locco/img/9_intro_outro_screens/win/won_2.png'
    ];

    constructor(){
        super().loadImages(this.WIN_IMAGES);
        // this.loadImages(this.START_IMAGES);
    //     this.loadImages(this.GAME_OVER_IMAGES);
       
    }
}