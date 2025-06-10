let click_direction = 0;

//skin array
const skin_sprites = [
    'imgs/idle-sprite.png',
    'imgs/skin/pale.png',
    'imgs/skin/white.png',
    'imgs/skin/brown.png',
    'imgs/skin/light-skin.png',
    'imgs/skin/black.png',
];

//object of the options of sprites
const spriteOptions = {
    //proprieties that can be costumized about the object 
    eyes: [
        'imgs/eyes/black.png',
        'imgs/eyes/blue.png',
        'imgs/eyes/green.png',
        'imgs/eyes/brown.png'
    ],
    hair: [
        'imgs/hair/hair01.png',
        'imgs/hair/hair02.png',
        'imgs/hair/hair03.png',
        'imgs/hair/hair04.png',
        'imgs/hair/hair05.png',
    ],
    clothes: [
        'imgs/clothes/clothe1.png',
        'imgs/clothes/clothe2.png',
        'imgs/clothes/clothe3.png',
        'imgs/clothes/clothe4.png',
        'imgs/clothes/clothe5.png'
    ],
    wings: [
        'imgs/wings/wing1.png',
        'imgs/wings/wing2.png',
        'imgs/wings/wing3.png',
    ]
};

//change the skin color code
document.getElementById("right").addEventListener('click',changeSkinRgt);
document.getElementById("left").addEventListener('click',changeSkinlft);

function changeSkinRgt(){
    document.getElementById("click-sound").play();
    if (click_direction < skin_sprites.length -1){
        click_direction ++;
        document.getElementById("skin-layer").src=skin_sprites[click_direction];
    }
}

function changeSkinlft(){
    document.getElementById("click-sound").play();
    if (click_direction > 0){
         click_direction --;
        document.getElementById("skin-layer").src=skin_sprites[click_direction];
    }
}

//change all the other sprites
document.querySelectorAll(".select-box > div").forEach(optionDiv =>{
    //extracts the layer
    const layer = optionDiv.id.replace("-options", "");
    //cacthes every image inside the div
    const imgs = optionDiv.querySelectorAll("img");
    imgs.forEach((img,index) => {
        img.addEventListener('click', () =>{
            const sprite = spriteOptions[layer][index];
            document.getElementById(`${layer}-layer`).src = sprite;
        });
    });
});

//nav Menu
document.querySelectorAll("nav button").forEach(button =>{
    button.addEventListener('click',() => {
        document.getElementById("click-sound").play();
        //sees witch area e selected
        const selected = button.id;
        //hides all sections
        document.querySelectorAll(".option-section").forEach(section => {
            section.style.display = "none";
            console.log("none")
        });
        //gets the section to show on screen
        const sectionToShow = document.getElementById(`${selected}-options`);
        if (sectionToShow) {
            sectionToShow.style.display = "flex";
        } 
    });
});

//audio button
document.getElementById("audio-button-off").addEventListener('click',() => {
    document.getElementById("audio-button-off").style.display = "none";

    document.getElementById("audio-button-on").style.display = "block";

    const audio = document.getElementById("bg-music");
    audio.play();
    
})

document.getElementById("audio-button-on").addEventListener('click',() => {
    document.getElementById("audio-button-on").style.display = "none";

    document.getElementById("audio-button-off").style.display = "block";

    const audio = document.getElementById("bg-music");
    audio.pause();
    
})